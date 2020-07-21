import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Image, Linking } from "react-native"
import { Paragraph } from "react-native-paper";
import Carousel from "react-native-snap-carousel";

//styles
import { styles } from "../styles/NewsStyles";

//components
import TitleBar from "../components/TitleBar";

// Data Provider
import { getNews } from "../backend/NewsProvider";

export default ({ nav }) => {
    const [ news, setNews ] = useState([])
 
    useEffect(() => {
        getNews()
        .then(res => {
            setNews(res)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const carousel = useRef(null)
    
    const _newsRenderer = ({item:newsData, index}) => {
        const desc = newsData.desc
        return (
        <View key={index} style={styles.newsCard}>
            <Image 
                source={{uri: newsData.imgUrl}}
                style={styles.imgStyles}
            />
            <Text style={styles.headlines}>{newsData.title}</Text>
            <Paragraph style={styles.descr}>
                { desc.length>158 ? desc.substring(0, 158) : desc  }
                <Text onPress={() => Linking.openURL(newsData.url)} style={styles.texts, styles.links}>...read more.</Text>
            </Paragraph>
            <View style={styles.author}>
                <Text style={styles.label}>Author</Text>
                <Paragraph style={styles.texts}>{newsData.author}</Paragraph>
            </View>
            <Paragraph style={styles.pDate}>Published at: {newsData.published.split('T')[0]}</Paragraph>
        </View>
    )}

    return (
        <View style={ styles.pgView }>
            <TitleBar style={styles.header} />
            <Text style={styles.pgLabel}>
                News
            </Text>
            <View style={styles.carousel}>
                <Carousel
                    layout={'default'}
                    ref = {carousel}
                    data={news}
                    renderItem={_newsRenderer}
                    itemWidth={ 380 }
                    sliderWidth={ 300 }
                />
            </View>
        </View>
    )
}
