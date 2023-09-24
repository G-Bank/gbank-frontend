import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Box, Button, OutlinedInput, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import MainCard from '../../ui-component/cards/MainCard';
import { strings } from '../../localizedString';
import { getPersianNumber } from '../../utils/convertor/TomanConvertor';
import Loader from '../../ui-component/Loader';
import BackHeader from '../../ui-component/BackHeader';
import { images } from '../../assets/images';
import TransactionRow from '../../ui-component/TransactionRow';
import MoreOptions from '../../ui-component/MoreOptions';
import { currencyDetails } from '../models/currency';
import ConfirmationDrawer from './ConfirmationDrawer';
import { transferRequest } from '../../api/financial';
import { getUserTransactions } from '../../api/user';
import ResultDrawer from './ResultDrawer';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 250,
    height: 125,
    padding: 16,
    backgroundColor: '#393734',
    borderRadius: 8,
    transition: 'transform 0.1s ease-in-out'
  },
  selectedCard: {
    backgroundColor: '#1F1E1C',
    transform: 'scale(1.1)'
  },
  cardContainer: {
    marginTop: 16,
    display: 'flex',
    gap: 16,
    minWidth: 'min-content',
    height: 150
  }
}));

const Transfer = () => {
  const styles = useStyles();

  const { balances, accountId } = useSelector((state) => state.account);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState(balances?.[0]?.currency);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setAmount(0);
  }, [currency]);

  const handleSubmit = (description) => {
    setLoading(true);
    transferRequest(accountId, phoneNumber, amount, currency, description)
      .then((response) => {
        setLoading(false);
        setResult(response.data);
        getUserTransactions();
      })
      .catch((err) => {
        setError(err.response.data.error);
        setLoading(false);
        setConfirmOpen(false);
      });
  };

  const handleContinue = () => {
    if (!amount) {
      setError(strings?.enterTransferAmount);
      return;
    }
    if (phoneNumber.length !== 11) {
      setError(strings?.enterValidPhoneNumber);
      return;
    }
    setError(null);
    setConfirmOpen(true);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Box>
      <BackHeader title={strings?.transfer} />

      <MainCard title={strings?.messageForSelect}>
        <OutlinedInput
          fullWidth
          type="tel"
          placeholder={strings?.receiverPhoneNumber}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </MainCard>

      <MainCard title={strings?.enterTransferAmount}>
        <OutlinedInput
          fullWidth
          type="tel"
          placeholder={strings?.transferAmount}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <Box width="100%" overflow="auto">
          <Box className={styles.cardContainer} px={2}>
            {balances.map((balance) => {
              const { title, picture } = currencyDetails[balance.currency];
              const isSelected = balance.currency === currency;

              return (
                <Box
                  className={`${styles.card} ${isSelected && styles.selectedCard}`}
                  key={balance.currency}
                  onClick={() => setCurrency(balance.currency)}
                >
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography variant="h5" color="#d0d0d0">
                      {title}
                    </Typography>
                    <img width={25} height={25} alt={title} src={picture} style={{ borderRadius: '50%' }} />
                  </Box>
                  <Box display="flex" width="100%" justifyContent="center" alignItems="flex-end" gap={1}>
                    <Typography variant="h5" color="#d0d0d0">
                      {balance.currency}
                    </Typography>
                    <Typography variant="h3" color="white">
                      {getPersianNumber(balance.amount)}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </MainCard>

      <Typography my={1} mx="auto" variant="h5" color="error">
        {error}
      </Typography>
      <Button fullWidth variant="contained" color="secondary" onClick={handleContinue}>
        {strings?.continue}
      </Button>

      <MainCard title={strings?.frequentTransfers}>
        {/* TODO: fetch frequent transactions */}
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={images.gold} amount={25432003} />
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={images.gold} amount={25432003} />
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={images.gold} amount={25432003} />
        <MoreOptions />
      </MainCard>

      {/* TODO: fetch fee */}
      <ConfirmationDrawer
        open={confirmOpen}
        receiver={phoneNumber}
        amount={amount}
        currency={currency}
        wage={1000}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleSubmit}
      />

      <ResultDrawer result={result} phoneNumber={phoneNumber} />
    </Box>
  );
};

export default Transfer;
