import {AppRegistry} from 'react-native';
import './i18n';
import App from './App';
import {name as appName} from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';

export default function main() {
    <PaperProvider>
    <App/>
    </PaperProvider>
}

AppRegistry.registerComponent(appName, () => App);
