import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { createBottomTabNavigator,createStackNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Header, Left, Icon } from "native-base";
// import SponsorScreen from './SponsorScreen'

// export default class AppTabNavigator extends Component {

//     static navigationOptions = ({ navigation }) => {
//         return {
//             title:'Sponsors',
//             headerLeft: (
//                 <View style={{ padding: 10 }}>
//                     <Ionicons name="md-menu" size={44} onPress={() => navigation.openDrawer()} />
//                 </View>
//             )
//         }
//     }
//     render() {
//         return (
//             <SponsorNavigator screenProps={{ navigation: this.props.navigation }} />
//         )
//     }
// }

class SponsorScreen extends Component {

    static navigationOptions = ({ navigation }) => {
                return {
                    title:'Sponsors',
                    headerLeft: (
                        <View style={{ padding: 10 }}>
                            <Ionicons name="md-menu" size={44} onPress={() => navigation.openDrawer()} />
                        </View>
                    )
                }
            }
    render() {
        return (
            
            <View style={styles.container}>
                <Text>SponsorScreen</Text>
            </View>
          
        );
    }
}
export default SponsorScreen;

const SponsorNavigator = new createStackNavigator({
    SponsorScreen: {
        screen: SponsorScreen,
        navigationOptions:{
            header:null
        }
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flex: 1,
        marginTop:10,
        backgroundColor:'#fff',
    }
});