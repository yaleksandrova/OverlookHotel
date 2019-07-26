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
    roomService = new roomService(14, "2019/07/29", "Rustic Concrete Sandwich", 14.9);
  })

  it('should be a function', () => {
    expect(roomService).to.be.a('function')
  })

  it('should be a new instance of bookings', () => {
    expect(roomService).to.be.a.instanceOf(roomService)
  });

  it('should take all orders', () => {
    expect(roomService.allOrders(date)).to.equal(food);
  }); 

})