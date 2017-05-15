import { routes, HOME } from './routes';
import { StackNavigator } from 'react-navigation';

export default StackNavigator(routes, { initialRouteName: HOME });
