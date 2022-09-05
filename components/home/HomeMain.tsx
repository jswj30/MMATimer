import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Pressable} from 'react-native';

const HomeMain = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 30}}>
        {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
        {('0' + Math.floor((time / 1000) % 60)).slice(-2)}:
        {('0' + ((time / 10) % 100)).slice(-2)}
      </Text>
      <Text></Text>
      <Pressable onPress={() => setRunning(true)}>
        <Text>Start</Text>
      </Pressable>
      <Pressable onPress={() => setRunning(false)}>
        <Text>Stop</Text>
      </Pressable>
      <Pressable onPress={() => setTime(0)}>
        <Text>Reset</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeMain;
