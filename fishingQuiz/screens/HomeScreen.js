import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useWindowDimensions} from 'react-native';

const HomeScreen = ({navigation}) => {
  const {height, width} = useWindowDimensions();
  console.log(height, width);

  return (
    <View style={{flex: 1}}>
      <ImageBackground source={require('../assets/bgr.png')} style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LvlSelectionScreen');
            }}>
            <Text
              style={{
                fontSize: 100,
                fontFamily: 'Chewy-Regular',
                color: '#ed9b01',
                shadowColor: '#ed9b01',
                shadowOffset: {width: 0, height: 18},
                shadowOpacity: 0.9,
                shadowRadius: 10,
              }}>
              Game
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RulsScreen');
            }}>
            <Text
              style={{
                fontSize: 100,
                fontFamily: 'Chewy-Regular',
                color: '#ee9b01',
                shadowColor: '#ed9b01',
                shadowOffset: {width: 0, height: 18},
                shadowOpacity: 0.9,
                shadowRadius: 20,
              }}>
              Rules
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
