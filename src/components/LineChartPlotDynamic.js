import { LineChart, XAxis, YAxis, Line, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";

const LineChartPlotDynamic = ({data}) => {

    return (
        <>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="kolokram.cz" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="r2-bike.com" stroke="#82ca9d" strokeWidth={2}/>
              <Line type="monotone" dataKey="bike24.com" stroke="#741b47" strokeWidth={2}/>
              <Line type="monotone" dataKey="hibike.com" stroke="#ead1dc" strokeWidth={2}/>
              <Line type="monotone" dataKey="mtbiker.cz" stroke="#9fc5e8" strokeWidth={2}/>
              <Line type="monotone" dataKey="bike-discount.de" stroke="#e06666" strokeWidth={2}/>
              <Line type="monotone" dataKey="bike-components.de" stroke="#f9cb9c" strokeWidth={2}/>
            </LineChart>
          </ResponsiveContainer>
        </>
      );
  };
  
  export default LineChartPlotDynamic;