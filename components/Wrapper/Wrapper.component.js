/**
 * Component to allow components, that need to know current location to share state
 */

import React from 'react'
import {asset, Environment} from 'react-360'
import {getLocations, locations} from '../../consts/locations'

const locationName = locations[0].name
const wrappers = []

//Changes state of all wrapped components and changes backgroud image
//Called from TransitionComponent
export function changeLocation(location) {
    locationName = location
    imgPath = locations.find((item) => item.name === location).img
    Environment.setBackgroundImage(asset(`./img/360/${imgPath}`))

    wrappers.forEach(update => {
        update()
    })
}

//Trying to set the initial world to the first location in the list
export function setInitialLocation(url){
    getLocations(url)
    imgPath = locations[0].img
    Environment.setBackgroundImage(asset(`./img/360/${imgPath}`))
}

export function wrap(Component) {
    return class Wrapper extends React.Component {
        state = {
            name: locationName,
        }

        componentDidMount(){
            wrappers.push(() => {
                this.setState({
                    name: locationName
                })
            })
        }

        render() {
            return <Component {...this.props} name={this.state.name} />
        }
    }
}