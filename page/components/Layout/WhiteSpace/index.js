import WhiteSpace from './WhiteSpace';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const WhiteSpace_ = { screen: WhiteSpace, navigationOptions: Title };