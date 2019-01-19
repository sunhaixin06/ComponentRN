import TextareaItem from './TextareaItem';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const TextareaItem_ = { screen: TextareaItem, navigationOptions: Title };