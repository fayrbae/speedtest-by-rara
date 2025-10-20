document.getElementById('checkSpeedBtn').addEventListener('click', function() {
    // 1. Matikan tombol saat tes berjalan
    const button = this;
    button.disabled = true;
    button.textContent = 'Sedang Mengetes...';

    // ** SIMULASI FUNGSI TES KECEPATAN **
    // Ganti bagian ini dengan kode pengetesan kecepatan jaringan yang sebenarnya (misalnya menggunakan library seperti SpeedtestJS)

    const MIN_DOWNLOAD = 10;
    const MAX_DOWNLOAD = 100;
    const MIN_UPLOAD = 5;
    const MAX_UPLOAD = 50;
    const MIN_LATENCY = 10;
    const MAX_LATENCY = 50;

    // Simulasikan penundaan tes (misalnya 3 detik)
    setTimeout(() => {
        // Hasil tes acak
        const downloadSpeed = (Math.random() * (MAX_DOWNLOAD - MIN_DOWNLOAD) + MIN_DOWNLOAD).toFixed(2);
        const uploadSpeed = (Math.random() * (MAX_UPLOAD - MIN_UPLOAD) + MIN_UPLOAD).toFixed(2);
        const latency = Math.floor(Math.random() * (MAX_LATENCY - MIN_LATENCY) + MIN_LATENCY);
        const timeStamp = new Date().toLocaleTimeString('id-ID');

        // 2. Tambahkan hasil ke tabel
        addResultToTable(timeStamp, downloadSpeed, uploadSpeed, latency);

        // 3. Kembalikan tombol ke keadaan semula
        button.disabled = false;
        button.textContent = 'Cek Kecepatan Jaringan';

    }, 3000); // Penundaan 3 detik
});

/**
 * Fungsi untuk menambahkan baris baru ke tabel hasil.
 * @param {string} time Waktu tes
 * @param {string} download Unduh speed
 * @param {string} upload Unggah speed
 * @param {number} latency Latensi
 */
function addResultToTable(time, download, upload, latency) {
    const tableBody = document.getElementById('tableBody');

    // Buat baris baru
    const newRow = tableBody.insertRow(0); // Memasukkan di posisi 0 agar hasil terbaru ada di paling atas

    // Buat sel-sel (kolom)
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    // Isi sel dengan data
    cell1.textContent = time;
    cell2.textContent = download;
    cell3.textContent = upload;
    cell4.textContent = latency;
}