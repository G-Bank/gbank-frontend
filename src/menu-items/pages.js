// assets
import { IconKey, IconReceipt2, IconBug, IconBellRinging, IconPhoneCall } from '@tabler/icons';

// constant
const icons = {
  IconKey: IconKey,
  IconReceipt2: IconReceipt2,
  IconBug: IconBug,
  IconBellRinging: IconBellRinging,
  IconPhoneCall: IconPhoneCall
};


export const pages = {
  id: 'pages',
  title: 'Pages',
  caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Authentication',
      type: 'collapse',
      icon: icons['IconKey'],
      children: [
        {
          id: 'login',
          title: 'Login',
          type: 'item',
          url: '/auth/login',
          target: true
        }
      ]
    }
  ]
};
