import DOMupdates from './DOMupdates';
import Bookings from '../src/Bookings';
import RoomService from '../src/RoomService';

class Hotel {
  constructor(bookings, roomService) {
    this.currentDate = this.showTodaysDate();
    this.bookings = bookings;
    this.roomService = roomService;
  }
  displayToday (){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      $('#js-date').text(date);
    }

    calculateOverallBalancePerDate(date) {
      // let overallHotelBalancePerDate = parseFloat(this.booking.showTotalBookingRevenueToday(date) + this.roomService.returnTotalAmountSpentOnRoomServicePerDateForAllCustomers(date)).toFixed(2)
      // return overallHotelBalancePerDate;
    }

    calculateATotalBillPerOneCustomer(customerID) {
      // let totalBill = parseFloat(this.bookingRepo.returnTotalBookingBalanceForOneCustomerAllDAys(customerID) + this.roomServiceRepo.returnTotalAmountSpentOnRoomServiceForOneCustomerAllDAys(customerID)).toFixed(2) 
      // return totalBill
  }
  
  

}

  export default Hotel;