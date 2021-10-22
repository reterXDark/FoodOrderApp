import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Icon2 from 'react-native-vector-icons/AntDesign';
import PIC from "../../Images/asd.jpg";

const DailyDealsScreen = (props) => {

    const [DATA, setNewNoti] = useState([
        { Pic: PIC },
        { Pic: PIC },
        { Pic: PIC },
        { Pic: PIC },
        { Pic: PIC },
    ]);

    const CardFuntion = ({ item, index }) => {

        return (
            <View style={styles.horBanner}>
                <TouchableOpacity style={styles.imageBANNER}>
                    <ImageBackground resizeMode={'cover'} source={require('../../Images/asd.jpg')} style={{
                        alignSelf: 'center',
                        width: windowWidth * 0.9,
                        height: windowHeight * 0.2,
                        borderRadius: 10
                    }} />
                </TouchableOpacity>
                <View style={styles.textsCont}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 7 }}>
                        <Text style={{ fontWeight: 'bold' }}>BombayChow - Layyalpur Galleria</Text>
                        <Icon2
                            name="star"
                            size={10}
                            color='gold'
                            style={{ alignSelf: 'center', marginLeft: windowWidth * 0.28 }}
                        />

                        <Text>3.9 (315)</Text>
                    </View>
                    <Text>$$ . Fast Food Take Away Eid</Text>
                    <Text style={{ fontWeight: 'bold' }}>Rs . 49 Rupee Fee</Text>

                </View>
            </View>
        )
    }



    return (
        <ScrollView nestedScrollEnabled={true}>
            <View style={styles.headerImageCoontainer}>
                <ImageBackground resizeMode={'cover'} source={require('../../Images/Pancake-mix-poster-template-vectors-01.jpg')} style={{
                    alignSelf: 'center',
                    height: windowHeight * 0.3,
                    width: windowWidth * 1.0,
                }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.goBack()}>
                        <Icon
                            name="arrow-circle-left"
                            size={33}
                            color='#fff'
                            style={{ alignSelf: 'flex-start', marginLeft: 15, marginTop: 15 }}
                        />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    renderItem={CardFuntion}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>

        </ScrollView>
    )
}


export default DailyDealsScreen;

const styles = StyleSheet.create({
    headerImageCoontainer: {
        height: windowHeight * 0.3,
        width: windowWidth * 1.0,
        // backgroundColor: 'green'
    },
    horBanner: {
        marginTop: windowHeight * 0.05,
        // backgroundColor: 'tomato',
        alignSelf: 'center',
        height: windowHeight * 0.32,
        width: windowWidth * 0.9,
        elevation: 2,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    imageBANNER: {
        // backgroundColor: 'green',
        alignSelf: 'center',
        width: windowWidth * 1.0,
        height: windowHeight * 0.2,
    },
    textsCont: {
        marginTop: windowHeight * 0.02,
        margin: 10
    }
})
