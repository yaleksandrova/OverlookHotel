import DOMupdates from './DOMupdates';
import usersSampleData from './data/usersSampleData';

class User {
    contructor(id, name, data) {
      this.id = id;
      this.name = name;
      this.data = data;
    }

  findCustomer(name, data) {
    const specificUser = data.find(user => user.name === name);
    return specificUser;
  }

  createNewCustomer(name) {
    const lastId = (usersSampleData[usersSampleData.length - 1]).id;
    const newUser = usersSampleData.push({name: name, id: lastId});
    return usersSampleData.find(user => user.name === name)
  }

}

export default User;