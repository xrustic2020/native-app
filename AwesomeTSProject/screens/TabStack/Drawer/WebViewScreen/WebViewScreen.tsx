import React, {useContext} from 'react';
import {View, Text, ActivityIndicator, useWindowDimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import {colors, placeholders} from '../../../../assets/constants/styles';
import {localeContex} from '../../../../context/LocaleProvider';
import {themeContext} from '../../../../context/ThemeProvider';

import styles from './WebViewScreen.style';

const INJECTED_JAVASCRIPT = ` document.body.style.backgroundColor = '#ee82ee';    
      const nav = document.querySelector('.nav');
      const footer = document.querySelector('.footer');

      const baner = document.querySelector('.hero-home');
      const heading = document.querySelector('.h1--reversed');
      const headingParagraph = document.querySelector('.p--reversed');
      
      nav.remove();
      footer.remove();     
      setTimeout(function() {
        baner.setAttribute("style", "background-image: none; background-color: #ee82ee;");
        heading.setAttribute("style", "color: #000000");
        heading.textContent = 'Now its mine heading! Ha ha ha 😈';
        headingParagraph.setAttribute("style", "color: #000000");
      }, 2000);
      setTimeout(function() {
        window.alert('easy window alert - 😈')
      }, 5000);
      true; // note: this is required, or you'll sometimes get silent failures`;

const WebViewScreen = (): JSX.Element => {
  const {translate} = useContext(localeContex);
  const {isDarkTheme} = useContext(themeContext);
  const {height, width} = useWindowDimensions();
  const aspectRatio = height / width;
  const isPad = aspectRatio < 1.6;

  return (
    <View
      style={[styles.container, isDarkTheme && placeholders.DARK_BACKGROUND]}>
      <Text
        style={[styles.title, isDarkTheme && placeholders.WHITE_TEXT_COLOR]}>
        {translate.webViewTitle}
      </Text>
      <WebView
        source={{uri: 'https://infinite.red'}}
        // source={{html: '<h1> Heading with HTML, easy! </h1>'}}
        style={styles.webViewContainer}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onMessage={e => {
          console.log('onMessage event', e);
        }}
        startInLoadingState={true}
        renderLoading={() => (
          <View style={styles.modal}>
            <ActivityIndicator size={'large'} color={colors.WHITE} />
          </View>
        )}
        scalesPageToFit={false}
        applicationNameForUserAgent={'NativeApp / 0.7.0'}
        contentMode={isPad ? 'desktop' : 'recommended'}
        cacheMode={'LOAD_CACHE_ELSE_NETWORK'}
        textZoom={100}
        // pullToRefreshEnabled={true}
        autoManageStatusBarEnabled={false}
      />
    </View>
  );
};

export default WebViewScreen;
