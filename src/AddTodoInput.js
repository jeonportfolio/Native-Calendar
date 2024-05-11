import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { bottomSpace, ITEM_WIDTH } from './util';

export default ({
  value,
  onChangeText,
  placeholder,
  onPressAdd,
  onSubmitEditing,
  onFocus,
}) => {
  return (
    <View style={{ 
      width: ITEM_WIDTH,
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center",
    }}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={{
          flex: 1, //padding값도 계산해주기 위함 
          padding: 5,
          color: "#595959",
        }}
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit={false} //입력 완료후에도 키보드가 내려가지 않음 
        onFocus={onFocus} //
      />
      <TouchableOpacity onPress={onPressAdd} style={{ padding: 5 }}>
        <AntDesign name="plus" size={18} color="#595959" />
      </TouchableOpacity>
    </View>
  );
};