async function getGreeting() {
  const name = document.getElementById("nameInput").value;
  const res = await fetch(
    `https://your-api.vercel.app/api/hello?name=${encodeURIComponent(name)}`
  );
  const data = await res.json();
  document.getElementById("result").innerText = data.message;
}
