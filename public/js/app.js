function openModal() {
  document.getElementById("modal").style.display = "block";
}

async function addExpense() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return alert("Login first");

  await fetch("/api/expense/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: user._id,
      amount: Number(document.getElementById("amount").value),
      category: document.getElementById("category").value,
      note: document.getElementById("note").value
    })
  });

  document.getElementById("modal").style.display = "none";
  load();
}

async function load() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return;

  const res = await fetch("/api/expense/" + user._id);
  const data = await res.json();

  let total = 0;
  const timeline = document.getElementById("timeline");

  if (!timeline) return;

  timeline.innerHTML = "";

  data.forEach(e => {
    total += e.amount;

    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `${e.category} - ₹${e.amount}<br>${e.note || ""}`;

    timeline.appendChild(div);
  });

  const totalEl = document.getElementById("total");
  const balEl = document.getElementById("balance");

  if (totalEl) totalEl.innerText = "₹" + total;
  if (balEl) balEl.innerText = "₹" + (10000 - total);
}

load();