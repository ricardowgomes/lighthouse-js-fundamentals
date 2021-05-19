const smartGarbage = function (trash, bins) {
  for (const key in bins) {
    if (trash == 'waste' && key == 'waste') {
      bins[key]++
    } else if (trash == 'recycling' && key == 'recycling') {
      bins[key]++
    } else if (trash == 'compost' && key == 'compost') {
      bins[key]++
    }
  }
  return bins
}

console.log(smartGarbage('recycling',
  {
    waste: 4,
    recycling: 2,
    compost: 5
  }))