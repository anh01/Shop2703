import { AsyncStorage } from 'react-native';

const saveCart = async (cartItems) => {
    try {
        console.log('SAVED: ', cartItems);
        await AsyncStorage.setItem('@CART', JSON.stringify(cartItems));
    } catch (err) {
        console.log(`KHONG THE SAVE: ${err}`);
    }
};

module.exports = saveCart;
