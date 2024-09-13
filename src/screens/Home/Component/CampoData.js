// DatePickerComponent.js
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

const DatePickerComponent = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [formattedDate, setFormattedDate] = useState(format(date, 'MMMM dd, yyyy')); 


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); 
    setDate(currentDate);
    setFormattedDate(format(currentDate, 'MMMM dd, yyyy'));
  };

 
  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDatepicker} style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={formattedDate}
          editable={false} // Campo não editável
          placeholder="Selecione uma data"
        />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginTop: 40
  },
  inputContainer: {
    width: 320,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    padding: 10,
    textAlign: 'center',
    color: 'black'
  },
});

export default DatePickerComponent;
