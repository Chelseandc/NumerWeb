
import React from 'react';
import { compile } from 'mathjs';
import { Button } from 'antd';
import { Input } from 'antd';
import { Typography } from 'antd';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';



const { Title,Text } = Typography;

var data = [];

class Gnumer extends React.Component
{
    constructor()
    {
      super();
      this.state = {
         fx:"x^4-13",
         cilck:false
      }
       this.handleChage = this.handleChage.bind(this);
       this.fxg = this.fxg.bind(this);
    }
    handleChage(event){
        this.setState({
          [event.target.name]: event.target.value
        });
    }
    fxg()
    {
        
        var sum =[];
        for(let i = 0 ; i < 11 ; i++)
        {
            sum[i] = this.fun(i);
            
        }
        this.setdata(sum);
        this.setState({
            cilck:true
        })
    }
    fun(X){
        var expr = compile(this.state.fx);
        let scope = { x: parseFloat(X) };
        return expr.eval(scope);
    }
    setdata(sum)
    {
        data =[];
        for (let i = 0; i < sum.length; i++)
        {   
            var y = -5;
            data.push({
                "X":i,
                "Y":sum[i]
            })
            y++;
        }
    }
    render(){
        return(
            <div>
                <Title level={2}>Graphical Method</Title>
                <Text type="secondary" level={4}>X=0,1,2,3,4,5,6,7,8,9,10</Text>
                <br />
                <Input placeholder="F(x) = x^4-13 or Input F(x) :" name="fx" value={this.state.value} onChange= {this.handleChage}/><br />
                <Button type="primary"  
                onClick={() => this.fxg()}
                >Start!</Button><br />
                <LineChart width={800} height={300} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Y" />
                <YAxis />
                <Tooltip />
                
                <Line type="monotone" dataKey="X" stroke="#8884d8" />
                
                </LineChart>
            </div>

        );
    }
}
export default Gnumer;