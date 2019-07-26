import chai from 'chai';
const expect = chai.expect;
import User from '../src/User.js';
import Bookings from '../src/Bookings';
import Rooms from '../src/Rooms.js';
import RoomService from '../src/RoomService';
import DOMupdates from '../src/DOMupdates.js';
import usersSampleData from '../src/data/usersSampleData.js';
import spies from 'chai-spies';

chai.use(spies);

describe('User', function() {
  let user;

  beforeEach(function() {
    user = new User(1, "Matilde Larson", usersSampleData);
  });

  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  });

  it('should find customers', () => {
    expect(user.findCustomer("Chadrick Lowe", usersSampleData)).to.equal(usersSampleData[1]);
  });  

  it('should add a new customers', () => {
    expect(user.createNewCustomer("Moisey Uretsky")).to.equal(usersSampleData[usersSampleData.length - 1]);
  });  

})

  
