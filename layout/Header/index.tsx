import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import React from 'react';
import { Image, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Header = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }}>
      <View
        style={[
          tw`flex justify-around items-center p-2`,
          { backgroundColor: '#110101' },
        ]}
      >
        <Text style={tw` text-white text-xs`}>
          THAM GIA NGAY - BLACK FRIDAY SĂN SALE CỰC ĐÃ
        </Text>
      </View>
      <div
        style={{
          display: 'flex',
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
        <div style={tw`flex items-center`}>
          <TabBarIcon name={'search'} style={tw`mr-2`} />
          <TabBarIcon name={'basket'} />
        </div>
      </div>
    </div>
  );
};

export default Header;
