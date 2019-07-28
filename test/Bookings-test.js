import chai from 'chai';
import spies from 'chai-spies';

const expect = chai.expect;
import Bookings from '../src/Bookings';
import bookingsSampleData from '../src/data/bookingsSampleData.js';


chai.use(spies);

describe('Bookings', () => {
  let bookings;
  
  beforeEach(() => {
    bookings = new Bookings(4, "2019/10/19", 5);
  })

  it('should be a function', () => {
    expect(Bookings).to.be.a('function')
  })

  it('should be a new instance of bookings', () => {
    expect(bookings).to.be.a.instanceOf(Bookings)
  });


})