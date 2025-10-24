welcomeSpeech();


function welcomeSpeech() {
    let name = prompt("Masukkan nama Anda:");

    document.getElementById("greet-name").innerHTML = `Hi ${name}`;
}

function validateForm() {
    let name = document.getElementById("name-input").value.trim();
    let date = document.getElementById("date-input").value;
    let gender = document.querySelector("input[name='gender']:checked");
    let message = document.getElementById("message-input").value;

    if (name === "" || date === "" || !gender || message === "") {
        alert("Harap isi semua kolom terlebih dahulu!");
        return;
    }

    // Dapatkan waktu saat ini
    let currentTime = new Date().toString();

    // Tampilkan ke kotak hasil
    document.getElementById("result-time").textContent = currentTime;
    document.getElementById("result-name").textContent = name;
    document.getElementById("result-date").textContent = date;
    document.getElementById("result-gender").textContent = gender.value;
    document.getElementById("result-message").textContent = message;

    alert("Data berhasil ditampilkan!");
}
