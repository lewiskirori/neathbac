import "./chart.scss"
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Jan",
    Total: 1200 
  },
  {
    name: "Feb",
    Total: 2100
  },
  {
    name: "Mar",
    Total: 800
  },
  {
    name: "Apr",
    Total: 1600
  },
  {
    name: "May",
    Total: 900
  },
  {
    name: "June",
    Total: 1700
  },
  {
    name: "July",
    Total: 1000
  },
  {
    name: "Aug",
    Total: 700
  },
  {
    name: "Sep",
    Total: 2700
  },
  {
    name: "Oct",
    Total: 300
  },
  {
    name: "Nov",
    Total: 600
  },
  {
    name: "Dec",
    Total: 2000
  }
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{ title }</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart width={730} height={250} data={data}>
        <defs>
          <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="gray"/>
        <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
        <Tooltip formatter={(value, name) => {
          if (name === 'Total') {
            return `Ksh.${value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
          }}} 
        />        
        <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
      </AreaChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Chart