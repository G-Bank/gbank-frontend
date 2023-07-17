import { dashboard } from './dashboard';


const menuItems =(strings)=> ({
  items: [dashboard(strings)]
});

export default menuItems;
