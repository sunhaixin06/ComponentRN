import Button from './Button';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Button_ = { screen: Button, navigationOptions: Title };