const vegetables = [
  {
    submitter: 'Primeiro',
    redness: 1,
    plumpness: 1
  },
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  },
  {
    submitter: 'Ultimo',
    redness: 20,
    plumpness: 50
  }
]

const metric = 'redness'

const judgeVegetable = function (vegetables, metric) {
  let judge = 0;
  let best = "";

  for (let i = 0; i < vegetables.length; i++) {
    if (judge < vegetables[i][metric]) {
      judge = vegetables[i][metric]

      best = vegetables[i].submitter
    }
  }
  return best
}

console.log(judgeVegetable(vegetables, metric))