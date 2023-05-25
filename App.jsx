/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {FlagshipProvider} from '@flagship.io/react-native-sdk';
import Home from './Home';

export default class App extends React.Component {
  render() {
    return (
      // Use FlagshipProvider in a suitable place to wrap your application
      <FlagshipProvider
        envId=""
        apiKey=""
        visitorData={{
          id: 'visitor-2',
          context: {
            key: 'value',
          },
        }}>
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </FlagshipProvider>
    );
  }
}
