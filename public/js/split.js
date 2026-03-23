async function createGroup() {
  const user = JSON.parse(localStorage.getItem("user"));

  await fetch("/api/group/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.getElementById("gname").value,
      members: document.getElementById("members").value.split(","),
      createdBy: user._id
    })
  });

  alert("Group Created");
}

async function splitBill() {
  const user = JSON.parse(localStorage.getItem("user"));

  await fetch("/api/group/split", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      groupId: document.getElementById("groupId").value,
      paidBy: user._id,
      amount: Number(document.getElementById("amount").value),
      members: document.getElementById("members").value.split(",")
    })
  });

  alert("Split Done");
}