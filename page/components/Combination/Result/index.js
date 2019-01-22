import Result from './Result';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Result_ = { screen: Result, navigationOptions: Title };