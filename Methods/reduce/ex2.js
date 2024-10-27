
const grades = [75, 50, 90, 80, 65, 95]

const maximum = grades.reduce(getMax);

function getMax(accumulator, element){
  return Math.max(accumulator, element)
}

console.log(maximum)