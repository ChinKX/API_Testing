import React, { PureComponent } from 'react';
import { View, Text, Button, Image, StyleSheet, Platform } from 'react-native';
//import styles for component
//import styles from './styles';

class Home extends PureComponent {
    //Have your navigationOptions in a form of a static method to have access to navigation prop.
    static navigationOptions = ({navigation}) => ({
        headerRight: (
            <Button
                color="#000"
                title="Go to Poke List"
                onPress={() => navigation.navigate('PokeList')}
            />
        )
    })
    render() {
        return (
            <View style={styles.homeDiv}>
                <Image source={{uri: 'https://res.cloudinary.com/aa1997/image/upload/v1536011005/Pokemon_HomePage_Icon.png'}}
                    style={styles.homePageImage} />
                <Text style={styles.header}>Welcome to Pokemon API App</Text>
            </View>
        )
    }
}

//Export the statelesss component as a default export 
export default Home;

const styles = StyleSheet.create({
    homeDiv: {
        //Flex: 1 gets all the space 
        flex: 1,
        //Since by default flexDiraction is column will center container children vertically within container.
        justifyContent: 'center',
        //Horizantally centers component is will center children horizontally within container.
        alignItems: 'center',
        //Have a backgroundColor of #000
        backgroundColor: '#000'
    },
    homePageImage: {
        //Have the image be 75% to render entire image width.
        width: '75%',
        //Have the image be 50% to render entire image height.
        height: '50%',
    },
    header: {
        //Define the size of the font.
        fontSize: 30,
        //Have the font color be orange.
        color: 'orange',
        //Have the text align in the center.
        textAlign: 'center',
        //Use the Platform.select for specifying fontFamily based on Platform.
        ...Platform.select({
            ios: {
                fontFamily: 'Heiti SC'
            },
            android: {
                fontFamily: 'monospace'
            }
        })
    }
})