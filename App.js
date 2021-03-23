import { Provider } from 'react-redux';
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { colors } from './src/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { store, persistor } from './src/redux/store';
import Welcome from "./src/modules/welcome/Welcome"
import AppView from "./src/modules/AppView"
// eslint-disable-next-line no-unused-vars
import Login from "./src/modules/login/Login"

import {Text} from "react-native-paper";
const RootStack = createStackNavigator();

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    const handleSignIn = () => {
        // TODO implement real sign in mechanism

        setIsAuthenticated(true);
    };
    const handleSignOut = () => {
        // TODO implement real sign out mechanism

        setIsAuthenticated(false);
    };
  return (
   /* <Provider store={store}>
      <NavigationContainer>
        <PersistGate
          loading={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <View style={styles.container}>
              <ActivityIndicator color={colors.red} />
            </View>
          }
          persistor={persistor}
        >
          <AppView />
        </PersistGate>
      </NavigationContainer>
    </Provider>
    */
      <NavigationContainer>
          <RootStack.Navigator>
              {isAuthenticated ? (
                      <RootStack.Screen name="AppView" component={AppView}  options={{headerShown: false}} />
                  ) :
                  (
                      <>

                          <RootStack.Screen name="Welcome" >
                              {(props) => (
                                  <Welcome {...props} onSignIn={handleSignIn} />

                              )}
                          </RootStack.Screen>
                      </>
                  )}
          </RootStack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
