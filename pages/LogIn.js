import React from 'react';
import {
    StyleSheet, Text, SafeAreaView, ImageBackground, View, StatusBar, Image, KeyboardAvoidingView
    , TouchableOpacity
} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';

class LogIn extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../img/LogIn.png')} style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.container}>
                        <StatusBar barStyle="dark-content" hidden={false} />
                        <View style={{ flex: 2 }} >
                            <TouchableOpacity
                                style={{ margin: 15, width: 20, height: 20 }}
                                onPress={() => this.props.navigation.navigate('Home')}
                            >
                                <Image style={{ width: 20, height: 20 }} source={require('../img/Exit.png')} />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.buttons}>
                            <TextInput
                                style={styles.input}
                                placeholder='Username'
                            >

                            </TextInput>
                            <TextInput
                                style={styles.input}
                                secureTextEntry={true}
                                placeholder='Password'
                            >

                            </TextInput>
                            <TouchableOpacity
                                style={[styles.button1, styles.buttonMargin]}
                            >
                                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
                                    LogIn </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.imgs}>
                            <Image style={styles.img} source={require('../img/01.png')} />
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
        padding: 5,
    },
    imgs: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

    },
    img: {
        // justifyContent: 'space-around',
        margin: 10,
        width: 200,
        height: 130,
        resizeMode: 'center'
    },
    buttons: {
        padding: 20,
        flex: 4,
    },
    input: {
        backgroundColor: '#353535',
        borderRadius: 30,
        padding: 10,
        margin: 5,
        color: 'white',
        fontSize: 18
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


export default LogIn;
