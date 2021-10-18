import React, { useState } from 'react'
import { View, Button, Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

const App = () => {
  const [show, setShow] = useState(false)

  const onChange = () => {
    setShow(Platform.OS === 'ios')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View>
        <Button onPress={() => setShow(true)} title="Show date picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode="datetime"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  )
}

export default App
