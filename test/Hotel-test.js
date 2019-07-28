var chai = require('chai');
var expect = chai.expect;
import Hotel from '../src/Hotel.js';
import User from '../src/User.js';
import RoomService from '../src/RoomService.js';

import spies from 'chai-spies';
import Rooms from '../src/Rooms.js';
chai.use(spies);

import domUpdates from '../src/domUpdates.js';
import Bookings from '../src/Bookings.js';

describe('Hotel', () => {
  let bookings;
  let user;
  let roomService;
  let hotel;

beforeEach( () => {
  bookings = new Bookings(bookingsSampleData, roomsSampleData);
  customer = new Customer();
  roomService = new RoomService(roomServiceSampleData, user);
  hotel = new Hotel(bookings, roomService);
});

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceof(Hotel);
  })

  it('should calculate the overal total balance per one date', () => {
    expect(hotel.calculateOverallBalancePerDate("2019/09/01")).to.equal(412.31);
  })

  it('should calculate the total bill for one customer for all services for all dates', () => {
    expect(hotel.calculateATotalBillPerCustomer(14)).to.equal(427.21);
  })
  
});