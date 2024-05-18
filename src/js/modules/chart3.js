const untrained = 1;
const notVisited = 1;
const absentTwoWeeks = 1;

export function chart3(){
  document.getElementById('untrainedCount').textContent = untrained;
  document.getElementById('notVisitedCount').textContent = notVisited;
  document.getElementById('absentTwoWeeksCount').textContent = absentTwoWeeks;
}