const dates = ["2024-1-10", "2025-2-20", "2026-3-30"]
const formatedDates = dates.map(formatDate)


function formatDate(element){
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`
}

console.log(formatedDates)