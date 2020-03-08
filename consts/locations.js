//these should come from a database
import {NativeModules} from 'react-360'

//const Location = NativeModules.Location


console.log("hello locations")
//console.log(Location.search)

//Get value of tourId param from url
function getTourParameter(){
    let url = window.location.href
    let name = 'tourID'
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url)
    if(!results) return null
    if(!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

const tourID = getTourParameter()
console.log(tourID)

const locations = [
    {
        name: 'PopudrenkoPark',
        img: 'popudrenko_park.jpg',
        transitions: [
            {
                width: 50,
                height: 50,
                yaw: 11.2,
                pitch: 0,
                goesTo: 'CityCenter',
            },
        ],
        tooltips: [
            {
                width: 35,
                height: 35,
                yaw: 14.32,
                pitch: 0.1,
                text: 'Chernihiv National Bank',
                img: 'national_bank.jpg'
            }
        ]
    },
    {
        name: 'CityCenter',
        img: 'city_center.jpg',
        tooltips: [
            {
                width: 50,
                height: 50,
                yaw: 10.3,
                pitch: 0.1,
                text: 'Chernihiv Regional Youth Center',
                img: 'youth_center.jpg'
            },
            {
                width: 50,
                height: 50,
                yaw: 6.7,
                pitch: 0.16,
                text: 'Chernihiv Regional Academic Ukrainian Drama Theater named after Taras Shevchenko',
                img: 'shevchenko_theatre.jpg',
            }
        ],
        transitions: [
            {
                width: 50,
                height: 50,
                yaw: 3.4,
                pitch: 0.09,
                goesTo: 'PopudrenkoPark',
            }
        ]
    },
    
]

export { locations }