import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '../store';
import { useAppDispatch } from '../hooks';
import { setAppConfig } from '../store/slices';
import { useGetConfigQuery } from '../store/api';
import SplashScreen from 'react-native-splash-screen';
import useTheme from '../hooks/useTheme';

const Test = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetConfigQuery({});
  const { theme, baseTheme } = useTheme();

  useEffect(() => {
    if (data) dispatch(setAppConfig(data));
  }, [data])

  useEffect(() => {
    if (!isLoading) SplashScreen.hide();
  }, [isLoading])

  useEffect(() => {
    console.log(theme, baseTheme);
  }, [theme, baseTheme]);

  return (
    <Text style={{ fontFamily: "Poppins-Black", fontSize: 50 }}>{theme}</Text>
  )
}

function App() {
  return (
    <Provider store={store}>
      <Test />
    </Provider>
  )
}

export default App;
