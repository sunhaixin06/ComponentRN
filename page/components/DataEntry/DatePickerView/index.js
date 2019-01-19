import DatePickerView from './DatePickerView';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const DatePickerView_ = { screen: DatePickerView, navigationOptions: Title };