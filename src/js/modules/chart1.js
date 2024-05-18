const completed = {
  value: 70,
  total: 7,
  color: '#00A75C',
}
const inProcess = {
  value: 10,
  total: 1,
  color: '#E9841D'
}
const notPassed = {
  value: 10,
  total: 1,
  color: '#EC133D'
}
const notStarted = {
  value: 10,
  total: 1,
  color: '#B6D4ED'
}

export function chart1() {
  const chart = document.querySelector('.card__chart1');
  let completedDeg = completed.value * 3.6;
  let inProcessDeg = inProcess.value * 3.6;
  let notPassedDeg = notPassed.value * 3.6;
  let notStartedDeg = notStarted.value * 3.6;

  chart.style.background = `conic-gradient(
    ${completed.color} 0deg, ${completed.color} ${completedDeg}deg,
    ${inProcess.color} ${completedDeg}deg, ${inProcess.color} ${completedDeg + inProcessDeg}deg,
    ${notPassed.color} ${completedDeg + inProcessDeg}deg, ${notPassed.color} ${completedDeg + inProcessDeg + notPassedDeg}deg,
    ${notStarted.color} ${completedDeg + inProcessDeg + notPassedDeg}deg, ${notStarted.color} ${completedDeg + inProcessDeg + notPassedDeg + notStartedDeg}deg
  )`;
  document.getElementById('chart1ComplVal').textContent = `${completed.value}%`;
  document.getElementById('chart1ComplTot').textContent = `(${completed.total})`;
  document.getElementById('chart1InprocVal').textContent = `${inProcess.value}%`;
  document.getElementById('chart1InprocTot').textContent = `(${inProcess.total})`;
  document.getElementById('chart1NotprocVal').textContent = `${notPassed.value}%`;
  document.getElementById('chart1NotprocTot').textContent = `(${notPassed.total})`;
  document.getElementById('chart1NotstartVal').textContent = `${notStarted.value}%`;
  document.getElementById('chart1NotstartTot').textContent = `(${notStarted.total})`;
  document.querySelector('.card__chart1-numb').textContent = completed.value;
}
