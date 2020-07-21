import React from 'react'
import { StyleSheet } from 'react-native'
import { Appbar } from "react-native-paper";
import { useNavigation } from '@react-navigation/native'

export default () => {
    const nav = useNavigation()
    return(
        <Appbar.Header style={styles.mainHeader} >   
            <Appbar.Action
                icon="menu"
                onPress={() => {
                    nav.toggleDrawer()
                }} 
            />
            <Appbar.Content 
                title="COVID Tracker"
                color="#2196f3"
                style={{ marginLeft: 20 }}
            />
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    mainHeader: {
        backgroundColor: '#212121'
    },
})