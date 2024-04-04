import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
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
          }}>
          <View
            style={{
              flex: 1,
              marginTop: 40,
              marginBottom: 20,
              marginHorizontal: 10,
              padding: 5,
              borderWidth: 2,
              borderColor: '#fff',
              borderRadius: 20,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}>
            <ScrollView>
              <View style={{height: 20}}></View>
              <Text
                style={{
                  fontSize: 35,
                  fontFamily: 'Chewy-Regular',
                  color: '#ed9b01',
                }}>
                {'   '}
                Welcome to 'Fishing Quiz' - an exciting fishing quiz!
              </Text>
              <Text
                style={{
                  fontSize: 35,
                  fontFamily: 'Chewy-Regular',
                  color: '#ed9b01',
                }}>
                {'   '}Rules of the game:
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: 'Chewy-Regular',
                  color: '#ed9b01',
                }}>
                {'   '}-The quiz has 10 levels, each reflecting a different
                aspect of fishing: general fishing questions, sea fishing, river
                fishing, winter fishing and boat fishing.
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: 'Chewy-Regular',
                  color: '#ed9b01',
                }}>
                {'   '}-You have a limited amount of time to answer each
                question. The time to complete each level decreases with each
                subsequent level.
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: 'Chewy-Regular',
                  color: '#ed9b01',
                }}>
                {'   '}-If you manage to answer all the questions in the
                allotted time, you go to the next level. Otherwise, you will
                need to try again.
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: 'Chewy-Regular',
                  color: '#ed9b01',
                }}>
                {'   '}-Answer the questions as quickly and accurately as
                possible to increase your chance of passing each level.
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: 'Chewy-Regular',
                  color: '#ed9b01',
                }}>
                {'   '}-Remember that each level can contain questions on any
                topic related to fishing, so be ready for any challenges!
              </Text>
              <Text
                style={{
                  fontSize: 35,
                  fontFamily: 'Chewy-Regular',
                  color: '#ed9b01',
                }}>
                {'   '}Ready to test your fishing skills? Start your 'Fishing
                Quiz' journey right now!
              </Text>
              <View style={{height: 100}}></View>
            </ScrollView>
          </View>

          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              borderWidth: 2,
              borderColor: '#fff',
              borderRadius: 20,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 10,
              shadowColor: '#fff',
              shadowOffset: {width: 0, height: 18},
              shadowOpacity: 0.9,
              shadowRadius: 20,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text
              style={{
                fontSize: 40,
                fontFamily: 'Chewy-Regular',
                color: '#ed9b01',
                shadowColor: '#ed9b01',
                shadowOffset: {width: 0, height: 18},
                shadowOpacity: 0.9,
                shadowRadius: 20,
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
