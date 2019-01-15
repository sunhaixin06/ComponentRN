import { createStackNavigator  } from 'react-navigation';
import HomePage from '../page/HomePage';
import Page1 from '../page/Page1';

export const AppStackNavigator = createStackNavigator({
    HomePage:{
        screen: HomePage,
        // navigationOptions:({navigation}) =>({
        //     title: "支付宝RN组件库"
        // })
    },
    Page1:{
        screen: Page1,
        navigationOptions:({navigation}) =>({
            title: `${navigation.state.params.name}`
        })
    },
})
