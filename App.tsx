/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar, useColorScheme} from 'react-native';
import {StripeProvider} from '@stripe/stripe-react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';

import Amplify, {Auth} from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native';

import config from './src/aws-exports';
Amplify.configure(config);
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <StripeProvider publishableKey="pk_test_51K0hJzJbYdBDaeYYAEsBDKOfRVUzlj2oIwn8preoCrYLxEO4trEIabgxiSDcKNRReDF7W8V0qQynkTKXCLOsI6le00641PtKlW">
        <Router />
      </StripeProvider>
    </View>
  );
};

export default withAuthenticator(App);
