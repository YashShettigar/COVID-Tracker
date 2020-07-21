import React from 'react'
import axios from 'axios'

export const markerDetails =  () => {
    return axios.get('https://corona.lmao.ninja/v2/countries?yesterday&sort')
    .then(res => {
        const locations = []
        for (data of res.data){
            locations.push({
                "country":data.country,
                "flag": data.countryInfo.flag,
                "coords":{
                    latitude: data.countryInfo.lat,
                    longitude: data.countryInfo.long
                },
                "Total Tests": data.tests,
                "Total Cases":data.cases,
                "Total Deaths": data.deaths,
                "Total Recovered": data.recovered,
                "Active Cases": data.active,
                "Cases Per Mil": data.casesPerOneMillion,
                "Deaths Per Mil": data.deathsPerOneMillion,
                "Tests Per Mil": data.testsPerOneMillion
            })
        }
        return Promise.resolve(locations)
    })
    .catch(err => {
        console.log(err)
    })
}
