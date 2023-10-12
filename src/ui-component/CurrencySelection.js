import { Select, MenuItem, Box, Typography } from '@mui/material';
import { currencyDetails } from '../views/models/currency';

function CurrencySelection({ disabled, value, currencyList, onChange }) {
  return (
    <Select disabled={disabled} value={value} onChange={onChange}>
      {currencyList.map((currency) => {
        const { title, picture } = currencyDetails[currency];

        return (
          <MenuItem key={currency} value={currency}>
            <Box width="100%" gap={1} display="flex" justifyContent="space-between">
              <Typography>{title}</Typography>
              <img width={24} height={24} alt={currency} src={picture} />
            </Box>
          </MenuItem>
        );
      })}
    </Select>
  );
}

export default CurrencySelection;
