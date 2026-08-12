import { AppRegistry } from 'react-native';
import App from '../App';

AppRegistry.registerComponent('kisaanu', () => App);
AppRegistry.runApplication('kisaanu', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
