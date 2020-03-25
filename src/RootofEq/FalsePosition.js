import React from 'react';
import { compile } from 'mathjs';
import { Table } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import { Typography } from 'antd';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';



const { Title } = Typography;


const columns = [
  {
    title: 'Iteration',
    dataIndex: 'iteration',
    width: 100,
  },
  {
    title: 'XL',
    dataIndex: 'xl',
    width: 180,
  },
  {
    title: 'XR',
    dataIndex: 'xr',
    width: 180,
  },
  {
    title: 'Error',
    dataIndex: 'error',
  },
];

var data = [];
var dataG =[];
let ii = 1;

   
class FalsePosition extends React.Component
{
    constructor()
   {
     super();
     this.state = {
        XL:0,
        XR:0,
        fx:"x^4-13",
        cilck:false
     }
      this.handleChage = this.handleChage.bind(this);
      this.fxbisection = this.fxbisection.bind(this);
   }
    handleChage(event){
    this.setState({
      [event.target.name]: event.target.value
    });
   }
   
  
   fxbisection(xl,xr)
   {

    var sum = parseFloat(0.000000);
    var xm = 0;
    var Xl =[];
    var Xr =[];
    var Er =[];
    var xmn = 0;
    var ii = 0;
    do{
      Xl[ii] = xl;
      Xr[ii] = xr;
      var fxr = this.fun(xr);
      var fxl = this.fun(xl);
      xm = ((xl*fxr)-(xr*fxl))/(fxr-fxl);
      var fxm = this.fun(xm);
      var xm1 = fxm*this.fun(xr);
      if(xm1 > 0)
      {
        sum = this.Err(xm,xr);
        if(xr > xl)
        {
          xr = xm;
        }
        else{
          xl = xm
        }
        
      }
      else{
        sum = this.Err(xm,xl);
        if(xl < xr)
        {
          xl = xm;
        }
        else{
          xr =xm;
        }
        
      }
      // xmn = ((xl+xr)/2);
      // sum = this.Err(xmn,xm);
      sum = Math.abs(sum).toFixed(6);
      Er[ii] = sum;
      ii++;
    }while(sum > 0.000001);
    this.setdata(Xl,Xr,Er);
    this.setState({
      cilck:true,
    })
    // return sum;

   }
   
   fun(X){
    var expr = compile(this.state.fx);
    let scope = { x: parseFloat(X) };
    return expr.eval(scope);
   }
   Err(n,m)
   {
     return (n-m)/n;
   }
   setdata(Xl,Xr,Er)
   {
    data = [];
    dataG =[];
    for (let i = 0; i < Xl.length; i++) {
      data.push(
      {
        iteration:i +1,
        xl: Xl[i],
        xr: Xr[i],
        error: Er[i],
      });
      dataG.push(
        {
          "Er":"Iteration"+i,
          "error":Er[i]
        }
      );
    }
   }

    render()
    {
        return(
            <div>
                <Title level={2}>False-Position Method</Title>
                <Input placeholder="F(x) = x^4-13 or Input F(x) :" name="fx" value={this.state.value} onChange= {this.handleChage}/>
                <Input placeholder="Input XL:" name="XL" value={this.state.value} onChange= {this.handleChage}/>
                <Input placeholder="Input XR:" name="XR" value={this.state.value} onChange= {this.handleChage}/>
                <Button type="primary" 
                onClick={() => this.fxbisection(parseFloat(this.state.XL),parseFloat(this.state.XR))}
                >Start!</Button>
                
                
                {/* {this.fxbisection(parseFloat(this.state.XL),parseFloat(this.state.XR))}<br></br> */}
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
                
                
                <LineChart width={730} height={250} data={dataG}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Er" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="error" stroke="#8884d8" />
                
                </LineChart>
            </div>
        );
    }
}export default FalsePosition;