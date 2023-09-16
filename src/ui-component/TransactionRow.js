import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { getPersianNumber } from '../utils/convertor/TomanConvertor';

const TransactionRow = ({ title, subtitle, imageUrl, amount, unit }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems='center' my={1} width="100%">
      <Box display="flex" gap={1}>
        <Typography variant='subtitle2'>{unit}</Typography>
        <Typography variant='h4'>{getPersianNumber(amount)}</Typography>
      </Box>
      <Box display="flex" gap={1}>
        <Box display="flex" flexDirection="column" alignItems="flex-end" justifyContent='center'>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="subtitle2">{subtitle}</Typography>
        </Box>
        <img width={40} height={40} alt={title} src={imageUrl} />
      </Box>
    </Box>
  );
};

TransactionRow.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageUrl: PropTypes.string,
  amount: PropTypes.number,
  unit: PropTypes.string
};

TransactionRow.defaultProps = {
  unit: null,
};

export default TransactionRow;
