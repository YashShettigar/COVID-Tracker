import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    pgView: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        color: '#fff'
    }, 
    label: {
        backgroundColor: '#b5b827',
        height: 35,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        fontSize: 20
    },
    header: {
        display: 'flex',
        flex: 1,
        width: '100%',
        height: 100, 
    },
    map: {
        flex: 1 
    },
    card: {
        position: 'absolute',
        bottom: 20,
        flex: 1,
        alignSelf: 'center',
        zIndex: 99
    }
})