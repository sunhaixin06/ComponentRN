import { createStackNavigator  } from 'react-navigation';
import HomePage from '../page/HomePage';
import { routers } from '../page/components';

export const AppStackNavigator = createStackNavigator({
    HomePage:{ screen: HomePage },
    //Layout 
    Flex: routers.Flex_,
    WingBlank: routers.WingBlank_,
    WhiteSpace: routers.WhiteSpace_,
    //Navigation
    Drawer: routers.Drawer_,
    Popover: routers.Popover_,
    Pagination: routers.Pagination_,
    SegmentedControl: routers.SegmentedControl_,
    Tabs: routers.Tabs_,
    TabBar: routers.TabBar_,
    //DataEntry
    Button: routers.Button_,
    Checkbox: routers.Checkbox_,
    DatePicker: routers.DatePicker_,
    DatePickerView: routers.DatePickerView_,
    InputItem: routers.InputItem_,
    PickerView: routers.PickerView_,
    Radio: routers.Radio_,
    Switch: routers.Switch_,
    Stepper: routers.Stepper_,
    Slider: routers.Slider_,
    SearchBar: routers.SearchBar_,
    TextareaItem: routers.TextareaItem_,
    //DataDisplay
    Accordion: routers.Accordion_,
    Badge: routers.Badge_,
    Card: routers.Card_,
    Icon: routers.Icon_,
    Grid: routers.Grid_,
    Carousel: routers.Carousel_
},{
    defaultNavigationOptions: {
        // header: null,
        // 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    }
})
