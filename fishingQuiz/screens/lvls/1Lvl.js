import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Modal,
} from 'react-native';
import {useWindowDimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Lvl1 = ({navigation}) => {
  const {height, width} = useWindowDimensions();
  const [timer, setTimer] = useState(300);
  //console.log('timer: ', timer);
  const [finalTime, setFinalTime] = useState('');
  //console.log('finalTime', finalTime);
  const [isRuning, setIsRuning] = useState(false);
  //console.log('isRuning==>', isRuning);
  const [modalIsClose, setModalIsClose] = useState(true);
  const [Lvl2Anlock, setLvl2Anlock] = useState(false);

  //////////// AsyncStorage
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [Lvl2Anlock, finalTime]);

  const setData = async () => {
    try {
      const data = {
        Lvl2Anlock,
        finalTime,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem('Lvl1', jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Lvl1');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvl2Anlock(parsedData.Lvl2Anlock);
        setFinalTime(parsedData.finalTime);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  ///Timer
  //эфект обратного отщета времени
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (isRuning) {
        setTimer(prevTimer => prevTimer - 1);
      }
    }, 1000);

    if (timer === 0) {
      clearInterval(timerInterval);
      Alert.alert(
        'GAME OVER!!!',
        'Go back and try again',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Home');
            },
          },
        ],
        {cancelable: false},
      );
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [timer, isRuning]);

  //формат времени
  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  //oстановка таймера
  const handleChangeTimerRunState = () => {
    setIsRuning(!isRuning);
  };
  //////////////////////////////////////////
  //////////////////////////////////////////
  const questions = [
    {
      question:
        'What is the term for the practice of catching fish using a hook, line, and rod?',
      options: [
        '-Trawling',
        '-Spearfishing',
        '-Fly fishing',
        '-Angling',
        '-Seining',
      ],
      correctAnswer: '-Angling',
    },
    {
      question: 'Which of the following is not a commonly used fishing knot?',
      options: [
        '-Palomar knot',
        '-Clinch knot',
        '-Bowline knot',
        `-Surgeon's knot`,
        '-Improved Clinch knot',
      ],
      correctAnswer: '-Bowline knot',
    },
    {
      question:
        'What type of fishing lure is designed to mimic the movement of a wounded baitfish?',
      options: [
        '-Spinnerbait',
        '-Jig',
        '-Crankbait',
        '-Topwater lure',
        '-Soft plastic swimbait',
      ],
      correctAnswer: '-Soft plastic swimbait',
    },
    {
      question:
        'Which of the following fish is known for its migratory behavior and is highly sought after by anglers in North America during its spawning runs?',
      options: [
        '-Bluegill',
        '-Largemouth bass',
        '-Trout',
        '-Salmon',
        '-Catfish',
      ],
      correctAnswer: '-Salmon',
    },
    {
      question:
        'What is the term for the process of releasing a caught fish back into the water?',
      options: ['-Catch and release', '-Keep', '-Net', '-Land', '-Reel'],
      correctAnswer: '-Catch and release',
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  //
  const displayQuestion = () => {
    const question = questions[currentQuestionIndex];
    return (
      <View
        style={{
          flex: 1,
          marginTop: 20,
          width: width * 0.9,
          //justifyContent: 'space-between',
        }}>
        <View
          style={{
            borderWidth: 3,
            borderRadius: 15,
            borderColor: '#ed9b01',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: 'Chewy-Regular',
              //marginBottom: 20,
              color: '#ed9b01',
            }}>
            {question.question}
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            alignItems: 'center',
            borderWidth: 3,
            borderRadius: 15,
            borderColor: '#ed9b01',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
          }}>
          <ScrollView>
            {question.options.map((option, index) => (
              <TouchableOpacity
                disabled={isRuning ? false : true}
                key={index}
                onPress={() => checkAnswer(option)}>
                <Text
                  style={{
                    fontFamily: 'Chewy-Regular',
                    fontSize: 40,
                    color: '#ed9b01',
                  }}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
            <View style={{height: 100}}></View>
          </ScrollView>
        </View>
      </View>
    );
  };

  const checkAnswer = answer => {
    const question = questions[currentQuestionIndex];
    if (answer === question.correctAnswer) {
      setCorrectAnswersCount(correctAnswersCount + 1);
      Alert.alert('Correct!');
    } else {
      //Alert.alert('Incorrect answer. Try again.');
      navigation.navigate('WrongScreen');
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (correctAnswersCount === 4) {
        // Якщо всі 6 відповіді вірні
        setLvl2Anlock(true);
        setIsRuning(false);
        setFinalTime(timer);
        console.log('finalTime in IF', finalTime);
        setTimeout(() => {
          navigation.navigate('Lvl2');
        }, 1000);
      } else {
        Alert.alert('Congratulations! You have completed all questions.');
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/backgr.jpg')}
        style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            position: 'relative',
            marginTop: 30,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#ed9b01',
              fontFamily: 'Chewy-Regular',
              fontSize: 45,
              //shadowColor: '#ed9b01',
              shadowOffset: {width: 0, height: 6},
              shadowOpacity: 9,
              shadowRadius: 20,
            }}>
            Level 1
          </Text>
          {/**Timer */}
          <View style={{alignItems: 'center', marginTop: 0}}>
            <View style={{flexDirection: 'row'}}>
              {isRuning ? (
                <TouchableOpacity
                  style={{
                    marginRight: 10,
                    paddingTop: 3,
                    paddingHorizontal: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 70,
                    width: 120,
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    borderWidth: 2,
                    borderColor: '#fff',
                    borderRadius: 20,
                    shadowColor: '#fff',
                    shadowOffset: {width: 0, height: 18},
                    shadowOpacity: 0.9,
                    shadowRadius: 20,
                  }}
                  onPress={handleChangeTimerRunState}>
                  <Text
                    style={{
                      color: '#ed9b01',
                      fontFamily: 'Chewy-Regular',
                      fontSize: 45,
                      shadowColor: '#ed9b01',
                      shadowOffset: {width: 0, height: 18},
                      shadowOpacity: 0.9,
                      shadowRadius: 20,
                    }}>
                    Stop
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{
                    marginRight: 10,
                    paddingTop: 3,
                    paddingHorizontal: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 70,
                    width: 120,
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    borderWidth: 2,
                    borderColor: '#fff',
                    borderRadius: 20,
                    shadowColor: '#fff',
                    shadowOffset: {width: 0, height: 18},
                    shadowOpacity: 0.9,
                    shadowRadius: 20,
                  }}
                  onPress={handleChangeTimerRunState}>
                  <Text
                    style={{
                      color: '#ed9b01',
                      fontFamily: 'Chewy-Regular',
                      fontSize: 45,
                      shadowColor: '#ed9b01',
                      shadowOffset: {width: 0, height: 18},
                      shadowOpacity: 0.9,
                      shadowRadius: 20,
                    }}>
                    Play
                  </Text>
                </TouchableOpacity>
              )}
              <View
                style={{
                  borderColor: '#fff',
                  borderRadius: 20,
                  borderWidth: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 70,
                  width: 130,
                  shadowColor: '#fff',
                  shadowOffset: {width: 0, height: 18},
                  shadowOpacity: 0.9,
                  shadowRadius: 20,
                }}>
                <Text
                  style={{
                    fontSize: 45,
                    color: '#ed9b01',
                    fontFamily: 'Chewy-Regular',
                    shadowColor: '#ed9b01',
                    shadowOffset: {width: 0, height: 18},
                    shadowOpacity: 0.9,
                    shadowRadius: 20,
                  }}>
                  {formatTime(timer)}
                </Text>
              </View>
            </View>
          </View>

          <View style={{flex: 1, alignItems: 'center'}}>
            {displayQuestion()}
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
              navigation.navigate('Home');
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
          <Modal animationType="fade" transparent={true} visible={modalIsClose}>
            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                flex: 1,
                justifyContent: 'center',
                marginRight: '5%',
                marginLeft: '5%',
                marginVertical: '50%',
                paddingLeft: 10,
                borderRadius: 20,
                borderWidth: 2,
                borderColor: '#fff',
                shadowColor: '#fff',
                shadowOffset: {width: 0, height: 18},
                shadowOpacity: 0.9,
                shadowRadius: 20,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setModalIsClose(!modalIsClose);
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
                  General questions about fishing 1.1
                </Text>
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
                  Tab for go to game
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Lvl1;
