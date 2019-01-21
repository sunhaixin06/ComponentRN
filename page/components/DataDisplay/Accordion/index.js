import Accordion from './Accordion';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Accordion_ = { screen: Accordion, navigationOptions: Title };