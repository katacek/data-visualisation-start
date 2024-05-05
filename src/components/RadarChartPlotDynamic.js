import { RadarChart, Radar, PolarAngleAxis, PolarGrid, Legend, Tooltip, ResponsiveContainer } from "recharts";

const RadarChartPlotDynamic = ({data}) => {
console.log('🚀 ~ RadarChartPlotDynamic ~ data:', data);

    const processedData = [];
    const onePeriodData = data[0];

    for(const [name,price] of Object.entries(onePeriodData))
      {
        if (name === 'year') continue;
        const correctDataFormat = {
          'name': name,
          'value': price,
        }
        processedData.push(correctDataFormat)
      }
      console.log('🚀 ~ RadarChartPlotDynamic ~ processedData:', processedData);

    return (
        <>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={90} width={730} height={250} data={processedData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <Radar name="First period" dataKey="value" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Legend />
              <Tooltip/>
            </RadarChart>
          </ResponsiveContainer>
        </>
      );
  };
  export default RadarChartPlotDynamic;