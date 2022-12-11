const express = require('express')
const cors = require('cors')
const app = express();
const axios = require('axios')

app.use(cors())

// Fetch Detroit crime data
app.get('/detroit/crime', (req, res) => {
  // Make a request to the Detroit crime data API
  axios.get('https://opengis.detroitmi.gov/arcgis/rest/services/PublicSafety/RMS_Crime_Incidents/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson')
    .then(data => {
      // Send the crime data as the response
      res.send(data);
    })
    .catch(err => {
      // If there's an error, send a message indicating as such
      res.send({ error:err});
    });
});

app.listen(8080, () => console.log('server started'))