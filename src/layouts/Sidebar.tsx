import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {routers} from '../routers';
import {Layout, Menu} from 'antd';

const {Sider} = Layout;

function Sidebar() {
  const currentLocation = useLocation();
  const history = useNavigate();
  
  return (
    <Sider
      collapsible={true}
      collapsedWidth={50}
      defaultCollapsed={false}
      width={150}
      breakpoint={'lg'}
      theme={'light'}
    >
      <Menu 
        mode={'inline'} 
        selectedKeys={[currentLocation.pathname]}
        items={routers.map(({key, label, icon, path}) => ({
          key: key,
          label: label,
          icon: icon,
          onClick: () => history(path),
        }))}
      />
    </Sider>
  );
}

export default Sidebar;
