import { styled } from '@mui/styles';

const AccountWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  minHeight: '100vh'
}));

export default AccountWrapper;
