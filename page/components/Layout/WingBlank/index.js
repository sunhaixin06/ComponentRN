import WingBlank from './WingBlank';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const WingBlank_ = { screen: WingBlank, navigationOptions: Title };