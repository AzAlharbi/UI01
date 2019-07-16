import { createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Home.js';
import LogIn from './LogIn.js';
import SignUp from './SignUp';


const Navigator = createStackNavigator({
Home: {
    screen: Home,
        navigationOptions: {
            header: null,
        },   
},
LogIn:{
    screen: LogIn,
                navigationOptions: {
                    header: null,
                },  
},
SignUp:{
    screen: SignUp,
    navigationOptions: {
        header: null,
    },  
},
});

export default createAppContainer(Navigator);