import ListView from './ListView';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const ListView_ = { screen: ListView, navigationOptions: Title };