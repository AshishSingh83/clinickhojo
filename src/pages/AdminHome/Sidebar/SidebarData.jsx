import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/AdminHome',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text '
  },
  {
    title: 'Users Management',
    path: '/SubAdminMainProfile',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Approve/Reject',
    path: '/ApproveReject',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Broadcast Message',
    path: '/BroadCastMessage',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Statistics & Reports',
    path: '/AllInOne',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'View Profiles',
    path: '/ViewProfileMain',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
 
];