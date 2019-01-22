import ActivityIndicator from './ActivityIndicator';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const ActivityIndicator_ = { screen: ActivityIndicator, navigationOptions: Title };