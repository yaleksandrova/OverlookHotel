import DOMupdates from './DOMupdates';
import bookingsSampleData from './data/bookingsSampleData';

class Bookings {
  constructor(userId, date, roomNumber) {
    this.userId = userId;
    this.date = date;
    this.roomNumber = roomNumber;
  }

  findMostPopBookingDate (){
    const popDate = bookingsSampleData.map(date => {
      return date.date;
  })
  let dateObj = popDate.reduce((prev, cur) => {
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});
  
  let greatestDate = Object.keys(dateObj).reduce((a, b) => 
  dateObj[a] > dateObj[b] ? a : b); 
  return greatestDate;
}

  findAvailableRooms (date){

  }

  showCustomersBookings(customerID) {
    return this.bookingData.filter(book => book.userID === customerID);
  }

  calculateAvailableRoomsByDate(date) {
    let availableRooms = this.totalRooms - this.bookingData.filter(room => room.date === date).length;
    return availableRooms
  }

  filterRoomsByType(type) {
    return this.roomData.filter(room => room.roomType === type)
  }

  addNewBooking() {
    let booking = new Booking(4, "2019/10/19", 5)
    this.bookingData.push(booking)
  }

  removeBooking(book) {
    let indexOfBooking = this.bookingData.findIndex(booking => booking.userID === book.userID && booking.date === book.date && booking.roomNumber === book.roomNumber)
    this.bookingData.splice(indexOfBooking, 1)
  }


  calculateNumberOfOccupiedRoomsByDate(date) {
    return this.this.bookingSampleData.filter(room => room.date === date).length
  }

  calculateOccupationPercentageForDate(date) {
    return this.calculateNumberOfOccupiedRoomsByDate(date)/this.totalRooms * 100
  }

  showTotalBookingRevenueToday(date) {
    let bookingCost = this.bookingSampleData.reduce((acc, booking) => {
      this.roomsSampleData.forEach(room => {
        if(bookings.date === date && room.number === bookings.roomNumber) {
          acc += room.costPerNight
        }
      })
      return acc
    }, 0)
    return bookingCost;
  } 
  
}





export default Bookings;