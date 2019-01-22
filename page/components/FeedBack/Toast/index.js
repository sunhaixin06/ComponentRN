import Toast from './Toast';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Toast_ = { screen: Toast, navigationOptions: Title };