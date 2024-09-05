import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Fontisto, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Accordion } from 'react-native-paper/lib/typescript/components/List/List';
import { List, TextInput } from 'react-native-paper';
import tw from 'tailwind-react-native-classnames';

const Footer = () => {
  const [expanded, setExpanded] = useState(false);
  const [text, setText] = React.useState('');

  const handlePress = () => setExpanded(!expanded);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ebebeb',
        padding: '22px 12px',
      }}
    >
      <View style={tw`mb-3`}>
        <Image source={require('../../assets/images/logo.png')} />
      </View>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
        <TabBarIcon name={'location'} size={16} style={tw`mr-2`} />
        <Text>Địa chỉ: 70 Lu Gia, District 11, Ho Chi Minh City.</Text>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
        <TabBarIcon name={'call'} size={16} style={tw`mr-2`} />
        <Text>Số điện thoại: 19006750</Text>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
        <MaterialIcons name='email' size={16} color='black' style={tw`mr-2`} />
        <Text>Email: support@sapo.vn</Text>
      </div>
      <Text style={tw`text-sm mt-3 mb-1`}>
        © Bản quyền thuộc về <span style={{ color: 'orange' }}>EGANY</span> |
        Cung cấp bởi <span style={{ color: 'orange' }}>Sapo</span>
      </Text>
      <List.Section title='' style={{ backgroundColor: '#ebebeb' }}>
        <List.Accordion
          title='CHÍNH SÁCH'
          titleStyle={{ fontWeight: 'bold' }}
          style={{
            backgroundColor: '#ebebeb',
            borderColor: '#ebebeb',
          }}
          theme={{
            colors: {
              primary: '#FFA500', // Màu của tiêu đề khi accordion được mở
            },
          }}
        >
          <List.Item title='Bảo hành sản phẩm' titleStyle={{ fontSize: 14 }} />
          <List.Item
            title='Chính sách bán hàng'
            titleStyle={{ fontSize: 14 }}
          />
          <List.Item
            title='Chính sách giao hàng'
            titleStyle={{ fontSize: 14 }}
          />
          <List.Item title='Chính sách đổi trả' titleStyle={{ fontSize: 14 }} />
        </List.Accordion>

        <List.Accordion
          title='HỖ TRỢ KHÁCH HÀNG'
          titleStyle={{ fontWeight: 'bold' }}
          expanded={expanded}
          onPress={handlePress}
          style={{
            backgroundColor: '#ebebeb',
            borderColor: '#ebebeb',
          }}
          theme={{
            colors: {
              primary: '#FFA500', // Màu của tiêu đề khi accordion được mở
            },
          }}
        >
          <List.Item title='Điều khoản dịch vụ' titleStyle={{ fontSize: 14 }} />
          <List.Item title='Hệ thống cửa hàng' titleStyle={{ fontSize: 14 }} />
          <List.Item title='Câu hỏi thường gặp' titleStyle={{ fontSize: 14 }} />
          <List.Item title='Liên hệ' titleStyle={{ fontSize: 14 }} />
        </List.Accordion>
      </List.Section>
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
          ĐĂNG KÝ NHẬN TIN
        </Text>
        <Text>Bạn có muốn nhận khuyến mãi đặc biệt? Đăng ký ngay.</Text>
        <TextInput
          label='Nhập địa chỉ email..'
          right={<TextInput.Icon icon='mail' />}
          style={{
            backgroundColor: '#f0f0f0',
            borderRadius: 8,
            padding: 10,
            marginTop: 16,
            fontSize: 14,
          }}
          theme={{
            colors: {
              primary: '#000',
              background: '#f0f0f0',
              placeholder: '#888',
            },
          }}
        />
      </View>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          marginTop: 25,
          marginBottom: 30,
        }}
      >
        <View>
          <Image source={require('../../assets/images/facebook.png')} />
        </View>
        <View>
          <Image source={require('../../assets/images/zalo.png')} />
        </View>
        <View>
          <Image source={require('../../assets/images/instagram.png')} />
        </View>
        <View>
          <Image source={require('../../assets/images/youtube.png')} />
        </View>
        <View>
          <Image source={require('../../assets/images/tiktok.png')} />
        </View>
      </div>
      <div>
        <View>
          <Image source={require('../../assets/images/shipping.png')} />
        </View>
      </div>
    </div>
  );
};

export default Footer;
