// Daftar voice line. Sesuaikan dengan nama file di folder audio/
const LINES = [
    "audio/verity-line.mp3",
];

const btn = document.getElementById("verity");
const status = document.getElementById("status");
let lastIndex = -1;
let current = null;

function pickIndex() {
    if (LINES.length === 1) return 0;
    let i;
    do {
    i = Math.floor(Math.random() * LINES.length);
  } while (i === lastIndex);   // jangan ulang line yang sama berturut-turut
    return i;
}

btn.addEventListener("click", async () => {
    status.textContent = "";

  if (current) {               // hentikan suara sebelumnya
    current.pause();
    current.currentTime = 0;
    }

    lastIndex = pickIndex();
    current = new Audio(LINES[lastIndex]);

    try {
    await current.play();
    } catch (e) {
    status.textContent = "Audio tidak ditemukan. Cek nama file di folder audio/.";
    }
});