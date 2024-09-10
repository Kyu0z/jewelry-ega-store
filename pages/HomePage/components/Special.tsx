import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import tw from 'tailwind-react-native-classnames';

const { width, height } = Dimensions.get('window');

const Special = () => {
  const openURL = (url: any) => {
    Linking.openURL(url).catch((err) =>
      console.error('Failed to open URL:', err)
    );
  };
  return (
    <>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={5}
        loop={true}
        paginationStyle={styles.pagination}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
      >
        <View style={styles.slide}>
          <Image
            source={require('../../../assets/images/banner-3.jpg')}
            style={styles.image}
            resizeMode='cover'
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../../assets/images/banner-4.jpg')}
            style={styles.image}
            resizeMode='cover'
          />
        </View>
      </Swiper>
      <View style={tw`flex-col text-center`}>
        <Text style={tw`text-xl font-medium text-center mt-4`}>
          BỘ SƯU TẬP LẮC TAY
        </Text>
        <Text style={tw`text-center text-gray-500 text-sm my-2`}>
          Vượt qua hàng thập kỷ với phong cách thiết kế của EGA Luxury
        </Text>
        <TouchableOpacity onPress={() => openURL('https://github.com/kyu0z')}>
          <Text style={[styles.link]}>Xem chi tiết</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.25,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 2,
  },
  pagination: {
    bottom: 10,
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  link: {
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default Special;
