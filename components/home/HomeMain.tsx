import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Pressable} from 'react-native';

const HomeMain = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval: any;
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
      <Text style={styles.timeText}>
        {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
        {('0' + Math.floor((time / 1000) % 60)).slice(-2)}:
        {('0' + ((time / 10) % 100)).slice(-2)}
      </Text>
      {/* Start 버튼 */}
      <Pressable onPress={() => setRunning(true)} style={styles.btn}>
        <Text style={styles.btnText}>Start</Text>
      </Pressable>
      {/* Stop 버튼 */}
      <Pressable onPress={() => setRunning(false)} style={styles.btn}>
        <Text style={styles.btnText}>Stop</Text>
      </Pressable>
      {/* Reset 버튼 */}
      <Pressable onPress={() => setTime(0)} style={styles.btn}>
        <Text style={styles.btnText}>Reset</Text>
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
  timeText: {
    fontSize: 60,
    marginBottom: 20,
    color: '#666666',
    fontWeight: '500',
  },
  btn: {
    backgroundColor: '#06c619',
    width: 120,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15,
  },
  btnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default HomeMain;
