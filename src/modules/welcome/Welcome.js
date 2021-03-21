import React from 'react';
import { StyleSheet, View, Text, ScrollView , Image} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Entypo';
import { colors, fonts } from '../../styles';

import { Button, RadioGroup, Dropdown } from '../../components';

export default function WelcomeScreen({navigation}) {
//const Welcome = ({navigation}) => {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ paddingBottom: 20 }}
        >
            <View style={styles.componentsSection}>
                <Image
                    source={require('../../../assets/images/DOCTORSINA.jpg')}
                    style={{
                        width: 200,
                        height: 200,
                        marginTop: 100

                    }}
                />
            </View>

            <View style={styles.componentsSection}>


                <View style={styles.demoButtonsContainer}>
                    <Button
                        style={[styles.demoButton, {flexBasis: '50%'}]}
                        primary
                        bordered
                        caption="Login"
                        onPress={() => navigation.navigate('Login')}
                    />
                    <Button
                        style={[styles.demoButton, {flexBasis: '50%'}]}
                        secondary
                        bordered
                        caption="Register"
                        onPress={() => navigation.navigate('AppView')}
                    />
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        paddingTop: 20,

    },
    componentsSection: {
        backgroundColor: colors.white,
        paddingHorizontal: 16,
        paddingVertical: 24,
        marginBottom: 20,
        borderRadius: 5,
        alignItems: 'center'
    },
    componentSectionHeader: {
        fontFamily: fonts.primaryRegular,
        color: '#686868',
        fontSize: 24,
        marginBottom: 20,
    },
    demoButtonsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20
    },
    demoIconsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 3,
        marginBottom: 20,
    },
    demoButton: {
        marginTop: 8,
        marginBottom: 8,
        paddingHorizontal: 8
    },
    demoItem: {
        marginVertical: 15,
    },
});
//export default Welcome;
