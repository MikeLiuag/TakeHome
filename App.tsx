import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { ApolloProvider } from '@apollo/client';
import client from './src/graphQL/config';
import Starships from './src/screens/Starships';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView>
        <StatusBar
          barStyle={'dark-content'}
        />
        <Starships />
      </SafeAreaView >
    </ApolloProvider>
  );
}

export default App;
