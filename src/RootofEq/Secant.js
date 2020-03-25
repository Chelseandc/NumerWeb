import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import { Typography } from 'antd';
import { compile } from 'mathjs';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { derivative } from 'mathjs';
import { Table } from 'antd';

const { Title } = Typography;

var data =[];
var dataG = [];

const columns = [
    {
      title: 'Iteration',
      dataIndex: 'iteration',
      width: 150,
    },
    {
        title: 'X=',
        dataIndex: 'X',
        width: 180,
      },
    {
      title: 'X',
      dataIndex: 'x',
      width: 180,
    },
    
    {
      title: 'Error',
      dataIndex: 'error',
    },
  ];

class Secant extends React.Component
{
    constructor()
    {
      super();
      this.state = {
         X0: 0,
         X1: 1,
         FX:'2-e^(x/4)',
         fxstart:false
      }
      this.handleChage = this.handleChage.bind(this);
      this.fxSecant = this.fxSecant.bind(this);
    }
    handleChage(event){
    this.setState({
      [event.target.name]: event.target.value
    });
    }
    fxSecant(x0,x1)
    {
        var x = [];
        var Er = [];
        var sum = 0;
        
        var i = 1;
        x[0] = x0;
        Er[0] = 0;
        x[1] = x1;
        Er[1] = 0;
        
        do{
            var fxi = this.fun(x[i]);
            var fxii = this.fun(x[i-1]);
            x[i+1] = x[i] - (fxi*(x[i]-x[i-1]))/(fxi-fxii);
            sum =  this.err(x[i+1],x[i]);
            sum = Math.abs(sum).toFixed(6);
            Er[i+1] = sum;
            i++;
            
        }while(sum > 0.000001)
        this.setdata(x,Er);
        this.setState({
            fxstart:true
        })
    }
    fun(X){
        var expr = compile(this.state.FX);
        let scope = { x: parseFloat(X) };
        return expr.eval(scope);
    }
    Derivative(X)
    {
        var expr = derivative(this.state.FX, 'x');
        let scope = {x:parseFloat(X)};
        return expr.eval(scope);
    }
    err(xnew,xold)
    {
        return (xnew-xold)/xnew;
    }
    setdata(x,Er)
    {
        data=[];
        dataG =[];
        for (let i = 0; i < x.length; i++) {
          data.push({
            iteration:i ,
            X: "X"+i,
            x: x[i],
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
                <Title level={2}>Secant Method</Title>
                <Input placeholder="F(x) = 2-e^(x/4) or Input F(x) :" name="FX" value={this.state.value} onChange= {this.handleChage}/>
                <Input placeholder="X0:0 or Input :" name="X0" value={this.state.value} onChange= {this.handleChage}/>
                <Input placeholder="X1:1 or Input :" name="X1" value={this.state.value} onChange= {this.handleChage}/>
                <Button type="primary"  
                onClick={() => this.fxSecant(parseFloat(this.state.X0),parseFloat(this.state.X1))}
                >Start!</Button><br></br>
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
                <LineChart width={950} height={400} data={dataG}
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
}export default  Secant;