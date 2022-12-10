//https://www.lostcreekdesigns.co/writing/how-to-create-a-map-popup-component-using-mapbox-and-react/

import React, {useEffect, useState, useRef} from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import {createDataLayer} from './functions'
import crimeData from '../../features/api/crimeData.json'
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_TOKEN

const crimeDataLayer = crimeData.features.map((crime, i) => (
  {
    id:i,
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
            crime.attributes.longitude,
            crime.attributes.latitude
        ]
    },
    "properties": {
      "address": crime.attributes.address,
      "day_of_week": crime.attributes.day_of_week,
      "hour_of_day":crime.attributes.hour_of_day,
      "incident_time":crime.attributes.incident_time,
      "offense_category":crime.attributes.offense_category,
      "neighborhood":crime.attributes.neighborhood,
      "precinct":crime.attributes.precinct,
      "oid":crime.attributes.oid
    }
  }
))

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
/* funciton that takes all crime
 and generates a data layer for each of them */
const createDataLayerFromJSON = (mapInstance, data) => {
  const crimeCategoriesRaw = []

  data.forEach((crime, i) => {
    crimeCategoriesRaw.push(crime.properties.offense_category)
  })

  const crimeCategories = [...new Set(crimeCategoriesRaw)]

  crimeCategories.forEach((category) => {
    const dataLayer = {
      'type': 'FeatureCollection',
      'features': data.filter(crime => crime.properties.offense_category === category)
    }

    mapInstance.addLayer(createDataLayer(category, dataLayer, getRandomColor()));
  })
}

export default function Map(){
    const map = useRef(null);
    const mapContainer = useRef(null);
    const [lng, setLng] = useState(-83.04);
    const [lat, setLat] = useState(42.33);
    const [zoom, setZoom] = useState(13);

    const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }))
    const mapImageOne = 'icons/fraud.png'

    useEffect(() => {
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/christopherclemmons2020/cl37v6xlr000u14mlzlfbuc80',
            zoom: zoom,
            center:[lng, lat]
        });

        map.current.addControl(new mapboxgl.NavigationControl());

        map.current.on('load', () => {
            map.current.loadImage(
                mapImageOne,
                (error, image) => {
                    if (error) throw error;
                    map.current.addImage('map-image', image);
                }
            );
              
            createDataLayerFromJSON(map.current, crimeDataLayer)

            map.current.addControl(
                new mapboxgl.GeolocateControl({
                    positionOptions: {
                        enableHighAccuracy: true
                    },
                    /* When active the map will receive updates 
                    to the device's location as it changes.
                    */
                    trackUserLocation: true,

                    /* Draw an arrow next to the location 
                    dot to indicate which direction the device is heading.
                    */
                    showUserHeading: true
                })
            );
        })

        return () => map.current.remove()
    })

    return (
        <>
            <div 
                style={{height:'100vh', width:'800px', maxWidth:'100%', minWidth:'100%' }} 
                ref={mapContainer} 
                className="map-container"
            ></div>
        </>
    ) 
}