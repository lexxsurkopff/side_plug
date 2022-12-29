import { Side } from './side/side'
import './side/side.css'

const side = new Side ('#sidebar', {
    dashName: 'Dash Name',
    SelectedItemId: '1main',
    firstList: 'main',
    secondList: 'support',
    data1: [
        {id: '1main', value: 'random', icon: '<i class="fa-solid fa-shuffle"></i>'},
        {id: '2main', value: 'one color', icon: '<i class="fa-solid fa-eye-dropper"></i>'},
        {id: '3main', value: 'color schemes', icon: '<i class="fa-solid fa-swatchbook"></i>'},
        {id: '4main', value: 'wiki', icon: '<i class="fa-brands fa-wikipedia-w"></i>'},
        {id: '5main', value: 'something', icon: '<i class="fa-solid fa-hashtag"></i>'}
        
    ],
    data2: [
        {id: '1sup', value: 'e-mail to us', icon: '<i class="fa-solid fa-envelope"></i>'},
        {id: '2sup', value: 'contacts', icon: '<i class="fa-solid fa-map"></i>'}
    ]
})

window.s = side