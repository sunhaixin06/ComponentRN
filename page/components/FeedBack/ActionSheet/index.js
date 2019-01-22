import ActionSheet from './ActionSheet';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const ActionSheet_ = { screen: ActionSheet, navigationOptions: Title };