import { BarChart, XAxis, YAxis, Bar, Tooltip, Legend, ResponsiveContainer} from "recharts";

const BarChartPlotDynamic = ({data, title}) => {

    return (
        <>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={730} height={250} data={data}>
              <text x={280} y={20} fill="white" textAnchor="middle" dominantBaseline="central">
                <tspan fontSize="14">{title}</tspan>
              </text>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="kolokram.cz" fill="#8884d8" />
              <Bar dataKey="r2-bike.com" fill="#82ca9d" />
              <Bar dataKey="bike24.com" fill="#741b47" />
              <Bar dataKey="hibike.com" fill="#ead1dc" />
              <Bar dataKey="mtbiker.cz" fill="#9fc5e8" />
              <Bar dataKey="bike-discount.de" fill="#e06666" />
            </BarChart>
          </ResponsiveContainer>
        </>
      );
  } 
  
  export default BarChartPlotDynamic;