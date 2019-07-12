//import React form react
import React from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
//import styles fro your PokeCard component.
//import styles from './styles';


//Define your stateless componetns, and destrcuts props from function arguments
const PokeCard = ({name, navigation}) => {
    return (
        <TouchableOpacity style={{backgroundColor: 'transparent'}} onPress={() => navigation.navigate('Pokemon', {name})}>
            <View  style={styles.listItemContainer}>
                <Text style={styles.pokeItemHeader}>{name}</Text>
                <Image source={{uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg'}} 
                        style={styles.pokeImage}/>
            </View>
        </TouchableOpacity>
    )
}

export default PokeCard;

const styles = StyleSheet.create({
    listItemContainer: {
        backgroundColor: '#000',
        borderStyle: 'solid',
        borderColor: '#fff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    pokeItemHeader: {  
        color: '#fff',
        fontSize: 24,
    },
    pokeImage: {
        backgroundColor: 'transparent',
        height: 50,
        width: 50
    }
})