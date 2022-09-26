import React, {useEffect, useState} from "react";
import {Image, StyleSheet, View} from "react-native";

export default function RandomCats() {
    const [cat, setCat] = useState("");
    const fetchCat = () => {
        fetch("https://aws.random.cat/meow")
            .then((response) => response.json())
            .then((data) => setCat(data))
    }

    useEffect(()=>{
        fetchCat()
    }, [])

    return (
        <View>
            <Image
                source={{uri: cat.file}}
                style={styles.img}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    img: {
        width: 400,
        height: 400,

    }
})