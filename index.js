function distanceFromHqInBlocks(pickupBlock) {
  const hqBlock = 42; // Scuber's headquarters
  return Math.abs(pickupBlock - hqBlock);
}

function distanceFromHqInFeet(pickupBlock) {
  const blocks = distanceFromHqInBlocks(pickupBlock);
  return blocks * 264; // 264 feet per block
}

function distanceTravelledInFeet(startBlock, destinationBlock) {
  const distanceInBlocks = Math.abs(destinationBlock - startBlock);
  return distanceInBlocks * 264; // 264 feet per block
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);
  
  if (distanceInFeet <= 400) {
    return 0; // First 400 feet are free
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02; // 2 cents per foot after 400 feet
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25; // Flat fare of $25
  } else {
    return 'cannot travel that far'; // Distance exceeds 2500 feet
  }
}

