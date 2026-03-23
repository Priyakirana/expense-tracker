async function loadChart() {
  const user = JSON.parse(localStorage.getItem("user"));

  const res = await fetch("/api/analytics/" + user._id);
  const data = await res.json();

  const ctx = document.getElementById("chart").getContext("2d");

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: Object.keys(data),
      datasets: [{
        data: Object.values(data)
      }]
    }
  });
}