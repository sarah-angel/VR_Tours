import React from 'react';
import {
  AppRegistry,
  asset,
  NativeModules,
  StyleSheet,
  Image,
  Text,
  View,
  VrButton,
} from 'react-360';

import {wrap, setInitialLocation} from './components/Wrapper/Wrapper.component'
import TooltipComponent from './components/Tooltip/Tooltip.component'
import TransitionComponent from './components/Transition/Transition.component'

export default class MainComponent extends React.Component {
  componentDidMount(){
    setInitialLocation()
    console.log(NativeModules.Location.search)
  }
  
  render() {
    NativeModules.TooltipModule.setTooltips(this.props.name)
    NativeModules.TransitionModule.setTooltips(this.props.name)
    return <View/>
  }
};

window.location.href
AppRegistry.registerComponent('MainComponent', () => wrap(MainComponent));
AppRegistry.registerComponent('TooltipComponent', () => wrap(TooltipComponent))
AppRegistry.registerComponent('TransitionComponent', () => wrap(TransitionComponent))