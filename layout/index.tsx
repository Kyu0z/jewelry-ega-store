import React from 'react';
import { ScrollView, Text, View, StyleSheet, Dimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Header from './Header';
import Footer from './Footer';

const { height } = Dimensions.get('window');

const MainLayout = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.contentInner}>
          <Text style={{ fontSize: 30 }}>Content goes here...</Text>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  contentContainer: {
    paddingTop: 60,
    color: 'black',
  },
  contentInner: {
    padding: 16,
  },
});

export default MainLayout;
