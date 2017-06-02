import { AsyncStorage } from 'react-native';

const saveToken = async (token) => {
    try {
        await AsyncStorage.setItem('@TOKEN', token);
    } catch (err) {
        console.log(`KHONG THE SAVE: ${err}`);
    }
};

module.exports = saveToken;
