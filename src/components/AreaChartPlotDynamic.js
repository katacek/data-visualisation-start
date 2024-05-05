import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const AreaChartPlotDynamic = ({data, title}) => {


    return (
        <>
          <ResponsiveContainer width="100%" height="100%" >
            <AreaChart width={730} height={250} data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="shop1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="shop2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="shop3" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#741b47" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#741b47" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="shop4" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ead1dc" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ead1dc" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="shop5" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9fc5e8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#9fc5e8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="shop6" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e06666" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#e06666" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="shop7" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f9cb9c" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#f9cb9c" stopOpacity={0} />
                </linearGradient>
              </defs>
              {/* todo re-usable component for title */}
              <text x={280} y={20} fill="white" textAnchor="middle" dominantBaseline="central">
                <tspan fontSize="14">{title}</tspan>
              </text>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="kolokram.cz" stroke="#8884d8" fillOpacity={1} fill="url(#shop1)" />
              <Area type="monotone" dataKey="r2-bike.com" stroke="#82ca9d" fillOpacity={1} fill="url(#shop2)" />
              <Area type="monotone" dataKey="bike24.com" stroke="#741b47" fillOpacity={1} fill="url(#shop3)" />
              <Area type="monotone" dataKey="hibike.com" stroke="#ead1dc" fillOpacity={1} fill="url(#shop4)" />
              <Area type="monotone" dataKey="mtbiker.cz" stroke="#9fc5e8" fillOpacity={1} fill="url(#shop5)" />
              <Area type="monotone" dataKey="bike-discount.de" stroke="#e06666" fillOpacity={1} fill="url(#shop6)" />
              <Area type="monotone" dataKey="bike-components.de" stroke="#f9cb9c" fillOpacity={1} fill="url(#shop7)" />
            </AreaChart>
          </ResponsiveContainer>
        </>
      );
  } 
  export default AreaChartPlotDynamic;