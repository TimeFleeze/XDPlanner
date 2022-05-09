import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, UploadOutlined, VideoCameraOutlined, } from '@ant-design/icons';
import { Outlet } from 'react-router';
import './index.css'
import { NavLink } from 'react-router-dom';

const { Content, Footer, Sider } = Layout;

export default function Home () {

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo" >XDPlanner</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <NavLink to="Firstpage">测试1 逐个添加</NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <NavLink to="Secondpage">测试2 添加/可编辑</NavLink>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <NavLink to="Thirdpage">解决器管理</NavLink>
          </Menu.Item>
          <Menu.Item key="4" icon={<UploadOutlined />}>
            <NavLink to="Fourthpage">问题解决区</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>

        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>©XDPlanner</Footer>
      </Layout>
    </Layout>
  )
}
