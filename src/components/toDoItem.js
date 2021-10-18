import React from 'react';
import { Text } from 'react-native';

const ToDoItemComponent = (props) => {
  return (
    <Text>{props.text}</Text>
  )
}

export default ToDoItemComponent;