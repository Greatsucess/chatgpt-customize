import { Icon } from './lib/chakra';
import {
  MdFileCopy,
  MdHome,
  MdLock,
  MdLayers,
  MdAutoAwesome,
  MdOutlineManageAccounts,
} from 'react-icons/md';
import { LuHome } from 'react-icons/lu';
import { LuHistory } from 'react-icons/lu';
import { RoundedChart } from '@/components/icons/Icons';

// Auth Imports
import { IRoute } from './types/navigation';

const routes: IRoute[] = [
  {
    name: 'Inventory Management',
    path: '/inventory',
    icon: (
      <Icon as={MdHome} width="20px" height="20px" color="inherit" />
    ),
    collapse: false,
  },
  {
    name: 'Price Optimization',
    path: '/price-optimization',
    icon: (
      <Icon as={MdLayers} width="20px" height="20px" color="inherit" />
    ),
    collapse: false,
  },
  
  {
    name: 'Amazon Seller Assistance',
    path: '/',
    icon: (
      <Icon as={MdAutoAwesome} width="20px" height="20px" color="inherit" />
    ),
    collapse: false,
  },

   
  
];

export default routes;
