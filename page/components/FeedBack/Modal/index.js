import Modal from './Modal';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Modal_ = { screen: Modal, navigationOptions: Title };