import React, {useState, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useWindowDimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LvlSelectionScreen = ({navigation}) => {
  const {height, width} = useWindowDimensions();

  const [Lvl2Anlock, setLvl2Anlock] = useState(false);
  const [Lvl3Anlock, setLvl3Anlock] = useState(false);
  const [Lvl4Anlock, setLvl4Anlock] = useState(false);
  const [Lvl5Anlock, setLvl5Anlock] = useState(false);
  const [Lvl6Anlock, setLvl6Anlock] = useState(false);
  const [Lvl7Anlock, setLvl7Anlock] = useState(false);
  const [Lvl8Anlock, setLvl8Anlock] = useState(false);
  const [Lvl9Anlock, setLvl9Anlock] = useState(false);
  const [Lvl10Anlock, setLvl10Anlock] = useState(false);

  useEffect(() => {
    getDataAbout2Lvl();
    getDataAbout3Lvl();
    getDataAbout4Lvl();
    getDataAbout5Lvl();
    getDataAbout6Lvl();
    getDataAbout7Lvl();
    getDataAbout8Lvl();
    getDataAbout9Lvl();
    getDataAbout10Lvl();
  }, []);

  const getDataAbout2Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Lvl1');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvl2Anlock(parsedData.Lvl2Anlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getDataAbout3Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Lvl2');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvl3Anlock(parsedData.Lvl3Anlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getDataAbout4Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Lvl3');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvl4Anlock(parsedData.Lvl4Anlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getDataAbout5Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Lvl4');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvl5Anlock(parsedData.Lvl5Anlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getDataAbout6Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Lvl5');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvl6Anlock(parsedData.Lvl6Anlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getDataAbout7Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Lvl6');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvl7Anlock(parsedData.Lvl7Anlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getDataAbout8Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Lvl7');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvl8Anlock(parsedData.Lvl8Anlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getDataAbout9Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Lvl8');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvl9Anlock(parsedData.Lvl9Anlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getDataAbout10Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Lvl9');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvl10Anlock(parsedData.Lvl10Anlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/backgr.jpg')}
        style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            marginTop: 70,
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
                  width: width * 0.9,
                  height: 300,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: '#fff',
                  borderRadius: 30,
                  alignItems: 'center',
                  //justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Image
                  source={require('../assets/lvlsBcgr/first.jpeg')}
                  style={{
                    height: 255,
                    width: width * 0.9 - 4,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                  }}
                />
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
                disabled={Lvl2Anlock ? false : true}
                onPress={() => {
                  navigation.navigate('Lvl2');
                }}
                style={{
                  width: width * 0.9,
                  height: 300,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: Lvl2Anlock ? '#fff' : 'grey',
                  borderRadius: 30,
                  alignItems: 'center',
                  //justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Image
                  source={require('../assets/lvlsBcgr/first1.jpeg')}
                  style={{
                    height: 255,
                    width: width * 0.9 - 4,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                  }}
                />
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                    color: Lvl2Anlock ? '#ed9b01' : 'grey',
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
                disabled={Lvl3Anlock ? false : true}
                onPress={() => {
                  navigation.navigate('Lvl3');
                }}
                style={{
                  width: width * 0.9,
                  height: 300,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: Lvl3Anlock ? '#fff' : 'grey',
                  borderRadius: 30,
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Image
                  source={require('../assets/lvlsBcgr/second.jpeg')}
                  style={{
                    height: 255,
                    width: width * 0.9 - 4,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                  }}
                />
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                    color: Lvl3Anlock ? '#ed9b01' : 'grey',
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
                disabled={Lvl4Anlock ? false : true}
                onPress={() => {
                  navigation.navigate('Lvl4');
                }}
                style={{
                  width: width * 0.9,
                  height: 300,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: Lvl4Anlock ? '#fff' : 'grey',
                  borderRadius: 30,
                  alignItems: 'center',
                  //justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Image
                  source={require('../assets/lvlsBcgr/second1.jpg')}
                  style={{
                    height: 255,
                    width: width * 0.9 - 4,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                  }}
                />
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                    color: Lvl4Anlock ? '#ed9b01' : 'grey',
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
                disabled={Lvl5Anlock ? false : true}
                onPress={() => {
                  navigation.navigate('Lvl5');
                }}
                style={{
                  width: width * 0.9,
                  height: 300,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: Lvl5Anlock ? '#ed9b01' : 'grey',
                  borderRadius: 30,
                  alignItems: 'center',
                  //justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Image
                  source={require('../assets/lvlsBcgr/fird.jpg')}
                  style={{
                    height: 255,
                    width: width * 0.9 - 4,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                  }}
                />
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                    color: Lvl5Anlock ? '#ed9b01' : 'grey',
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
                disabled={Lvl6Anlock ? false : true}
                onPress={() => {
                  navigation.navigate('Lvl6');
                }}
                style={{
                  width: width * 0.9,
                  height: 300,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: Lvl6Anlock ? '#fff' : 'grey',
                  borderRadius: 30,
                  alignItems: 'center',
                  //justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Image
                  source={require('../assets/lvlsBcgr/fird1.jpeg')}
                  style={{
                    height: 255,
                    width: width * 0.9 - 4,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                  }}
                />
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                    color: Lvl6Anlock ? '#ed9b01' : 'grey',
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
                disabled={Lvl7Anlock ? false : true}
                onPress={() => {
                  navigation.navigate('Lvl7');
                }}
                style={{
                  width: width * 0.9,
                  height: 300,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: Lvl7Anlock ? '#fff' : 'grey',
                  borderRadius: 30,
                  alignItems: 'center',
                  //justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Image
                  source={require('../assets/lvlsBcgr/four.webp')}
                  style={{
                    height: 255,
                    width: width * 0.9 - 4,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                  }}
                />
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                    color: Lvl7Anlock ? '#ed9b01' : 'grey',
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
                disabled={Lvl8Anlock ? false : true}
                onPress={() => {
                  navigation.navigate('Lvl8');
                }}
                style={{
                  width: width * 0.9,
                  height: 300,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: Lvl8Anlock ? '#fff' : 'grey',
                  borderRadius: 30,
                  alignItems: 'center',
                  //justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Image
                  source={require('../assets/lvlsBcgr/four1.jpeg')}
                  style={{
                    height: 255,
                    width: width * 0.9 - 4,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                  }}
                />
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                    color: Lvl8Anlock ? '#ed9b01' : 'grey',
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
                disabled={Lvl9Anlock ? false : true}
                onPress={() => {
                  navigation.navigate('Lvl9');
                }}
                style={{
                  width: width * 0.9,
                  height: 300,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: Lvl9Anlock ? '#fff' : 'grey',
                  borderRadius: 30,
                  alignItems: 'center',
                  //justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Image
                  source={require('../assets/lvlsBcgr/five.jpeg')}
                  style={{
                    height: 255,
                    width: width * 0.9 - 4,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                  }}
                />
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                    color: Lvl9Anlock ? '#ed9b01' : 'grey',
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
                disabled={Lvl10Anlock ? false : true}
                onPress={() => {
                  navigation.navigate('Lvl10');
                }}
                style={{
                  width: width * 0.9,
                  height: 300,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: Lvl10Anlock ? '#fff' : 'grey',
                  borderRadius: 30,
                  alignItems: 'center',
                  //justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Image
                  source={require('../assets/lvlsBcgr/five1.jpeg')}
                  style={{
                    height: 255,
                    width: width * 0.9 - 4,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                  }}
                />
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                    color: Lvl10Anlock ? '#ed9b01' : 'grey',
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

export default LvlSelectionScreen;
