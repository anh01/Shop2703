import { AsyncStorage } from 'react-native';

const getToken = async () => {
    try {
        return await AsyncStorage.getItem('@TOKEN');
    } catch (err) {
        return '';
    }
};

module.exports = getToken;
