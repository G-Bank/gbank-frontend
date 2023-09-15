import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { splitCardNumber } from '../../utils/convertor/TomanConvertor';
import bankLogo from '../../assets/images/finance/pasargad.png';

const MainCard = ({ bankName, cardNumber }) => {
  return (
    <Box my={2} width='100%'>
      <Box my={1} borderRadius={4} width='100%' textAlign='center'>
        <Box display='flex' justifyContent='space-between'>
          <Typography>{bankName}</Typography>
          <img alt={bankName} src={bankLogo} />
        </Box>
        <Typography variant='h4'>{splitCardNumber(cardNumber)}</Typography>
      </Box>
    </Box>
  )
}

MainCard.propTypes = {
  bankName: PropTypes.string,
};

export default MainCard;
