import $ from 'jquery';

const DOMupdates = {

  displayToday (){
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    $('#js-date').text(date);
  }
  
  
}


export default DOMupdates;