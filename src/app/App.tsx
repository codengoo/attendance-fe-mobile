import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '../store';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectTheme, setAppConfig } from '../store/slices';
import { useGetConfigQuery } from '../store/api';

const Test = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetConfigQuery({});
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    if (data) dispatch(setAppConfig(data));
  }, [data])

  return (
    <Text>{theme}</Text>
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
