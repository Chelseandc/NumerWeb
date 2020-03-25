import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import Bisection from './RootofEq/Bisection';
import Gnumer from './RootofEq/Gnumer';
import FulsePosition from './../src/RootofEq/FalsePosition';
import Onepoint from './RootofEq/Onepoint';
import NewtonRaphson from './RootofEq/NewtonRaphson';
import Secant from './RootofEq/Secant';





class App extends React.Component {
 
  
    state = {
        Name: "Please select a method from the menu bar.",
        
    }
    
  
  handleChange(page) {
    this.setState({
        Name:page
    });
  }
  render()
  {
      const { Text } = Typography;
      const { SubMenu } = Menu;
      const { Header, Content, Sider } = Layout;
  return(
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1" onClick={()=>this.handleChange("Welcome to Numerical Methods. Please select method from the menu ber")} >Numerical Methods</Menu.Item>
          <Menu.Item onClick={()=>this.handleChange("Natpapas Dilokjiraponglert ID:6004062616326 sec.1")}>By Natpapas Dilokjiraponglert</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['']}
            defaultOpenKeys={[this.state.Name]}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <UserOutlined />
                  Root of Equations
                </span>
              }
            >
              <Menu.Item key="1" Name="Geraphical" onClick={()=>this.handleChange(<Gnumer/>)}
              >Graphical Method</Menu.Item>
              <Menu.Item key="2" Name="Bisection" onClick={()=>this.handleChange(<Bisection/>)}
              >Bisection Method</Menu.Item>
              <Menu.Item key="3" Name="FulsePositio" onClick={()=>this.handleChange(<FulsePosition/>)}>
                Fulse-Position Method</Menu.Item>
              <Menu.Item key="4" Name = "Onepoint" onClick={()=>this.handleChange(<Onepoint/>)}>
              One Point iteration Method</Menu.Item>
              <Menu.Item key="5" Name = "NewtonRaphson" onClick={()=>this.handleChange(<NewtonRaphson/>)}
              >Newton Raphson Method</Menu.Item>
              <Menu.Item key="6" Name = "Secant" onClick={()=>this.handleChange(<Secant/>)}
              >Secant Method</Menu.Item>
            </SubMenu>
           
          </Menu>
        </Sider>
        <Layout style={{ padding: '24px 24px 24px' }}>
          
          <Content
              className="site-layout-background"
              style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}>
              
            {this.state.Name}    
              
            {/* <Bisection></Bisection> */}
            {/* <Gnumer></Gnumer> */}
         
              
          </Content>
        </Layout>
      </Layout>
    </Layout>
          );
          
      }
}
export default App;
