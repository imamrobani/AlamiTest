import React, {useEffect, useRef, useState} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {Header} from '../../components';
import {Colors, Fonts} from '../../const';

const DURATION = 10000;

const ProgressBarScreen = ({navigation}) => {
  const progress = useRef(new Animated.Value(0)).current;
  const [isFinish, setIsFinish] = useState(false);

  const isPaused = useRef(false);
  const remaining = useRef(1);

  useEffect(() => {
    start();
  }, []);

  const start = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: DURATION,
      useNativeDriver: false
    }).start(({finished}) => {
      if (finished) {
        setIsFinish(true);
      }
    });
  };

  const onPause = () => {
    isPaused.current = true;
    progress.stopAnimation((value) => {
      remaining.current = DURATION - DURATION * value;
    });
  };

  const onResume = () => {
    if (isPaused.current) {
      isPaused.current = false;
      Animated.timing(progress, {
        toValue: 1,
        duration: remaining.current,
        useNativeDriver: false
      }).start(({finished}) => {
        if (finished) {
          setIsFinish(true);
        }
      });
    }
  };

  const restart = () => {
    setIsFinish(false);
    progress.setValue(0);
    start();
  };

  const goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <Header label="Progress Bar" onBack={goBack} />
      <Text style={styles.title}>
        "hold on any screen to stop the progress bar and release to continue"
      </Text>
      <Pressable
        style={styles.container}
        onLongPress={onPause}
        onPressOut={onResume}
        delayLongPress={300}>
        {/* ANIMATION BARS */}
        <View style={styles.barContainer}>
          <View style={styles.barUnFilled}>
            {/* THE ANIMATION OF THE BAR */}
            <Animated.View style={[styles.barFilled, {flex: progress}]} />
          </View>
        </View>
        {/* END OF ANIMATION BARS */}

        {isFinish && (
          <Pressable onPress={restart} style={styles.restartContainer}>
            <Text style={styles.restart}>RESTART</Text>
          </Pressable>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    fontFamily: Fonts.INTER_REGULAR,
    color: Colors.black,
    textAlign: 'center',
    marginTop: 24,
    paddingHorizontal: 16
  },
  barContainer: {
    // flexDirection: 'row',
    marginTop: 32,
    padding: 16
  },
  barUnFilled: {
    height: 8,
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.gray300,
    marginHorizontal: 2,
    borderRadius: 6
  },
  barFilled: {
    height: 8,
    backgroundColor: Colors.purple,
    borderRadius: 6
  },
  restartContainer: {
    marginTop: 32,
    alignSelf: 'center',
    width: 110,
    padding: 4,
    borderRadius: 16,
    backgroundColor: Colors.purple
  },
  restart: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    color: Colors.white,
    textAlign: 'center'
  }
});

export default ProgressBarScreen;
