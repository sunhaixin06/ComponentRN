import Tag from './Tag';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Tag_ = { screen: Tag, navigationOptions: Title };