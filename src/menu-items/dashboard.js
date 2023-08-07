// assets
import { AccountCircle, Toll, Transform } from '@mui/icons-material';

export const dashboard = (strings) => ({
  id: 'dashboard',
  title: strings?.dashboard,
  type: 'group',
  children: [
    {
      id: 'default',
      title: strings?.home,
      type: 'item',
      url: '/',
      icon: Toll
    },
    {
      id: 'transfer',
      title: strings?.transfer,
      type: 'item',
      url: '/transfer',
      icon: Transform
    },
    {
      id: 'profile',
      title: strings?.profile,
      type: 'item',
      url: '/profile',
      icon: AccountCircle
    }
  ]
});
