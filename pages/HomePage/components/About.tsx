import React from 'react';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Button } from 'react-native-paper';

const About = () => {
  const colorScheme = useColorScheme();
  const buttonStyle = {
    backgroundColor: colorScheme === 'dark' ? 'white' : 'black',
  };
  const buttonTextStyle = {
    color: colorScheme === 'dark' ? 'black' : 'white',
  };
  return (
    <>
      <View style={tw`mt-4 mb-4`}>
        <Text style={tw`text-xl`}>
          ABOUT <Text style={tw`font-medium`}>EAGLUXURY</Text>
        </Text>
        <View style={tw`mt-2`}>
          <Text
            style={[
              tw`leading-7 mb-4`,
              {
                color: colorScheme === 'dark' ? '#333' : '#333',
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
                color: colorScheme === 'dark' ? '#333' : '#333',
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
                color: colorScheme === 'dark' ? '#333' : '#333',
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
            mode='outlined'
            onPress={() => console.log('Khám phá ngay')}
            // style={buttonStyle}
            // labelStyle={buttonTextStyle}
            style={{
              borderRadius: 2,
              width: '80%',
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
            Khám phá ngay
          </Button>
        </View>
      </View>
    </>
  );
};

export default About;
