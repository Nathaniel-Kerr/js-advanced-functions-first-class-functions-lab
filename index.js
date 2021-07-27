const returnFirstTwoDrivers = function(array){
    return array.slice(0,2);
}

const returnLastTwoDrivers = function(array) {
    return array.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(value) {
    return function(multiplier) {
        return value * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, selectedDrivers) {
    return selectedDrivers(drivers)
}
