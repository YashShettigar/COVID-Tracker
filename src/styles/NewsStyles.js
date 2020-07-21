import React from 'react'
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    pgView: {
        backgroundColor: '#000',
        width: '100%',
        color: '#fff',
        height: '100%'
    },
    header: {
        display: 'flex',
        flex: 1,
        width: '100%',
        height: 100, 
    },
    pgLabel: {
        backgroundColor: '#b5b827',
        height: 35,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        fontSize: 20
    },
    newsCard: {
        backgroundColor: '#0e1626',
        width: '90%',
        marginVertical: 20,
        marginHorizontal: 20,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 6,
        alignItems: 'center'
    },
    noImgStyles: {
        width: '90%',
        height: 180,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 12,
        borderColor: '#b5b827',
        borderWidth: 1,
        alignSelf: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgStyles: {
        width: '90%',
        height: 180,
        marginTop: 20,
        marginHorizontal: 20,
        resizeMode: 'contain',
        alignSelf: 'center',
        borderRadius: 12,
        borderColor: '#b5b827',
        borderWidth: 1,
    },
    headlines: {
        marginVertical: 10,
        width: '90%',
        marginHorizontal: 20,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '700',
        color: '#fff'
    },
    pDate: {
        width: '90%',
        marginHorizontal: 20 ,
        textAlign: 'right',
        fontSize: 14,
        marginVertical: 20,
        fontWeight: '700',
        color: '#b5b827'
    },
    descr: {
        width: '90%',
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
        fontWeight: '600'
    },
    author: {
        width: '60%',
        marginTop: 14
    },
    news: {
        width: '80%',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center'
    },
    label: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 18,
        color: '#fff'
    }, 
    texts: {
        textAlign: 'center',
        fontSize: 16,
        color: '#fff'
    },
    links: {
        color: '#b5b827',
        textDecorationLine: 'underline',
        fontWeight: '700'
    },
    carousel: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})