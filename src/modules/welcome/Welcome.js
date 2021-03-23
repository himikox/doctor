import React,{ useState } from 'react';
import { StyleSheet, View, Text, ScrollView , Image} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Entypo';
import OutlineInput from 'react-native-outline-input';
import { colors, fonts } from '../../styles';
import { SafeAreaView,TouchableOpacity } from 'react-native';
import { Button, RadioGroup, Dropdown } from '../../components';

export default function Welcome({onSignIn}) {
//const Welcome = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView
            style={styles.container}
            contentContainerStyle={{ paddingBottom: 20 }}
        >
            <View style={styles.componentsSection}>
                <Image
                    source={require('../../../assets/images/DOCTORSINA.jpg')}
                    style={{
                        width: 200,
                        height: 200,
                        marginTop: 50

                    }}
                />
            </View>
            <View style = {{
                marginBottom: 30, paddingHorizontal: 16,
            }}>
            <OutlineInput
                value={email}
                onChangeText={(e: string) => setEmail(e)}
                label="Email"
                activeValueColor="#1174A7"
                activeBorderColor="#1174A7"
                activeLabelColor="#1174A7"
                passiveBorderColor="#1174A7"
                passiveLabelColor="#1174A7"
                passiveValueColor="#1174A7"
            />
            </View>
            <View style = {{ marginBottom: 10,paddingHorizontal: 16,
                }}>
            <OutlineInput
                value={password}
                onChangeText={(e: string) => setPassword(e)}
                label="Password"
                activeValueColor="#1174A7"
                activeBorderColor="#1174A7"
                activeLabelColor="#1174A7"
                passiveBorderColor="#1174A7"
                passiveLabelColor="#1174A7"
                passiveValueColor="#1174A7"
            />
            </View>
            <TouchableOpacity  >
                <Text >Forgot Password?</Text>
            </TouchableOpacity>
            <View style={styles.componentsSection}>


                <View style={styles.demoButtonsContainer}>
                    <Button
                        style={[styles.demoButton, {flexBasis: '50%'}]}
                        secondary
                        bordered
                        caption="Login"
                        onPress={onSignIn}
                    />

                </View>
            </View>
        </SafeAreaView>
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
    section: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
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
