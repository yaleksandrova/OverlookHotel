import chai from 'chai';
const expect = chai.expect;
import User from '../src/User.js';
import Bookings from '../src/Bookings';
import BookingsRepo from '../src/BookingsRepo';
import Rooms from '../src/Rooms.js';
import RoomService from '../src/RoomService';
import DOMupdates from '../src/DOMupdates.js';
import bookingsSampleData from '../src/data/bookingsSampleData.js';
import roomsSampleData from '../src/data/roomsSampleData.js';
import spies from 'chai-spies';

chai.use(spies);

describe('BookingsRepo', () => {
  let bookingsRepo;
  
  beforeEach(() => {
    bookingsRepo = new BookingsRepo(bookingsSampleData, roomsSampleData);
  })

  it('should be a function', () => {
    expect(BookingsRepo).to.be.a('function')
  })

  it('should be a new instance of bookings', () => {
    expect(bookingsRepo).to.be.a.instanceOf(BookingsRepo)
  });

  it('should find the most popular date', () => {
    expect(bookingsRepo.findMostPopBookingDate()).to.equal("2019/10/19")
  });

  it('should show customer bookings', () => {
    expect(bookingsRepo.showCustomersBookings(14)).to.deep.equal([{ userID: 14, date: '2019/09/01', roomNumber: 17 }])
  });

  it('should calculate the total amount a customer has to pay for one day for booking', function() {
    expect(bookingsRepo.totalBookingCostForOneCustomerPerDay(14, "2019/09/01")).to.equal(412.31);
  });

  it('should calculate the number of available rooms based on the date', function() {
    expect(bookingsRepo.calculateAvailableRoomsByDate()).to.equal();
  });

  it('should calculate the number of occupied rooms based on the date', function() {
    expect(bookingsRepo.calculateNumberOfOccupiedRoomsByDate("2019/09/01")).to.equal(2);
  });

  it('should create a new booking', function() {
    expect(bookingsSampleData.length).to.equal(12);
    bookingsRepo.addNewBooking();
    expect(bookingsSampleData.length).to.equal(13);
  });

  it('should delete a booking', function() {
    expect(bookingsSampleData.length).to.equal(13);
    bookingsRepo.removeBooking(  {
      userID: 14,
      date: "2019/09/01",
      roomNumber: 17
      });
    expect(bookingsSampleData.length).to.equal(12);
  });

  it('should filter rooms by type', function() {
    expect(bookingsRepo.filterRoomsByType("junior suite")).to.eql(
      [{
      number: 17,
      roomType: "junior suite",
      bidet: false,
      bedSize: "king",
      numBeds: 2,
      costPerNight: 393.97
      },
      {
        number: 4,
        roomType: "junior suite",
        bidet: false,
        bedSize: "full",
        numBeds: 1,
        costPerNight: 177.03
      },
      {
        number: 5,
        roomType: "junior suite",
        bidet: false,
        bedSize: "king",
        numBeds: 2,
        costPerNight: 246.65
        }
    ]);
  });

    



})