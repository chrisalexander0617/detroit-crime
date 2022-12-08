const fraud = {
    'type': 'FeatureCollection',
    'features': [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -82.95594321099998, 42.43084567900007
                ]
            },
            "properties": {
                "phoneFormatted": "(202) 234-7336",
                "phone": "2022347336",
                "address": "1471 P St NW",
                "city": "Washington DC",
                "country": "United States",
                "crossStreet": "at 15th St NW",
                "postalCode": "20005",
                "state": "D.C."
            }
        },
        {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.049766,
                38.900772
              ]
            },
            "properties": {
                "phoneFormatted": "(202) 507-8357",
                "phone": "2025078357",
                "address": "2221 I St NW",
                "city": "Washington DC",
                "country": "United States",
                "crossStreet": "at 22nd St NW",
                "postalCode": "20037",
                "state": "D.C."
            }
        }
    ]
}

const murder = {
    'type': 'FeatureCollection',
    'features': [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                -66.034084142948,
                50.909671288923
                ]
            },
            "properties": {
                "phoneFormatted": "(202) 234-7336",
                "phone": "2022347336",
                "address": "1471 P St NW",
                "city": "Washington DC",
                "country": "United States",
                "crossStreet": "at 15th St NW",
                "postalCode": "20005",
                "state": "D.C."
            }
        },
        {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -76.049766,
                36.900772
              ]
            },
            "properties": {
                "phoneFormatted": "(202) 507-8357",
                "phone": "2025078357",
                "address": "2221 I St NW",
                "city": "Washington DC",
                "country": "United States",
                "crossStreet": "at 22nd St NW",
                "postalCode": "20037",
                "state": "D.C."
            }
        }
    ]
}
export { fraud, murder}