import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {routers} from '../routers';
import {Layout, Menu} from 'antd';

const {Sider} = Layout;

function Sidebar() {
  const currentLocation = useLocation();
  const history = useNavigate();
  
  const menuItems = [];
  
  for (let i = 0; i < routers.length; i++) {
    const router = routers[i];
    if (!router.title) continue;
    
    menuItems.push(
      <Menu.Item
        key={router.key}
        icon={router.icon}
        onClick={() => history(router.key)}
      >
        {router.title}
      </Menu.Item>
    );
  }
  
  return (
    <Sider
      collapsible={true}
      collapsedWidth={50}
      defaultCollapsed={false}
      width={150}
      breakpoint={'lg'}
      theme={'light'}
    >
      <Menu mode={'inline'} selectedKeys={[currentLocation.pathname]}>
        {menuItems}
      </Menu>
    </Sider>
  );
}

export default Sidebar;
