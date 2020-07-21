import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

export default (props) => {
    return (
        <Card style={styles.card}>
            <Card.Cover source={{uri: props.flag}} />
            <Card.Content>
                <Title>
                    <Text>{ props.country }</Text>
                </Title>
                <Paragraph>Active Cases: { props.active }</Paragraph>
                <Paragraph>Total Tests: { props.tests }</Paragraph>
                <Paragraph>Total Deaths: { props.death }</Paragraph>
                <Paragraph>Total Recoveries: { props.recov }</Paragraph>
                <Paragraph>Total Cases: { props.cases }</Paragraph>
                <Paragraph>Cases Per Million: { props.cpm }</Paragraph>
                <Paragraph>Deaths Per Million: { props.dpm }</Paragraph>
                <Paragraph>Tests Per Million: { props.tpm }</Paragraph>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 350,
        height: 420,
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: 14
    }
})