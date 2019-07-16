import React from 'react';
import {
    StyleSheet, Text, SafeAreaView, ImageBackground, View, StatusBar, Image, KeyboardAvoidingView
    , TouchableOpacity
} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

class Home extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../img/HomePage.png')} style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.container}>
                        <StatusBar barStyle="dark-content" hidden={false} />

                        <View style={styles.imgs}>
                            <Image style={styles.img} source={require('../img/01.png')} />
                        </View>

                        <View style={styles.buttons}>
                            <TouchableOpacity
                                style={[styles.button1, styles.buttonMargin]}
                                onPress={() => this.props.navigation.navigate('LogIn')}
                            >
                                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
                                    LogIn </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button2, styles.buttonMargin]}
                                onPress={() => this.props.navigation.navigate('SignUp')}
                            >
                                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
                                    SignUp </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground >
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
    },
    imgs: {
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1
    },
    img: {
        justifyContent: 'space-around',
        margin: 10,
        width: 200,
        height: 130,
        resizeMode: 'center'
    },
    buttons: {
        padding: 20,
        flex: 1,
    },
    button1: {
        justifyContent: 'center',
        borderRadius: 30,
        alignItems: 'center',
        backgroundColor: '#A10000',
        padding: 10,
    },
    button2: {
        justifyContent: 'center',
        borderRadius: 30,
        borderColor: '#A10000',
        borderWidth: 2,
        alignItems: 'center',
        backgroundColor: '#202020',
        padding: 10,
    },
    buttonMargin: {
        margin: 5
    },
});


export default Home;