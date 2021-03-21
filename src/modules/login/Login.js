import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {colors, fonts} from "../../styles";

const Login = ({ onSignIn }) => {
    return (
        <View style={styles.container}>
            <Text>Public Sign In Screen</Text>
            <Button title="Sign In" onPress={onSignIn} />
        </View>
    );
};
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
export default Login;