import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Header = () => {
  return (
    <SafeAreaView
      style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 8,
          backgroundColor: '#110101',
          zIndex: 1,
        }}
      >
        <Text style={tw` text-white text-xs`}>
          THAM GIA NGAY - BLACK FRIDAY SĂN SALE CỰC ĐÃ
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        <View>
          <TabBarIcon name={'menu'} />
        </View>
        <View>
          <Image source={require('../../assets/images/logo.png')} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TabBarIcon name={'search'} style={tw`mr-2`} />
          <TabBarIcon name={'basket'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
