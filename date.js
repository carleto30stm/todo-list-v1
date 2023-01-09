
module.exports.getDate = function(){
    const options =
    {
      weekday: 'long',
      month: 'long',
      day:'numeric'
    }
    return today = new Date().toLocaleString('en-US', options);
    
}
module.exports.year = function () {
  
  return new Date().getFullYear();
}




