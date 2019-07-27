import chai from 'chai';
const expect = chai.expect;
import User from '../src/User.js';
import Bookings from '../src/Bookings';
import Rooms from '../src/Rooms.js';
import RoomService from '../src/RoomService';
import DOMupdates from '../src/DOMupdates.js';
import bookingsSampleData from '../src/data/bookingsSampleData.js';
import spies from 'chai-spies';

chai.use(spies);

describe('Bookings', () => {
  let bookings;
  
  beforeEach(() => {
    bookings = new Bookings(4, "2019/10/19", bookingsSampleData);
  })

  it('should be a function', () => {
    expect(Bookings).to.be.a('function')
  })

  it('should be a new instance of bookings', () => {
    expect(bookings).to.be.a.instanceOf(Bookings)
  });

  it('should find the most popular date', () => {
    expect(bookings.findMostPopBookingDate()).to.equal("2019/10/19")
  });

  it('should find available room', () => {
    expect(bookings.findAvailableRooms ()).to.equal()
  });

  it('should show customer bookings', () => {
    expect(bookings.showCustomersBookings()).to.equal()
  });
})