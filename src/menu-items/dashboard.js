// assets
import { Toll } from '@mui/icons-material';

export const dashboard = (strings) => ({
  id: 'dashboard',
  title: strings?.dashboard,
  type: 'group',
  children: [
    {
      id: 'default',
      title: strings?.wallet,
      type: 'item',
      url: '/',
      icon: Toll,
      breadcrumbs: false
    }
  ]
});
