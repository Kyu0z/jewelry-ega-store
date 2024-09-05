import Banner from '@/components/Banner';
import { styled } from 'nativewind';
import React from 'react';
import { Dimensions, Image, View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import tw from 'tailwind-react-native-classnames';
import { useColorScheme } from '@/hooks/useColorScheme';

const { width, height } = Dimensions.get('window');
const HomePage = () => {
  const colorScheme = useColorScheme();
  const buttonStyle = {
    backgroundColor: colorScheme === 'dark' ? 'white' : 'black',
  };
  const buttonTextStyle = {
    color: colorScheme === 'dark' ? 'black' : 'white',
  };
  return (
    <>
      <View>
        <Banner />
      </View>
      <View style={tw`mt-4 mb-4`}>
        <Text style={tw`text-xl`}>
          ABOUT <Text style={tw`font-medium`}>EAGLUXURY</Text>
        </Text>
        <View style={tw`mt-2`}>
          <Text
            style={[
              tw`leading-7 mb-4`,
              {
                color: colorScheme === 'dark' ? '#fff' : '#333',
              },
            ]}
          >
            EGA LUXURY bắt nguồn từ Nghệ thuật, Thiết kế và Văn hóa gắn liền với
            thời gian.
          </Text>
          <Text
            style={[
              tw`leading-7 mb-4`,
              {
                color: colorScheme === 'dark' ? '#fff' : '#333',
              },
            ]}
          >
            Đồ trang sức của chúng tôi được lấy cảm hứng từ những hình dạng và
            câu chuyện phổ quát trải dài qua nhiều thế hệ và nền văn hóa.
          </Text>
          <Text
            style={[
              tw`leading-7 mb-4`,
              {
                color: colorScheme === 'dark' ? '#fff' : '#333',
              },
            ]}
          >
            Các hình thức điêu khắc, những đường cong mềm mại và những đường nét
            uyển chuyển tạo nên vẻ sang trọng dễ dàng cho những nhà sáng tạo táo
            bạo, tò mò.
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Button
            mode='contained-tonal'
            onPress={() => console.log('Khám phá ngay')}
            style={buttonStyle}
            labelStyle={buttonTextStyle}
          >
            Khám phá ngay
          </Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default HomePage;
