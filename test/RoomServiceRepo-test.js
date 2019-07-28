import chai from 'chai';
const expect = chai.expect;
import User from '../src/User.js';
import RoomServiceRepo from '../src/RoomServiceRepo';
import DOMupdates from '../src/DOMupdates.js';
import roomServiceSampleData from '../src/data/roomServiceSampleData.js';
import spies from 'chai-spies';;
chai.use(spies);

describe('roomServiceRepo', () => {
  let user;
  let roomServiceRepo;
  
  beforeEach(() => {

    user = new User(1, "Matilde Larson");
    roomServiceRepo = new RoomServiceRepo (roomServiceSampleData, user);
  });

  it('should be a function', () => {
    expect(RoomServiceRepo).to.be.a('function')
  });

  it('should be a new instance of room service', () => {
    expect(roomServiceRepo).to.be.a.instanceOf(RoomServiceRepo)
  });

  it('should have a date', () => {
    expect(roomServiceRepo.date).to.equal("2019/09/11");
  })

  it('should select a food item from the menu', () => {
    expect(roomServiceRepo.food).to.equal( "Awesome Cotton Sandwich");
  })

  it('should show the price of the item', () => {
    expect(roomServiceRepo.totalCost).to.equal(20.79);
  })

  it('should show all orders of a customer', () => {
    expect(roomServiceRepo.showCustomerServiceOrdersPerCustomer(23)).to.eql(
    [{
      userID: 23,
      date: "2019/09/11",
      food: "Awesome Cotton Sandwich",
      totalCost: 20.79
    }]);
  })

  it('should show the total of all orders by date', () => {
    expect(roomServiceRepo.showAllCustomerServiceOrdersForOneDate("2019/09/11")).to.eql([{
      userID: 23,
      date: "2019/09/11",
      food: "Awesome Cotton Sandwich",
      totalCost: 20.79
      }]);
  })

})