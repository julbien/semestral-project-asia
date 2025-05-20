const api = 'http://localhost:3000/api';

async function fetchData(url) {
  const res = await fetch(url);
  return res.json();
}

window.onload = async () => {
  document.getElementById('total').textContent = (await fetchData(`${api}/total-students`)).total;
  document.getElementById('female').textContent = (await fetchData(`${api}/total-female`)).total;
  document.getElementById('male').textContent = (await fetchData(`${api}/total-male`)).total;

  const grades = await fetchData(`${api}/grades-trend`);
  new Chart(document.getElementById('gradesChart'), {
    type: 'line',
    data: {
      labels: grades.map(x => x.grade_range),
      datasets: [{
        label: 'Number of Students',
        data: grades.map(x => x.count),
        borderColor: 'blue',
        tension: 0.2,
        fill: true,
        backgroundColor: 'rgba(0, 123, 255, 0.1)'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Students'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Grade Range'
          }
        }
      }
    }
  });

  const attendance = await fetchData(`${api}/attendance-rate`);
  new Chart(document.getElementById('attendanceChart'), {
    type: 'bar',
    data: {
      labels: attendance.map(x => x.status),
      datasets: [{
        label: 'Attendance',
        data: attendance.map(x => x.count),
        backgroundColor: ['green', 'red', 'orange']
      }]
    }
  });

  const passFail = await fetchData(`${api}/pass-fail`);
  new Chart(document.getElementById('passFailChart'), {
    type: 'doughnut',
    data: {
      labels: ['Pass', 'Fail'],
      datasets: [{
        data: passFail.map(x => x.count),
        backgroundColor: ['#4caf50', '#f44336']
      }]
    }
  });

  const subjects = await fetchData(`${api}/student-subject`);
  new Chart(document.getElementById('subjectRadar'), {
    type: 'radar',
    data: {
      labels: subjects.map(x => x.subject),
      datasets: [{
        label: 'Students per Subject',
        data: subjects.map(x => x.count),
        backgroundColor: 'rgba(0,123,255,0.2)',
        borderColor: 'blue'
      }]
    }
  });
};
