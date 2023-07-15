// assets
import { Toll } from '@material-ui/icons';
import { strings } from '../localizedString';

export const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: strings.wallet,
      type: 'item',
      url: '/',
      icon: Toll,
      breadcrumbs: false
    }
  ]
};
