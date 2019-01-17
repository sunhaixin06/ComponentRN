import { createStackNavigator  } from 'react-navigation';
import HomePage from '../page/HomePage';
//Layout
import Flex from '../page/components/Layout/Flex/Flex';
import WingBlank from '../page/components/Layout/WingBlank/WingBlank';
import WhiteSpace from '../page/components/Layout/WhiteSpace/WhiteSpace';

//Navigation
import Drawer from '../page/components/Navigation/Drawer/Drawer'; 
import Tabs from '../page/components/Navigation/Tabs/Tabs'; 
import TabBar from '../page/components/Navigation/TabBar/TabBar'; 
import Popover from '../page/components/Navigation/Popover/Popover'; 
import Pagination from '../page/components/Navigation/Pagination/Pagination'; 
import SegmentedControl from '../page/components/Navigation/SegmentedControl/SegmentedControl'; 


const router = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const AppStackNavigator = createStackNavigator({
    HomePage:{
        screen: HomePage
    },
    //Layout
    Flex:{
        screen: Flex,
        navigationOptions: router
    },
    WingBlank:{
        screen: WingBlank,
        navigationOptions: router
    },
    WhiteSpace:{
        screen: WhiteSpace,
        navigationOptions: router
    },
    //Navigation
    Drawer:{
        screen: Drawer,
        navigationOptions: router
    },
    Popover:{
        screen: Popover,
        navigationOptions: router
    },
    Popover:{
        screen: Popover,
        navigationOptions: router
    },
    Pagination:{
        screen: Pagination,
        navigationOptions: router
    },
    SegmentedControl:{
        screen: SegmentedControl,
        navigationOptions: router
    },
    Tabs:{
        screen: Tabs,
        navigationOptions: router
    },
    TabBar:{
        screen: TabBar,
        navigationOptions: router
    }}, {
    defaultNavigationOptions: {
        // header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    }
})
