import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { splitCardNumber } from '../../utils/convertor/TomanConvertor';

const MainCard = ({ bankName, logo, cardNumber }) => {
  return (
    <Box mb={2} width='100%'>
      <Box my={1} borderRadius={4} width='100%' textAlign='center'>
        <Box mb={1} display='flex' justifyContent='space-between' alignItems='center'>
          <Typography>{bankName}</Typography>
          <img width={40} height={40} alt={bankName} src={logo} />
        </Box>
        <Typography style={{ direction: 'ltr' }} variant='h4'>{splitCardNumber(cardNumber)}</Typography>
      </Box>
    </Box>
  )
}

MainCard.propTypes = {
  bankName: PropTypes.string,
};

export default MainCard;
