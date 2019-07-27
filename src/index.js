// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import domUpdates from './domUpdates'
import User from '../src/User.js';
import Bookings from '../src/Bookings.js';
import Rooms from '../src/Rooms.js';
import RoomService from '../src/RoomService.js';
import DOMupdates from '../src/DOMupdates.js';


let usersSampleData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
.then(response => response.json()) 
.then(result => result.users)
console.log(usersSampleData)

let roomsSampleData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
  .then(response => response.json())
  .then(result => result.rooms)
  .catch(err => console.error(err));
  console.log(roomsSampleData)
  

let roomServiceSampleData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices')
  .then(response => response.json())
  .then(result => result.roomService)
  .catch(err => console.error(err));
  console.log(roomServiceSampleData)

let bookingsSampleData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
  .then(response => response.json())
  .then(result => result.bookings)
  .catch(err => console.error(err));
  console.log(bookingsSampleData)
  

  

domUpdates.displayToday();

