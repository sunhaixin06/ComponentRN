import DatePicker from './DatePicker';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const DatePicker_ = { screen: DatePicker, navigationOptions: Title };