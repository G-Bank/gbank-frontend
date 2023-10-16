import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import QRCode from 'react-qr-code';

import { Box, Button } from '@mui/material';
import { OutlinedInput, Typography } from '@mui/material';

import BackHeader from '../../ui-component/BackHeader';
import { strings } from '../../localizedString';
import MainCard from '../../ui-component/cards/MainCard';
import LimitedList from '../../ui-component/LimitedList';
import TransactionRow from '../../ui-component/TransactionRow';
import { currencyDetails } from '../models/currency';
import { createPaymentRequest, getCurrencyList, getUserPaymentRequests } from '../../api/financial';
import Loader from '../../ui-component/Loader';
import CurrencySelection from '../../ui-component/CurrencySelection';
import { images } from '../../assets/images';

const methods = {
  nfc: 'nfc',
  qrCode: 'qrCode',
  card: 'card'
};

const PaymentRequestPage = () => {
  const [loading, setLoading] = useState(false);
  const [isRequestCreated, setRequestCreated] = useState(false);
  const [method, setMethod] = useState(methods.nfc);
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [currencyList, setCurrencyList] = useState([]);
  const [payerPhoneNumber, setPayerPhoneNumber] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [requests, setRequests] = useState({ for_me: [], for_others_by_me: [] });

  const { accountId } = useSelector((state) => state.account);

  const history = useHistory();

  useEffect(() => {
    const fetchPaymentInfo = async () => {
      try {
        setLoading(true);
        const { data } = await getUserPaymentRequests();
        setRequests(data);
        const {
          data: { currencies }
        } = await getCurrencyList();
        setCurrencyList(currencies);
        setCurrency(currencies?.[0]);
      } catch (err) {
        setError(String(err.response));
      }
      setLoading(false);
    };
    fetchPaymentInfo();
  }, []);

  const createRequest = () => {
    setLoading(true);
    createPaymentRequest(payerPhoneNumber, accountId, amount, currency, description)
      .then(() => {
        setRequestCreated(true);
        setLoading(false);
      })
      .catch((err) => {
        setError(String(err.response));
        setLoading(false);
      });
  };

  const getTransferUrl = (trx) =>
    `/transfer/?phone_number=${trx.from_user_phone_number}&amount=${trx.amount}&currency=${trx.currency}&description=${trx.description}`;

  const qrCodeValue = useMemo(
    () =>
      window.location.href.replace(
        '/payment-request',
        getTransferUrl({ from_user_phone_number: payerPhoneNumber, amount, currency, description })
      ),
    [payerPhoneNumber, amount, currency, description]
  );

  const redirectToTransfer = (trx) => {
    history.push(getTransferUrl(trx));
  };

  const loadRequest = (trx) => {
    setRequestCreated(true);
    setPayerPhoneNumber(trx.from_user_phone_number);
    setAmount(trx.amount);
    setCurrency(trx.currency);
    setDescription(trx.description);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Box>
      <BackHeader title={strings?.paymentRequest} />

      <MainCard title={strings?.messageForSelect}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <OutlinedInput
              fullWidth
              type="tel"
              placeholder={strings?.receivingAmount}
              value={amount}
              disabled={isRequestCreated}
              onChange={(e) => setAmount(e.target.value)}
            />
            <CurrencySelection
              disabled={isRequestCreated}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              currencyList={currencyList}
            />
          </Box>
          <OutlinedInput
            fullWidth
            disabled={isRequestCreated}
            type="text"
            placeholder={strings?.payer}
            value={payerPhoneNumber}
            onChange={(e) => setPayerPhoneNumber(e.target.value)}
          />
          <OutlinedInput
            fullWidth
            disabled={isRequestCreated}
            type="text"
            placeholder={strings?.description}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>
        {!isRequestCreated && (
          <>
            <Typography my={1} mx="auto" variant="h5" color="error">
              {error}
            </Typography>
            <Button fullWidth variant="contained" color="secondary" onClick={createRequest}>
              {strings?.paymentRequest}
            </Button>
          </>
        )}
      </MainCard>

      {isRequestCreated && (
        <>
          <MainCard>
            <Box my={5}>
              {method === methods.qrCode ? (
                <Box display="flex" alignItems="center" justifyContent="center">
                  <QRCode value={qrCodeValue} />
                </Box>
              ) : (
                <img alt={method} src={images[`${method}_image`]} width="100%" height="100%" />
              )}
            </Box>
            <Typography variant="h4" textAlign="center">
              {strings?.[`${method}_description`]}
            </Typography>
          </MainCard>

          <Box display="flex" justifyContent="space-between" px={1} gap={1}>
            {Object.keys(methods)
              .filter((m) => m !== method)
              .map((m) => (
                <Button key={m} variant="contained" color="info" onClick={() => setMethod(m)}>
                  {strings?.payWith} {strings?.[m]}
                </Button>
              ))}
          </Box>
        </>
      )}

      <MainCard title={strings?.forMe}>
        {/* TODO: transactions date */}
        <LimitedList>
          {requests.for_me.map((trx, index) => {
            const { title, picture } = currencyDetails[trx.currency];
            return (
              <TransactionRow
                key={index}
                title={trx.from_user_phone_number}
                subtitle="۱۰:۱۲"
                imageUrl={picture}
                amount={trx.amount}
                unit={title}
                onClick={() => redirectToTransfer(trx)}
              />
            );
          })}
        </LimitedList>
      </MainCard>

      <MainCard title={strings?.forOthersByMe}>
        {/* TODO: transactions date */}
        <LimitedList>
          {requests.for_others_by_me.map((trx, index) => {
            const { title, picture } = currencyDetails[trx.currency];
            return (
              <TransactionRow
                key={index}
                title={trx.from_user_phone_number}
                subtitle="۱۰:۱۲"
                imageUrl={picture}
                amount={trx.amount}
                unit={title}
                onClick={() => loadRequest(trx)}
              />
            );
          })}
        </LimitedList>
      </MainCard>
    </Box>
  );
};

export default PaymentRequestPage;
