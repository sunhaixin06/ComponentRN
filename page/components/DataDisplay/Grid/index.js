import Grid from './Grid';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Grid_ = { screen: Grid, navigationOptions: Title };