import React, { Component } from 'react';
import {
    View, TouchableOpacity,
    Text, StyleSheet, ListView,
    Image
} from 'react-native';

import backList from '../../../../media/appIcon/backList.png';
import getProductByType from '../../../../api/getProductByType';

const prefix = 'http://localhost:3000/images/product/';

export default class ListProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listProduct: []
        };
    }

    componentDidMount() {
        const { id } = this.props.category;
        getProductByType(id, 0)
        .then(listProduct => this.setState({ listProduct }));
    }

    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }

    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }

    render() {
        const {
            container, header, wrapper, backStyle, titleStyle,
            productContainer, productImage, productInfo, lastRowInfo,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail
        } = styles;

        const { name } = this.props.category;
        return (
            <View style={container}>
                <ListView 
                    removeClippedSubviews={false}
                    enableEmptySections
                    contentContainerStyle={wrapper}
                    renderHeader={() => (
                        <View style={header}>
                            <TouchableOpacity onPress={this.goBack.bind(this)}>
                                <Image source={backList} style={backStyle} />
                            </TouchableOpacity>
                            <Text style={titleStyle}>{name.toUpperCase()}</Text>
                            <View style={{ width: 30 }} />
                        </View>
                    )}
                    dataSource={
                        new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
                        .cloneWithRows(this.state.listProduct)
                    }
                    renderRow={product => (
                        <View style={productContainer}>
                            <Image style={productImage} source={{ uri: `${prefix}${product.images[0]}` }} />
                            <View style={productInfo}>
                                <Text style={txtName}>{product.name}</Text>
                                <Text style={txtPrice}>{product.price}$</Text>
                                <Text style={txtMaterial}>{product.material}</Text>
                                <View style={lastRowInfo}>
                                    <Text style={txtColor}>Colo RoyalBlue</Text>
                                    <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                    <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
                                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8'
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        margin: 10,
        paddingHorizontal: 10
    },
    backStyle: {
        width: 30,
        height: 30
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 20
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: 20,
        fontWeight: '400'
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#B10D65',
    },
    txtMaterial: {
        fontFamily: 'Avenir'
    },
    txtColor: {
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 11
    }
});
