import { AppRegistry } from 'react-native';
import Dylphin from '@dymp/dylphin-rn';
import App from './src/App';
import { name as appName } from './dyminiapp.json';

Dylphin.registerCallableModule();
AppRegistry.registerComponent(appName, () => App);
