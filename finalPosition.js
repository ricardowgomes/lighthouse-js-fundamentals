const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = function (moves) {
  const xY = [0, 0];
  for (const move of moves) {
    if (move === 'north') {
      xY[1]++
    } else if (move === 'south') {
      xY[1]--
    } else if (move === 'west') {
      xY[0]--
    } else {
      xY[0]++
    }
  }

  return xY;
}

console.log(finalPosition(moves))
