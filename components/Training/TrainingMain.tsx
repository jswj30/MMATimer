import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const TrainingMain = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Training</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TrainingMain;
