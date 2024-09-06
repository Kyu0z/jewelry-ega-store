import Banner from '@/pages/HomePage/components/Banner';
import React from 'react';
import { Dimensions, Image, View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import Swiper from 'react-native-swiper';
import tw from 'tailwind-react-native-classnames';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import About from './components/About';
import Collections from './components/Collections';
import TabsSale from './components/TabsSale';

const HomePage = () => {
  return (
    <>
      <Banner />
      <About />
      <Collections />
      <TabsSale />
    </>
  );
};

export default HomePage;
