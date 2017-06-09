import { AsyncStorage } from 'react-native';

const getCart = async () => {
    try {
        const cart = await AsyncStorage.getItem('@CART');
        console.log(cart);
        return JSON.parse(cart);
    } catch (err) {
        console.log('LOI: ', err);
        return [];
    }
};

module.exports = getCart;
