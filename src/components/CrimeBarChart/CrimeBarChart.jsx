import React, {useEffect, useState, useRef} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Card} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import crimeData from '../../features/api/crimeData.json'

const barChartData = crimeData.features.map((crime, i) => ({
  offense_category:crime.attributes.offense_category,
  hour_of_day:crime.attributes.hour_of_day
}))

const offenseCategories_raw = barChartData.map((crime, i) => (
  crime.offense_category
))

const offenseCategories = [...new Set(offenseCategories_raw)]

const crimeStats = offenseCategories.map(offense => ({
  name:offense,
  value:barChartData.filter(crime => crime.offense_category === offense).length
}))

export default function CrimeBarChart(){
  const mounted = useRef(false)
  const [loading, isLoading] = useState(true)

  const loadChart = () => {
      isLoading(false)
  }

  useEffect(
    () => {
    const timer = setTimeout(() => { loadChart() }, 3000)
  
    mounted.current = true
    return () => { 
      mounted.current = false 
      clearTimeout(timer)
    }
  },[])

  return (
    <>
    {loading ? (
      <Box sx={{ height:'400px', display: 'flex',  alignItems:'center', justifyContent:'center' }}>
       <CircularProgress size={100} />
     </Box>
    ) : (
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
              <Bar dataKey="value" fill="#647de3" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </Box>
    )}
    </>
  );
}
