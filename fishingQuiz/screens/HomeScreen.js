import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useWindowDimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {
  const {height, width} = useWindowDimensions();
  console.log(height, width);

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/backgr.jpg')}
        style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
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

          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 40,
              left: 20,
              borderWidth: 2,
              borderColor: '#fff',
              borderRadius: 20,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              alignItems: 'center',
              justifyContent: 'center',
              width: 90,
              height: 90,
              shadowColor: '#fff',
              shadowOffset: {width: 0, height: 18},
              shadowOpacity: 0.9,
              shadowRadius: 20,
            }}
            onPress={() => {
              navigation.navigate('ProfileScreen');
            }}>
            <MaterialCommunityIcons
              name="face-man"
              style={{fontSize: 70, color: '#ed9b01'}}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
