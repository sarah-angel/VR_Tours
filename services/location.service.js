//Checks if there are any transitions or tooltips for a give location
//and returns them

import {locations} from '../consts/locations'

// function getListTooltips( location ) {
//     if (
//         locations[`${location}`] &&
//         locations[`${location}`].tooltips &&
//         locations[`${location}`].tooltips.length &&
//         locations[`${location}`].tooltips.length > 0
//     ){
//         return locations[`${location}`].tooltips
//     }
//     return []
// }

// function getListTransitions( location ) {
//     if (
//         locations[`${location}`] &&
//         locations[`${location}`].transitions &&
//         locations[`${location}`].transitions.length &&
//         locations[`${location}`].transitions.length > 0
//     ){
//         return locations[`${location}`].transitions
//     }
//     return []
// }

import {locationz} from '../consts/locations'

function getListTooltips( location ) {
    var tooltips = []
    locations.forEach(loc => {
        if(loc.name == location && loc.tooltips && loc.tooltips.length && loc.tooltips.length > 0){
            tooltips = loc.tooltips
            return false
        }
            
    });
    
    return tooltips
}

function getListTransitions( location ) {

   var transitions = []
    locations.forEach(loc => {
        if(loc.name == location && loc.transitions && loc.transitions.length && loc.transitions.length > 0){
            transitions = loc.transitions
            return false
        }
            
    });
    
    return transitions
}

export { getListTooltips, getListTransitions }