import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useWindowDimensions} from 'react-native';

const RulsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={require('../assets/bgr.png')} style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Rulse Screen</Text>

          <TouchableOpacity
            style={{position: 'absolute', bottom: 10, right: 10}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text
              style={{
                fontSize: 40,
                fontFamily: 'Chewy-Regular',
                color: '#fff',
                shadowColor: '#fff',
                shadowOffset: {width: 0, height: 18},
                shadowOpacity: 0.9,
                shadowRadius: 10,
              }}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RulsScreen;
