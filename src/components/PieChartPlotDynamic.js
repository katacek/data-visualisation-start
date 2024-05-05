import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const PieChartPlotDynamic = ({data, title}) => {
    const colors = [
        "#8884d8",
        "#FA8072",
        "#AF69EE",
        "#3DED97",
        "#3AC7EB",
        "#F9A603",
        "#F9CB9C",
      ];

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

    return (
        <>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={730} height={250}>
              <Pie
                data={processedData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                fill="#8884d8"
                label
              >
                {processedData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </>
      );
  }
  export default PieChartPlotDynamic;