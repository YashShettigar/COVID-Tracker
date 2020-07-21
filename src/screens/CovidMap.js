import React, { useState, useEffect } from 'react'
import { View, Text } from "react-native"
import { Surface } from 'react-native-paper';
import MapView, { Marker, Callout } from 'react-native-maps'
import map_style from '../resources/map_style.json'

//styles
import { styles } from "../styles/MapStyles";

//components
import TitleBar from "../components/TitleBar";

// data service
import { markerDetails } from '../backend/LocationPlotter'
import Popup from "../components/Popup";

export default ({ nav }) => {
    const [ locations, setLocations ] = useState([])

    useEffect(() => {
        markerDetails()
        .then(locs => {
            setLocations(locs)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <View style={ styles.pgView }>
            <TitleBar style={styles.header} />
            <Text style={styles.label}>
                Maps
            </Text>
            <MapView
                style={styles.map}
                customMapStyle={map_style.styles}
            >
                <>
                    {locations.map((locs, index) => (
                        <Marker 
                            key={index}
                            pinColor='#f00'
                            coordinate={locs.coords}
                        >
                            <Surface 
                                style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: 4,
                                    backgroundColor: '#f00'
                                }}
                            />
                            <Callout>
                                <Popup 
                                    country={locs.country}
                                    flag={locs.flag}
                                    tests={locs['Total Tests']}
                                    active={locs["Active Cases"]}
                                    death={locs['Total Deaths']}
                                    recov={locs['Total Recovered']}
                                    cases={locs['Total Cases']}
                                    cpm={locs['Cases Per Mil']}
                                    dpm={locs['Deaths Per Mil']}
                                    tpm={locs['Tests Per Mil']}
                                />
                            </Callout>
                        </Marker>
                    ))}
                </>
            </MapView>
        </View>
    )
}

