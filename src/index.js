// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

import domUpdates from './domUpdates'
import './images/overlookHotelRoomView.svg'
import './images/overlookHotel.svg'
import './images/calendar.svg'

import User from '../src/User.js';
import Bookings from '../src/Bookings';
import Rooms from '../src/Rooms.js';
import RoomService from '../src/RoomService';
import DOMupdates from '../src/DOMupdates.js';
import bookingsSampleData from '../src/data/bookingSampleData.js';

let user;
let bookings;
let userSampleData;
let roomServiceSampleData;
let roomSampleData;
let bookingsSampleData;

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users')
  .then(response => response.json())
  .then(result => userSampleData = result.users)
  .catch(err => console.error(err));

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms')
  .then(response => response.json())
  .then(result => roomsSampleData = result.rooms)
  .catch(err => console.error(err));

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices')
  .then(response => response.json())
  .then(result => roomServiceSampleData = result.roomService)
  .catch(err => console.error(err));

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings')
  .then(response => response.json())
  .then(result => bookingsSampleData = result.bookings)
  .catch(err => console.error(err));

  

domUpdates.displayToday();

