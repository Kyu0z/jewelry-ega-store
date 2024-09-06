import React from 'react';
import { ScrollView, Text, View, StyleSheet, Dimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Header from './Header';
import Footer from './Footer';
import Banner from '@/pages/HomePage/components/Banner';
import HomePage from '@/pages/HomePage';

const { height } = Dimensions.get('window');

const MainLayout = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.contentInner}>
          <View>
            <HomePage />
          </View>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 2,
    color: 'black',
  },
  contentInner: {
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default MainLayout;
