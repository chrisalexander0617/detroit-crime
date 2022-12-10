import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Card} from '@mui/material';
// import crimeData from '../../features/api/crimeData.json'

// const barChartData = crimeData.features.map((crime, i) => ({
//   offense_category:crime.attributes.offense_category,
//   hour_of_day:crime.attributes.hour_of_day
// }))

// const offenseCategories_raw = barChartData.map((crime, i) => (
//   crime.offense_category
// ))

// const offenseCategories = [...new Set(offenseCategories_raw)]

const crimeStats = [
  {
    name:'12am',
    robberies:Math.random() * 200,
    vandalism:Math.random() * 200
  },
  {
    name:'3am',
    robberies:Math.random() * 200,
    vandalism:Math.random() * 200
  },
  {
    name:'6am',
    robberies:Math.random() * 200,
    vandalism:Math.random() * 200
  },
  {
    name:'9am',
    robberies:Math.random() * 200,
    vandalism:Math.random() * 200
  },
  {
    name:'12pm',
    robberies:Math.random() * 200,
    vandalism:Math.random() * 200
  },
  {
    name:'3pm',
    robberies:Math.random() * 200,
    vandalism:Math.random() * 200
  },
  {
    name:'6pm',
    robberies:Math.random() * 200,
    vandalism:Math.random() * 200
  },
  {
    name:'9pm',
    robberies:Math.random() * 200,
    vandalism:Math.random() * 200
  },
  
]

export default function CrimeBarChart(){
  return (
    <Box>
      <Card sx={{ height:'400px'}} elevation={0}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={crimeStats}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="robberies" fill="#647de3" />
            <Bar dataKey="vandalism" fill="#1a2242" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </Box>
  );
}
