import React from 'react';
import './App.css';
import {Layout} from 'antd';
import Sidebar from './layouts/Sidebar';
import CustomHeader from './layouts/CustomHeader';
import {Routes, Route} from 'react-router-dom';
import {routers} from './routers';

const {Content} = Layout;

function App() {
  const routes = routers.map(router => (
    <Route
      key={router.key}
      path={router.path}
      element={router.page}
    />
  ));
  
  return (
    <Layout
      hasSider={true}
      style={{minHeight: '100vh'}}
    >
      <Sidebar/>
      <Layout style={{minHeight: '100%'}}>
        <CustomHeader/>
        <Content>
          <div style={{padding: 6, minHeight: '100%'}}>
            <Routes>
              {routes}
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
