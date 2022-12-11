import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import crimeData from '../../features/api/crimeData.json'
console.log('crime data from bar chart', crimeData)

const barChartData = crimeData.features.map((crime, i) => ({
  offense_category:crime.attributes.offense_category,
  hour_of_day:crime.attributes.hour_of_day
}))

console.log('barChartData', barChartData)

const offenseCategories_raw = barChartData.map((crime, i) => (
  crime.offense_category
))

const offenseCategories = [...new Set(offenseCategories_raw)]
console.log('offenseCategories', offenseCategories)

const crimeStats = offenseCategories.map(offense => ({
  name:offense,
  value:barChartData.filter(crime => crime.offense_category === offense).length
}))

const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function CrimePieChart(){
    return (
      <>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={crimeStats}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              fill="#8884d8"
              dataKey="value"
            />
             
          </PieChart>
        </ResponsiveContainer>
      </>
    );
}
