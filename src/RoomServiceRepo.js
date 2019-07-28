import DOMupdates from './DOMupdates';
import RoomServiceRepo from '../src/RoomService';
import roomServiceSampleData from '../src/data/roomServiceSampleData.js';

class RoomServiceRepo {
  constructor(roomServiceData, user){
    this.roomServiceData = roomServiceData;
    this.customer = user;
  }

    orderRoomService(userID, date) {
      let roomService = new RoomService(userID, date, "Awesome Cotton Sandwich", 20.79 )
      this.roomServiceData.push(roomService)
    }

    showCustomerServiceOrdersPerCustomer(userID) {
      const servicePerCustomer = this.roomServiceData.filter(order => {
        return order.userID === userID;
    })
    return servicePerCustomer;
  }

    showAllCustomerServiceOrdersForOneDate(orderDate) {
      const allCustomer =  this.roomServiceData.filter(order => {
        return order.date === orderDate
    })
      return allCustomer;
  }

}

export default RoomServiceRepo;