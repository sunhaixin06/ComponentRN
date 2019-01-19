import InputItem from './InputItem';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const InputItem_ = { screen: InputItem, navigationOptions: Title };