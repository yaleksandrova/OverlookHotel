import chai from 'chai';
const expect = chai.expect;
import RoomService from '../src/RoomService';
import spies from 'chai-spies';
chai.use(spies);

describe('roomService', () => {
  let roomService;
  
  beforeEach(() => {
    roomService = new RoomService(23, "2019/09/11", "Awesome Cotton Sandwich", 20.79);
  })

  it('should be a function', () => {
    expect(RoomService).to.be.a('function')
  });

  it('should be a new instance of room service', () => {
    expect(roomService).to.be.a.instanceOf(RoomService)
  });

  it('should have a date', () => {
    expect(roomService.date).to.equal("2019/09/11");
  })

  it('should select a food item from the menu', () => {
    expect(roomService.food).to.equal( "Awesome Cotton Sandwich");
  })

  it('should show the price of the item', () => {
    expect(roomService.totalCost).to.equal(20.79);
  })


})