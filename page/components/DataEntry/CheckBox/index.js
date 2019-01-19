import Checkbox from './CheckBox';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Checkbox_ = { screen: Checkbox, navigationOptions: Title };