/* ================= JAM ================= */
function updateClock() {
  const clock = document.getElementById("clock");
  if (!clock) return;

  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;

  clock.innerText = h + ":" + m;
}

setInterval(updateClock, 1000);
updateClock();

/* ================= TERMINAL ================= */
const terminal = document.getElementById("terminal-bg");

if (terminal) {
  const lines = [
    "<span class='green'>dimas@portfolio</span>:<span class='blue'>~</span>$ <span class='yellow'>booting system...</span>",
    "<span class='green'>[ OK ]</span> Loading modules",
    "<span class='green'>[ OK ]</span> Initializing UI",
    "",
    "<span class='white'>Welcome Dimas Aldi Saputra 🚀</span>",
    "",
    "<span class='green'>dimas@portfolio</span>:<span class='blue'>~</span>$ <span class='yellow'>git clone github.com/dimas/portfolio</span>",
    "<span class='white'>Cloning into 'portfolio'...</span>",
    "",
    "<span class='green'>dimas@portfolio</span>:<span class='blue'>~/portfolio</span>$ <span class='yellow'>npm install</span>",
    "<span class='white'>Installing dependencies...</span>",
    "<span class='green'>+ tailwindcss</span>",
    "<span class='green'>+ laravel</span>",
    "<span class='green'>+ vite</span>",
    "",
    "<span class='green'>✔ Install complete</span>",
    "",
    "<span class='green'>dimas@portfolio</span>:<span class='blue'>~/portfolio</span>$ <span class='yellow'>npm run dev</span>",
    "<span class='blue'>Local:</span> http://localhost:5173/",
    "",
    "<span class='green'>dimas@portfolio</span>:<span class='blue'>~/portfolio</span>$ <span class='yellow'>php artisan serve</span>",
    "<span class='white'>Server running on http://127.0.0.1:8000</span>",
    "",
    "<span class='red'>[WARNING]</span> Low memory detected",
    "",
    "<span class='green'>System ready...</span>",
    "<span class='green'>dimas@portfolio</span>:<span class='blue'>~</span>$"
  ];

  let i = 0;

  function typeEffect() {
    if (i < lines.length) {

      // tampilkan per baris (AMAN untuk HTML)
      terminal.innerHTML += lines[i] + "\n";

      // auto scroll ke bawah
      terminal.scrollTop = terminal.scrollHeight;

      i++;

      // delay antar baris
      setTimeout(typeEffect, 120);

    } else {

      // scroll naik (hilang dari bawah)
      let scrollUp = setInterval(() => {
        terminal.scrollTop += 4;

        if (terminal.scrollTop >= terminal.scrollHeight) {
          clearInterval(scrollUp);

          terminal.innerHTML = "";
          terminal.scrollTop = 0;
          i = 0;

          setTimeout(typeEffect, 500);
        }
      }, 30);

    }
  }

  typeEffect();
}

lucide.createIcons();

function openModal(title, desc, img) {
  document.getElementById("modal").classList.remove("hidden");

  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;
  document.getElementById("modalImg").src = img;
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}