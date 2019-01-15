import { createStackNavigator  } from 'react-navigation';
import HomePage from '../page/HomePage';
import Flex from '../page/components/Layout/Flex/FlexExample';
import WingBlank from '../page/components/Layout/WingBlank/WingBlankExample';
import WhiteSpace from '../page/components/Layout/WhiteSpace/WhiteSpaceExample';


export const AppStackNavigator = createStackNavigator({
    HomePage:{
        screen: HomePage
    },
    Flex:{
        screen: Flex,
        navigationOptions:({navigation}) =>({
            title: `${navigation.state.params.name}`
        })
    },
    WingBlank:{
        screen: WingBlank,
        navigationOptions:({navigation}) =>({
            title: `${navigation.state.params.name}`
        })
    },
    WhiteSpace:{
        screen: WhiteSpace,
        navigationOptions:({navigation}) =>({
            title: `${navigation.state.params.name}`
        })
    },
})
