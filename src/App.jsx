import { useState } from 'react'
import './App.css'
import crimeData from './features/api/crimeData.json'
import {Box, Card, Container, Grid} from '@mui/material'
import Map from './components/Map/Map'
import CrimeBarChart from './components/CrimeBarChart/CrimeBarChart'
// address: "Greenfield Rd & Westfield St"
// ​​​​
// arrest_charge: "12000"
// ​​​​
// block_id: "261635354001010"
// ​​​​
// charge_description: "ROBBERY"
// ​​​​
// council_district: 7
// ​​​​
// crime_id: "3603378"
// ​​​​
// day_of_week: 3
// ​​​​
// hour_of_day: 13
// ​​​​
// ibr_date: 1619536799000
// ​​​​
// incident_time: "13:30"
// ​​​​
// incident_timestamp: 1614796200000
// ​​​​
// latitude: 42.3634964668948
// ​​​​
// longitude: -83.1972343698353
// ​​​​
// neighborhood: "We Care Community"
// ​​​​
// offense_category: "ROBBERY"
// ​​​​
// offense_description: "ROBBERY"
// ​​​​
// oid: 201
// ​​​​
// precinct: "02"
// ​​​​
// report_number: "2103030074"
// ​​​​
// scout_car_area: "0207"
// ​​​​
// state_offense_code: "1201"
// ​​​​
// year: 2021


function App() {
  const [count, setCount] = useState(0)
  console.log(crimeData.features)

  return (
    <Container maxWidth="fluid">
      <Grid container>
        <Grid xs={6} item>
          <Box>
            <Map />
          </Box>
        </Grid> 
        <Grid xs={6} item>
          <Box>
            <CrimeBarChart />
          </Box>
        </Grid> 
      </Grid>
    </Container>
  )
}

export default App
