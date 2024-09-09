import React, { useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import tw from 'tailwind-react-native-classnames';
const { width, height } = Dimensions.get('window');

const Luxury = () => {
  const [activeImage1, setActiveImage1] = useState(
    require('../../../../../assets/images/pr-main-1.png')
  );
  const [activeImage2, setActiveImage2] = useState(
    require('../../../../../assets/images/pr-main-4.png')
  );
  const [activeImage3, setActiveImage3] = useState(
    require('../../../../../assets/images/pr-main-6.png')
  );
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      loop={false}
      showsPagination={false}
    >
      {/* Slide 1 */}
      <View style={styles.slide}>
        <View style={styles.imageContainer}>
          {/* Hiển thị ảnh lớn */}
          <Image source={activeImage1} style={styles.image} />
          <View style={tw`flex-col justify-center text-center`}>
            <Text style={styles.caption}>Diamond Zone</Text>
            <Text style={tw`text-center font-medium mb-2`}>
              Nhẫn Oval Aquamarine Statement
            </Text>
            <Text
              style={[
                tw`text-center mb-2`,
                { textDecorationColor: 'line-through', color: '#969696' },
              ]}
            >
              66.000.000₫
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={tw`font-light`}>53.000.000₫</Text>
              <Text
                style={{
                  backgroundColor: '#d30b37',
                  color: '#fff',
                  padding: 5,
                  marginLeft: 8,
                }}
              >
                -20%
              </Text>
            </View>
            {/* Các ảnh nhỏ */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 8,
                marginLeft: 8,
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  setActiveImage1(
                    require('../../../../../assets/images/pr-main-1.png')
                  )
                }
              >
                <Image
                  source={require('../../../../../assets/images/pr-main-1.png')}
                  style={styles.imageSub}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  setActiveImage1(
                    require('../../../../../assets/images/pr-main-2.png')
                  )
                }
              >
                <Image
                  source={require('../../../../../assets/images/pr-main-2.png')}
                  style={[styles.imageSub, { marginRight: 6, marginLeft: 6 }]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  setActiveImage1(
                    require('../../../../../assets/images/pr-main-3.png')
                  )
                }
              >
                <Image
                  source={require('../../../../../assets/images/pr-main-3.png')}
                  style={styles.imageSub}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Slide khác */}
        <View style={styles.imageContainer}>
          <Image source={activeImage2} style={styles.image} />
          <View style={tw`flex-col justify-center text-center`}>
            <Text style={styles.caption}>EGA</Text>
            <Text style={tw`text-center font-medium mb-2`}>
              Bông tai kim cương đính đá quý
            </Text>
            <Text
              style={[
                tw`text-center mb-2`,
                { textDecorationColor: 'line-through', color: '#969696' },
              ]}
            >
              28.700.000₫
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={tw`font-light`}>25.000.000₫</Text>
              <Text
                style={{
                  backgroundColor: '#d30b37',
                  color: '#fff',
                  padding: 5,
                  marginLeft: 8,
                }}
              >
                -13%
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 8,
                marginLeft: 8,
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  setActiveImage2(
                    require('../../../../../assets/images/pr-main-4.png')
                  )
                }
              >
                <Image
                  source={require('../../../../../assets/images/pr-main-4.png')}
                  style={styles.imageSub}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  setActiveImage2(
                    require('../../../../../assets/images/pr-main-5.png')
                  )
                }
              >
                <Image
                  source={require('../../../../../assets/images/pr-main-5.png')}
                  style={[styles.imageSub, { marginRight: 6, marginLeft: 6 }]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Slide 2 */}
      <View style={[styles.slide, { marginLeft: 1 }]}>
        <View style={styles.imageContainer}>
          <Image source={activeImage3} style={styles.image} />
          <View style={tw`flex-col justify-center text-center`}>
            <Text style={styles.caption}>EGA</Text>
            <Text style={tw`text-center font-medium mb-2`}>
              Bông tai cao cấp Huggie đính kim cương
            </Text>
            <Text
              style={[
                tw`text-center mb-2`,
                { textDecorationColor: 'line-through', color: '#969696' },
              ]}
            >
              25.700.000₫
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={tw`font-light`}>24.000.000₫</Text>
              <Text
                style={{
                  backgroundColor: '#d30b37',
                  color: '#fff',
                  padding: 5,
                  marginLeft: 8,
                }}
              >
                -7%
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 8,
                marginLeft: 8,
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  setActiveImage3(
                    require('../../../../../assets/images/pr-main-6.png')
                  )
                }
              >
                <Image
                  source={require('../../../../../assets/images/pr-main-6.png')}
                  style={styles.imageSub}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  setActiveImage3(
                    require('../../../../../assets/images/pr-main-7.png')
                  )
                }
              >
                <Image
                  source={require('../../../../../assets/images/pr-main-7.png')}
                  style={[styles.imageSub, { marginRight: 6, marginLeft: 6 }]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.5, // Chiều cao của Swiper
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
    width: width / 2 - 20,
  },
  image: {
    width: width / 2 - 20,
    height: height * 0.2,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  imageSub: {
    width: 35,
    height: 35,
    borderRadius: 100,
    resizeMode: 'cover',
  },
  caption: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 14,
    color: '#969696',
  },
});

export default Luxury;
