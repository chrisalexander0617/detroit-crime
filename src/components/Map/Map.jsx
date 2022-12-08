
import React, {useEffect, useState, useRef} from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import {createDataLayer} from './functions'
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_TOKEN
import crimeData from '../../features/api/crimeData.json'

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

const robberyDataLayer = {
  'type': 'FeatureCollection',
  'features':crimeDataLayer.filter(crime => crime.properties.offense_category === "ROBBERY")
}

const fraudDataLayer = {
  'type': 'FeatureCollection',
  'features':crimeDataLayer.filter(crime => crime.properties.offense_category === "FRAUD")
}

const arsonDataLayer = {
  'type': 'FeatureCollection',
  'features':crimeDataLayer.filter(crime => crime.properties.offense_category === "ARSON")
}

const burglaryDataLayer = {
  'type': 'FeatureCollection',
  'features':crimeDataLayer.filter(crime => crime.properties.offense_category === "BURGLARY")
}

const autoTheftDataLayer = {
  'type': 'FeatureCollection',
  'features':crimeDataLayer.filter(crime => crime.properties.offense_category === "STOLEN VEHICLE")
}

export const Map = () => {
    const map = useRef(null);
    const mapContainer = useRef(null);
    const [lng, setLng] = useState(-83.04);
    const [lat, setLat] = useState(42.33);
    const [zoom, setZoom] = useState(13);

    
    //https://www.lostcreekdesigns.co/writing/how-to-create-a-map-popup-component-using-mapbox-and-react/
    const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }))
    const mapImageOne = 'icons/fraud.png'

    useEffect(() => {
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/christopherclemmons2020/cl37v6xlr000u14mlzlfbuc80',
            zoom: zoom,
            // lng lat
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
       
            map.current.addLayer(createDataLayer('robbery', robberyDataLayer, '#3dd6f5'));
            map.current.addLayer(createDataLayer('fraud', fraudDataLayer, '#cfeb34'));
            map.current.addLayer(createDataLayer('arson', arsonDataLayer, '#e55e5e'));
            map.current.addLayer(createDataLayer('burglary', burglaryDataLayer, '#ffffff'));
            map.current.addLayer(createDataLayer('auto theft', autoTheftDataLayer, '#f5993d'));

            map.current.addControl(
                new mapboxgl.GeolocateControl({
                    positionOptions: {
                        enableHighAccuracy: true
                    },
                    // When active the map will receive updates to the device's location as it changes.
                    trackUserLocation: true,
                    // Draw an arrow next to the location dot to indicate which direction the device is heading.
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