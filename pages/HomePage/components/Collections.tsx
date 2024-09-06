import React from 'react';
import { Image, Text, View, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import tw from 'tailwind-react-native-classnames';

const { width, height } = Dimensions.get('window');

const Collections = () => {
  return (
    <>
      <View>
        <Text style={tw`text-xl font-medium`}>BỘ SƯU TẬP</Text>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          loop={false}
          showsPagination={false}
        >
          {/* Slide 1 */}
          <View style={[styles.slide, { marginRight: 0 }]}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../../assets/images/ring.jpg')}
                style={styles.image}
              />
              <Text style={styles.caption}>Nhẫn</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../../assets/images/shake-hands.jpg')}
                style={styles.image}
              />
              <Text style={styles.caption}>Lắc tay</Text>
            </View>
          </View>

          {/* Slide 2 */}
          <View style={[styles.slide, { marginLeft: 1 }]}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../../assets/images/necklace.jpg')}
                style={styles.image}
              />
              <Text style={styles.caption}>Vòng cổ</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../../assets/images/earing.jpg')}
                style={styles.image}
              />
              <Text style={styles.caption}>Bông tai</Text>
            </View>
          </View>
        </Swiper>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.3, // Chiều cao của Swiper
  },
  slide: {
    flex: 1,
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    width: width,
    height: '100%',
  },
  imageContainer: {
    alignItems: 'center',
    width: width / 2 - 20, // Mỗi ảnh chiếm 50% chiều ngang trừ đi khoảng cách
  },
  image: {
    width: width / 2 - 20, // Đảm bảo mỗi ảnh chiếm 50% chiều ngang
    height: height * 0.2, // Chiều cao tùy chỉnh cho ảnh
    borderRadius: 10,
    resizeMode: 'cover',
  },
  caption: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
  },
});

export default Collections;
