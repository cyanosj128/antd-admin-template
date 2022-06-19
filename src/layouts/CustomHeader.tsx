import React from 'react';
import {Layout} from 'antd';

const {Header} = Layout;

function CustomHeader() {
  return (
    <Header
      className={'site-layout-sub-header-background'}
      style={{
        padding: 0,
        height: '50px',
        position: 'sticky',
        top: '0',
        zIndex: 3,
      }}
    />
  );
}

export default CustomHeader;
