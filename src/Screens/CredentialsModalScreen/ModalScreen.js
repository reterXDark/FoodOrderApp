import React, { useState } from 'react'
import { View, Text, Modal, StyleSheet, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ModalScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.mainContainer}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onPressOut={() => { this.setModalVisible(false) }}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            />

        </View>
    )
}

export default ModalScreen;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'tomato',
        width: windowWidth * 1.0,
        height: windowHeight * 0.2,
        borderRadius: 10
    }
})
