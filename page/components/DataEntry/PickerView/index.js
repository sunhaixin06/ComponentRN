import PickerView from './PickerView';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const PickerView_ = { screen: PickerView, navigationOptions: Title };