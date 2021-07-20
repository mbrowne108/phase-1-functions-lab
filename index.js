let scuberHq = 42;
let travelBlocks;

function distanceFromHqInBlocks(pickupStreet) {
    if (scuberHq > pickupStreet) {
        let blocks = scuberHq - pickupStreet;
        return blocks;
    } else {
        let blocks = pickupStreet - scuberHq;
        return blocks;
    }
}

function distanceFromHqInFeet(pickupStreet) {
    return distanceFromHqInBlocks(pickupStreet) * 264;
}

function distanceTravelledInFeet(start, end) {
    if (start > end) {
        travelBlocks = start - end
        return travelBlocks * 264
    } else {
        travelBlocks = end - start
        return travelBlocks * 264
    }
}


function calculatesFarePrice(start, end) {
    distanceTravelledInFeet(start, end);
    if (travelBlocks * 264 <= 400) {
        let fare = 0;
        return fare;
    }  else if (travelBlocks * 264 > 400 && travelBlocks * 264 <= 2000) {
        let chargedFeet = travelBlocks * 264 - 400;
        let fare = chargedFeet * 0.02;
        if (chargedFeet > 0) {
            return fare;
        }  else {
            return -fare;
        }
    }  else if (travelBlocks * 264 > 2000 && travelBlocks * 264 <= 2500) {
        let fare = 25;
        return fare;
    }  else {
        return 'cannot travel that far';
    }
}