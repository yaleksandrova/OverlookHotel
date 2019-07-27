import chai from 'chai';
const expect = chai.expect;
import User from '../src/User.js';
import Bookings from '../src/Bookings';
import Rooms from '../src/Rooms.js';
import RoomService from '../src/RoomService';
import DOMupdates from '../src/DOMupdates.js';
import roomsSampleData from '../src/data/roomsSampleData.js';
import spies from 'chai-spies';

chai.use(spies);

describe('Rooms', () => {
  let rooms;
  
  beforeEach(() => {
    rooms = new Rooms(3, "suite", false, "twin", 1, 275.99);
  })

  it('should be a function', () => {
    expect(Rooms).to.be.a('function')
  })

  it('should be a new instance of rooms', () => {
    expect(rooms).to.be.a.instanceOf(Rooms)
  });

})