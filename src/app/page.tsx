'use client';

import SideMenu from '@/components/SideMenu';
import SideTop from '@/components/SideTop';
import SideBottom from '@/components/SideBottom';
import TopLeft from '@/components/TopLeft';
import TopCenter from '@/components/TopCenter';
import TopRight from '@/components/TopRight';
import PageBottom from '@/components/PageBottom';
import PageContent from '@/components/PageContent';
import {
  HomeIcon,
  LightningBoltIcon,
  MixIcon,
  Pencil1Icon,
  Pencil2Icon,
  RocketIcon,
} from '@radix-ui/react-icons';

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
    <div className='relative min-h-screen'>
      <div
        data-name='sidebar'
        className='fixed bottom-0 left-0 top-0 z-10 flex w-64 flex-col justify-between bg-black text-slate-100'
      >
        <SideTop />
        <SideMenu data={menuData} />
        <SideBottom />
      </div>

      <div
        data-name='page'
        className='relative flex h-full flex-1 flex-col pl-64'
      >
        <div
          data-name='navigation'
          className='sticky top-0 flex min-h-[64px] w-full items-center justify-between border-b border-slate-300 bg-white'
        >
          <TopLeft data={topRightData} />
          <TopCenter />
          <TopRight />
        </div>

        {/* page content */}
        <div data-name='content' className='min-h-screen'>
          {/* page load here */}
          <div className='m-10 rounded-md border font-mono text-sm'>
            <PageContent />
          </div>
          <PageBottom />
        </div>
      </div>
    </div>
  );
}
