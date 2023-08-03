'use client';

import SideMenu from '@/components/SideMenu';
import SideTop from '@/components/SideTop';
import SideBottom from '@/components/SideBottom';
import TopLeft from '@/components/TopLeft';
import TopCenter from '@/components/TopCenter';
import TopRight from '@/components/TopRight';
import PageBottom from '@/components/PageBottom';
import PageContent from '@/components/PageContent';
import Brand from '@/components/Brand';
import Navigation from '@/components/Navigation';
import Menu from '@/components/Menu';
import UserInfo from '@/components/UserInfo';
import Metric from '@/components/Metric';

import {
  HomeIcon,
  LightningBoltIcon,
  MixIcon,
  Pencil1Icon,
  Pencil2Icon,
  RocketIcon,
} from '@radix-ui/react-icons';
import ActionButton from '@/components/ActionButton';
import SearchBar from '@/components/SearchBar';

const menuData = [
  {
    id: 1,
    name: 'Home',
    icon: <HomeIcon />,
    url: '/',
  },
  {
    id: 2,
    name: 'About Us',
    icon: <MixIcon />,
    url: '/about',
  },
  {
    id: 3,
    name: 'Services',
    icon: <LightningBoltIcon />,
    url: '/services',
    subMenu: [
      {
        id: 4,
        name: 'Web Design',
        icon: <Pencil1Icon />,
        url: '/services/web-design',
      },
      {
        id: 5,
        name: 'Graphic Design',
        icon: <RocketIcon />,
        url: '/services/graphic-design',
      },
    ],
  },
  {
    id: 6,
    name: 'Contact',
    icon: <Pencil2Icon />,
    url: '/contact',
  },
];

const topRightData = [
  {
    id: 7,
    name: 'Products',
    url: '/products',
  },
  {
    id: 8,
    name: 'Pricing',
    url: '/pricing',
  },
  {
    id: 9,
    name: 'Support',
    url: '/support',
    subMenu: [
      {
        id: 10,
        name: 'Documentation',
        url: '/support/documentation',
      },
      {
        id: 11,
        name: 'Contact Us',
        url: '/support/contact-us',
      },
    ],
  },
  {
    id: 12,
    name: 'Gallery',
    url: '/gallery',
  },
];

export default function App() {
  return (
    <div className='relative min-h-screen bg-slate-200'>
      <div
        data-name='page'
        className='relative mx-auto flex h-full max-w-7xl flex-1 flex-col'
      >
        <div
          data-name='navigation'
          className='sticky top-0 flex min-h-[64px] w-full items-center justify-between rounded-b-md border-b border-slate-300 bg-white'
        >
          <TopLeft>
            <Brand className='mr-20' />
            <Navigation data={topRightData} />
          </TopLeft>
          <TopCenter>
            <SearchBar />
          </TopCenter>
          <TopRight>
            <UserInfo />
          </TopRight>
        </div>

        <div className='mt-4'>
          <Metric />
        </div>

        {/* page content */}
        <div
          data-name='content'
          className='mt-4 min-h-screen rounded-md bg-white'
        >
          {/* page load here */}
          <PageContent />
          <PageBottom />
        </div>
      </div>
    </div>
  );
}
