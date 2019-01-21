import Icon from './Icon';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Icon_ = { screen: Icon, navigationOptions: Title };