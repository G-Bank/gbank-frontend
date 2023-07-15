import { dashboard } from './dashboard';

//-----------------------|| MENU ITEMS ||-----------------------//

const menuItems =(strings)=> ({
  items: [dashboard(strings)]
});

export default menuItems;
