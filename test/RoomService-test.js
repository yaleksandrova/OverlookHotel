import chai from 'chai';
const expect = chai.expect;
import User from '../src/User.js';
import Bookings from '../src/Bookings';
import Rooms from '../src/Rooms.js';
import RoomService from '../src/RoomService';
import DOMupdates from '../src/DOMupdates.js';
import roomServiceSampleData from '../src/data/roomServiceSampleData.js';
import spies from 'chai-spies';

chai.use(spies);


describe('roomService', () => {
  let roomService;
  
  beforeEach(() => {
    roomService = new RoomService(14, "2019/07/29", "Rustic Concrete Sandwich", 14.9);
  })

  it('should be a function', () => {
    expect(RoomService).to.be.a('function')
  });

  it('should be a new instance of room service', () => {
    expect(roomService).to.be.a.instanceOf(RoomService)
  });

  it('should take all orders', () => {
    expect(roomService.allOrders()).to.equal();
  }); 

})