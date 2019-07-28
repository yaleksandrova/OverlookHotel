import DOMupdates from './DOMupdates';
import Bookings from '../src/Bookings';

class BookingsRepo {
  constructor(bookingsData, roomData) {
    this.bookingsData = bookingsData;
    this.roomData = roomData;
    this.totalRooms = this.roomData.length;
  }

  findMostPopBookingDate (){
    const popDate = this.bookingsData.map(date => {
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

  showCustomersBookings(userID) {
    const customerBookings = this.bookingsData.filter(book => {
      return book.userID === userID;
    })
    return customerBookings;
  }

  totalBookingCostForOneCustomerPerDay(customerID, date) {
    let balancePerDate = this.showCustomersBookings(customerID).filter(book => {
      book.date === date.reduce((total, booking) => {
      this.roomData.forEach(room => {
        if(room.number === booking.roomNumber) {
          total += room.costPerNight
        }
      })
      return total
    }, 0)
    })
    return balancePerDate
  }

  calculateAvailableRoomsByDate(date) {
    let availableRooms = this.totalRooms - this.bookingsData.filter(room => {
      return room.date === date;
    })
    return availableRooms.length;
  }

  calculateNumberOfOccupiedRoomsByDate(date) {
    const occupiedRooms = this.bookingsData.filter(room => {
      return room.date === date
    })
    return occupiedRooms.length;
  }

  addNewBooking() {
    let bookings = new Bookings(4, "2019/10/19", 5)
    this.bookingsData.push(bookings)
  }

  removeBooking(book) {
    let indexOfBooking = this.bookingsData.findIndex(booking => {
      booking.userID === book.userID 
      && booking.date === book.date 
      && booking.roomNumber === book.roomNumber
    })
    this.bookingsData.splice(indexOfBooking, 1)
  }

  filterRoomsByType(type) {
    const roomType = this.roomData.filter(room => {
      return room.roomType === type
    })
    return roomType;
  }

  totalBookingCostForOneCustomerPerDay(customerID, date) {
    let balancePerDate = this.showCustomersBookings(customerID).filter(book => {
      book.date === date.reduce((total, booking) => {
      this.roomData.forEach(room => {
        if(room.number === booking.roomNumber) {
          total += room.costPerNight
        }
      })
      return total;
    }, 0)
    })
    return balancePerDate;
  }
  
}





export default BookingsRepo;