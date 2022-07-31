import React, {useState} from 'react';
import {StyleSheet, Text, View, NativeModules} from 'react-native';
import {Button, Gap, Header} from '../../components';
import {Colors, Fonts} from '../../const';

const {MyModule} = NativeModules;

const Device = ({navigation}) => {
  const [deviceId, setDeviceId] = useState('');

  const goBack = () => navigation.goBack();

  const onGetDeviceId = () => {
    MyModule.getDeviceId(res => setDeviceId(res));
  };

  return (
    <View style={styles.container}>
      <Header label="Device Id" onBack={goBack} />
      <View style={styles.content}>
        <Text style={styles.title}>
          Device Id: <Text style={styles.value}>{deviceId}</Text>
        </Text>
        <Gap height={32} />
        <Button text="GET DEVICE ID" onPress={onGetDeviceId} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  content: {padding: 16},
  title: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    color: Colors.black,
    fontSize: 16
  },
  value: {
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 14
  }
});

export default Device;
