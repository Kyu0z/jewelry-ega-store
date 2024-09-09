import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import tw from 'tailwind-react-native-classnames';
import Limited from './components/Limited';
import Luxury from './components/Luxury';

const TabsSale = () => {
  const [activeTab, setActiveTab] = React.useState('luxury');

  const renderContent = () => {
    switch (activeTab) {
      case 'luxury':
        console.log('Rendering Luxury');
        return <Luxury />;
      case 'limited':
        console.log('Rendering Limited');
        return <Limited />;
      default:
        return null;
    }
  };

  return (
    <>
      <View>
        <Text style={tw`text-xl font-medium text-center mt-4`}>
          SALE 50% OFF
        </Text>

        {/* Custom tab buttons */}
        <View style={tw`flex-row justify-center mt-4`}>
          <TouchableOpacity
            style={[
              tw`p-2 px-4 border-b-2`,
              activeTab === 'luxury'
                ? { borderBottomColor: 'black' }
                : { borderBottomColor: 'transparent' },
            ]}
            onPress={() => setActiveTab('luxury')}
          >
            <Text
              style={tw`${
                activeTab === 'luxury' ? 'text-black' : 'text-gray-500'
              } font-medium`}
            >
              Hàng hiệu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              tw`p-2 px-4 border-b-2`,
              activeTab === 'limited'
                ? { borderBottomColor: 'black' }
                : { borderBottomColor: 'transparent' },
            ]}
            onPress={() => setActiveTab('limited')}
          >
            <Text
              style={tw`${
                activeTab === 'limited' ? 'text-black' : 'text-gray-500'
              } font-medium`}
            >
              Độc quyền
            </Text>
          </TouchableOpacity>
        </View>

        {/* Render tab content based on activeTab */}
        {renderContent()}

        <Button
          mode='outlined'
          onPress={() => console.log('Xem tất cả')}
          style={{
            borderRadius: 2,
            width: '50%',
            justifyContent: 'center',
            display: 'flex',
            alignSelf: 'center',
            marginTop: 12,
            marginBottom: 16,
            borderWidth: 1,
            borderColor: '#e8e8e2',
          }}
          labelStyle={{ color: 'black', fontWeight: 500, letterSpacing: 4 }}
        >
          Xem tất cả
        </Button>
      </View>
    </>
  );
};

export default TabsSale;
