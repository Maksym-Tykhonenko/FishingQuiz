import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useWindowDimensions} from 'react-native';

const LvlSelectionScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={require('../assets/bgr.png')} style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            marginTop: 50,
            position: 'relative',
            alignItems: 'center',
          }}>
          <View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {/**1 LVL */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Lvl1');
                }}
                style={{
                  width: 300,
                  height: 60,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: '#fff',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                    color: '#ed9b01',
                    shadowColor: '#ed9b01',
                    shadowOffset: {width: 0, height: 10},
                    shadowOpacity: 0.9,
                    shadowRadius: 10,
                  }}>
                  1 Lvl
                </Text>
              </TouchableOpacity>

              {/**2 LVL */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Lvl2');
                }}
                style={{
                  width: 300,
                  height: 60,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: '#fff',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                    color: '#ed9b01',
                    shadowColor: '#ed9b01',
                    shadowOffset: {width: 0, height: 10},
                    shadowOpacity: 0.9,
                    shadowRadius: 10,
                  }}>
                  2 Lvl
                </Text>
              </TouchableOpacity>

              {/**3 LVL */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Lvl3');
                }}
                style={{
                  width: 300,
                  height: 60,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: '#fff',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                    color: '#ed9b01',
                    shadowColor: '#ed9b01',
                    shadowOffset: {width: 0, height: 10},
                    shadowOpacity: 0.9,
                    shadowRadius: 10,
                  }}>
                  3 Lvl
                </Text>
              </TouchableOpacity>

              {/**4 LVL */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Lvl4');
                }}
                style={{
                  width: 300,
                  height: 60,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: '#fff',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                    color: '#ed9b01',
                    shadowColor: '#ed9b01',
                    shadowOffset: {width: 0, height: 10},
                    shadowOpacity: 0.9,
                    shadowRadius: 10,
                  }}>
                  4 Lvl
                </Text>
              </TouchableOpacity>

              {/**5 LVL */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Lvl5');
                }}
                style={{
                  width: 300,
                  height: 60,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: '#fff',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                    color: '#ed9b01',
                    shadowColor: '#ed9b01',
                    shadowOffset: {width: 0, height: 10},
                    shadowOpacity: 0.9,
                    shadowRadius: 10,
                  }}>
                  5 Lvl
                </Text>
              </TouchableOpacity>

              {/**6 LVL */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Lvl6');
                }}
                style={{
                  width: 300,
                  height: 60,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: '#fff',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                    color: '#ed9b01',
                    shadowColor: '#ed9b01',
                    shadowOffset: {width: 0, height: 10},
                    shadowOpacity: 0.9,
                    shadowRadius: 10,
                  }}>
                  6 Lvl
                </Text>
              </TouchableOpacity>

              {/**7 LVL */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Lvl7');
                }}
                style={{
                  width: 300,
                  height: 60,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: '#fff',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                    color: '#ed9b01',
                    shadowColor: '#ed9b01',
                    shadowOffset: {width: 0, height: 10},
                    shadowOpacity: 0.9,
                    shadowRadius: 10,
                  }}>
                  7 Lvl
                </Text>
              </TouchableOpacity>

              {/**8 LVL */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Lvl8');
                }}
                style={{
                  width: 300,
                  height: 60,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: '#fff',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                    color: '#ed9b01',
                    shadowColor: '#ed9b01',
                    shadowOffset: {width: 0, height: 10},
                    shadowOpacity: 0.9,
                    shadowRadius: 10,
                  }}>
                  8 Lvl
                </Text>
              </TouchableOpacity>

              {/**9 LVL */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Lvl9');
                }}
                style={{
                  width: 300,
                  height: 60,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: '#fff',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                    color: '#ed9b01',
                    shadowColor: '#ed9b01',
                    shadowOffset: {width: 0, height: 10},
                    shadowOpacity: 0.9,
                    shadowRadius: 10,
                  }}>
                  9 Lvl
                </Text>
              </TouchableOpacity>

              {/**10 LVL */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Lvl10');
                }}
                style={{
                  width: 300,
                  height: 60,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: '#fff',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                    color: '#ed9b01',
                    shadowColor: '#ed9b01',
                    shadowOffset: {width: 0, height: 10},
                    shadowOpacity: 0.9,
                    shadowRadius: 10,
                  }}>
                  10 Lvl
                </Text>
              </TouchableOpacity>
              <View style={{height: 100}}></View>
            </ScrollView>
          </View>

          {/**BTN BACK */}
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

export default LvlSelectionScreen;
