// Code your solution in this file!
let drivers = []
function logDriverNames(drivers) {
  drivers.forEach(driver => {
    return console.log(driver.name)
  });
}

function logDriversByHometown(drivers, location) {
  const filterArr = drivers.filter( function (driver) {
    return driver.hometown === location
  });
  filterArr.forEach(driver => {
    return console.log(driver.name)
  });
}

function driversByRevenue(drivers) {
  const driversCopy = [];
  drivers.forEach(function (driver) {
    driversCopy.push(driver)
  });
  return driversCopy.sort(function(a,b) {
    return a.revenue - b.revenue
  });
}

function driversByName(drivers) {
  const driversCopy = [...drivers];
  return driversCopy.sort(function (a, b) {
    return (a.name).localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  return drivers.reduce( function(sum,driver){
    return sum + driver.revenue
  },0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
}
