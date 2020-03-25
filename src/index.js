import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import * as serviceWorker from './serviceWorker';
// import { Layout, Menu, Breadcrumb } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
// import { Typography } from 'antd';
// import MenuItem from 'antd/lib/menu/MenuItem';
// import Bisection from './Bisection';

// const { Text } = Typography;
// const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;

ReactDOM.render(    
 
    <App/>,
  
   document.getElementById('root')
);


// ReactDOM.render(
 
        
// <Layout>
//     <Header className="header">
//       <div className="logo" />
//       <Menu
//         theme="dark"
//         mode="horizontal"
//         defaultSelectedKeys={['2']}
//         style={{ lineHeight: '64px' }}
//       >
//         <Menu.Item key="1" >Numerical Methods</Menu.Item>
//         <Menu.Item>By Natpapas Dilokjiraponglert</Menu.Item>
//       </Menu>
//     </Header>
//     <Layout>
//       <Sider width={200} className="site-layout-background">
//         <Menu
//           mode="inline"
//           defaultSelectedKeys={['1']}
//           defaultOpenKeys={['sub1']}
//           style={{ height: '100%', borderRight: 0 }}
//         >
//           <SubMenu
//             key="sub1"
//             title={
//               <span>
//                 <UserOutlined />
//                 Root of Equations
//               </span>
//             }
//           >
//             <Menu.Item key="1" Name = "a1"
//             >Graphical Method</Menu.Item>

//             <Menu.Item key="2" Name = "a2">Bisection Method</Menu.Item>
//             <Menu.Item key="3" Name = "a3">Fulse-Position Method</Menu.Item>
//             <Menu.Item key="4" Name = "a4">One Point iteration Method</Menu.Item>
//             <Menu.Item key="5" Name = "a5">Taylor series</Menu.Item>
//             <Menu.Item key="6" Name = "a6">Newton Raphson Method</Menu.Item>
//           </SubMenu>
//           <SubMenu
//             key="sub2"
//             title={
//               <span>
//                 <LaptopOutlined />
//                 Linear Algebra
//               </span>
//             }
//           >
//             <Menu.Item key="7">option5</Menu.Item>
//             <Menu.Item key="8">option6</Menu.Item>
//             <Menu.Item key="9">option7</Menu.Item>
//             <Menu.Item key="10">option8</Menu.Item>
//           </SubMenu>
//           <SubMenu
//             key="sub3"
//             title={
//               <span>
//                 <NotificationOutlined />
//                 subnav 3
//               </span>
//             }
//           >
//             <Menu.Item key="9">option9</Menu.Item>
//             <Menu.Item key="10">option10</Menu.Item>
//             <Menu.Item key="11">option11</Menu.Item>
//             <Menu.Item key="12">option12</Menu.Item>
//           </SubMenu>
//         </Menu>
//       </Sider>
//       <Layout style={{ padding: '0 24px 24px' }}>
//         <Breadcrumb style={{ margin: '16px 0' }}>
//           <Breadcrumb.Item>Home</Breadcrumb.Item>
//           <Breadcrumb.Item>list</Breadcrumb.Item>
//           <Breadcrumb.Item>App</Breadcrumb.Item>
//         </Breadcrumb>
//         <Content
            
//             className="site-layout-background"
//             style={{
//             padding: 24,
//             margin: 0,
//             minHeight: 280,
//           }}
//         >
       
//         <App></App>        
//         </Content>
//       </Layout>
//     </Layout>
//   </Layout>,<bisection></bisection>,
   
    
//      document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
