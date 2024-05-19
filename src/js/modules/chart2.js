const total = {
  value: 5,
  color: '#B6D4ED',
}
const completed = {
  value: 2,
  color: '#E9841D',
}

const chart = document.querySelector('.card__chart2');
const completedDeg = (completed.value / total.value) * 180;

export function chart2() {
  chart.style.background = `conic-gradient(
    from 270deg at 50% 100%, ${completed.color} 0deg, ${completed.color} ${completedDeg}deg, ${total.color} ${completedDeg}deg, ${total.color} 180deg)`;
  document.querySelector('.card__chart2-info',).textContent = `${completed.value}/${total.value}`;
}
