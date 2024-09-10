import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import tw from 'tailwind-react-native-classnames';
import { Video } from 'expo-av'; // Sử dụng Video từ 'expo-av'

const Introduction = () => {
  const videoRef = useRef<Video>(null);
  const background = require('../../../assets/videos/introduce.mp4');
  const [isPlaying, setIsPlaying] = useState(false); // Kiểm tra trạng thái video
  const [showControls, setShowControls] = useState(true); // Kiểm tra trạng thái hiển thị icon play và thumbnail

  const handlePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        await videoRef.current.pauseAsync();
        setShowControls(true); // Hiển thị lại icon và thumbnail khi video tạm dừng
      } else {
        await videoRef.current.playAsync();
        setShowControls(false); // Ẩn icon và thumbnail khi video chạy
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          style={styles.video}
          source={background}
          useNativeControls
          shouldPlay={false} // Không tự động phát
          onPlaybackStatusUpdate={(status: any) => {
            if (status.didJustFinish) {
              setShowControls(true); // Hiển thị lại icon và thumbnail khi video kết thúc
              setIsPlaying(false); // Cập nhật trạng thái phát lại
            }
          }}
        />
        {showControls && (
          <View style={styles.overlay}>
            <Image
              source={require('../../../assets/images/thumbnail.jpg')}
              style={styles.thumbnail}
            />
            <TouchableOpacity
              onPress={handlePlayPause}
              style={styles.playButton}
            >
              <Image
                source={require('../../../assets/images/youtube.png')}
                style={styles.playIcon}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={tw`flex-col`}>
        <Text style={tw`text-xl font-medium mt-4`}>EGA LUXURY</Text>
        <Text style={tw` text-gray-500 text-sm my-2`}>
          Toả sáng và nâng tầm đẳng cấp với EGA LUXURY
        </Text>
        <Button
          mode='outlined'
          style={{
            borderRadius: 2,
            width: '70%',
            display: 'flex',
            marginTop: 0,
            marginBottom: 30,
            borderWidth: 1,
            borderColor: '#e8e8e2',
            backgroundColor: 'black',
          }}
          labelStyle={{ color: '#fff', fontWeight: '500', letterSpacing: 4 }}
        >
          Khám phá ngay
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    marginVertical: 20,
    position: 'relative',
  },
  video: {
    flex: 1,
    width: '99%',
    height: 200,
    borderRadius: 16,
  },
  overlay: {
    position: 'absolute',
    // position: 'relative',
    top: 0,
    left: 0,
    width: '99%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  playButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    width: 60,
    height: 60,
  },
});

export default Introduction;
