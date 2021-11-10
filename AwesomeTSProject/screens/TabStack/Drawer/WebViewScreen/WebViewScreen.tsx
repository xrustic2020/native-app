import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import {colors} from '../../../../assets/constants/styles';

const INJECTED_JAVASCRIPT = ` document.body.style.backgroundColor = '#841584';
      setTimeout(function() { window.alert('easy window alert - HI bro :)') }, 2000);
      true; // note: this is required, or you'll sometimes get silent failures`;

const WebViewScreen = (): JSX.Element => {
  return (
    <View style={{flex: 1, paddingTop: 20, position: 'relative'}}>
      <View style={{flex: 1}} />
      <Text style={{textAlign: 'center'}}>Hello</Text>
      <WebView
        source={{uri: 'https://infinite.red'}}
        style={{marginTop: 20}}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onMessage={e => {
          console.log('onMessage event', e);
        }}
      />
    </View>
  );
};

export default WebViewScreen;
