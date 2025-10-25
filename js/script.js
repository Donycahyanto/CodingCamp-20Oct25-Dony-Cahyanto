welcomeSpeech();


function welcomeSpeech() {
    let name = prompt("Masukkan nama Anda:");

    document.getElementById("greet-name").innerHTML = `Hi ${name}`;
}

function validateForm() {
    const name = document.getElementById("name-input").value.trim();
    const date = document.getElementById("date-input").value;
    const gender = document.querySelector("input[name='gender']:checked");
    const message = document.getElementById("message-input").value.trim();
    const resultBox = document.getElementById("result-box");

    resultBox.classList.remove("opacity-0");
    resultBox.classList.add("opacity-100");

    // Validasi sederhana
    if (!name || !date || !gender || !message) {
        alert("Harap isi semua kolom terlebih dahulu!");
        return;
    }

    // Format tanggal
    const formattedDate = new Date(date).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    // Waktu saat ini
    const now = new Date().toLocaleString("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    // Masukkan hasil
    resultBox.innerHTML = `
Current Time: ${now}

Nama: ${name}
Tanggal Lahir: ${formattedDate}
Jenis Kelamin: ${gender.value}
Pesan: ${message}
`;
}
