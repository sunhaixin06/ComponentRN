import Progress from './Progress';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Progress_ = { screen: Progress, navigationOptions: Title };