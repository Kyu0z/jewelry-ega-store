import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

const Banner = () => {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      autoplay={true}
      autoplayTimeout={5} // Chuyển slide sau 5 giây
      loop={true} // Chế độ lặp lại liên tục
      paginationStyle={styles.pagination}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
    >
      <View style={styles.slide}>
        <Image
          source={require('../../assets/images/slider2.jpg')}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../../assets/images/slider1.jpg')}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.3, // Chiếm 30% chiều cao của thiết bị, bạn có thể điều chỉnh theo ý muốn
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width, // Đảm bảo rằng mỗi slide chiếm toàn bộ chiều rộng của thiết bị
    height: '100%',
  },
  image: {
    width: '100%', // Chiếm toàn bộ chiều rộng của slide
    height: '100%', // Chiếm toàn bộ chiều cao của slide
    resizeMode: 'cover',
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
});

export default Banner;
