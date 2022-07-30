import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {Colors} from '../../../const';

const DURATION = 10000;

const ProgressBar = () => {
  const progress = useRef(new Animated.Value(0)).current;
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
    }).start();
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
        }
      });
    }
  };

  const restart = () => {
    progress.setValue(0);
    start();
  };

  return (
    <View>
      {/* ANIMATION BARS */}
      <View style={styles.barContainer}>
        <View style={styles.barUnFilled}>
          {/* THE ANIMATION OF THE BAR */}
          <Animated.View style={[styles.barFilled, {flex: progress}]} />
        </View>
      </View>
      {/* END OF ANIMATION BARS */}
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    padding: 16
  },
  barUnFilled: {
    height: 8,
    flexDirection: 'row',
    backgroundColor: Colors.gray300,
    marginHorizontal: 2,
    borderRadius: 6
  },
  barFilled: {
    height: 8,
    backgroundColor: Colors.purple,
    borderRadius: 6
  }
});

export default ProgressBar;
