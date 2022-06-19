import React, {CSSProperties} from 'react';
import {ROUTERS} from './constants';
import {
  Dashboard,
} from '@mui/icons-material';
import {SidebarRouter} from './common/common.interface';

const SIDEBAR_ICON_STYLE: CSSProperties = {
  width: '20px',
  height: '20px',
};

export const routers: SidebarRouter[] = [
  {
    key: ROUTERS.DASHBOARD,
    path: ROUTERS.DASHBOARD,
    title: '대시보드',
    icon: <Dashboard style={SIDEBAR_ICON_STYLE}/>,
    page: <div/>,
  },
];
