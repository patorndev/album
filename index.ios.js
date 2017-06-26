// Code for ios

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumsList from './src/components/AlbumsList';

// Create Component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumsList />
  </View>
);

// Render to Device sfge
AppRegistry.registerComponent('albums', () => App);
