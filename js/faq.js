const qaData = [
    { question: "Apa saja persyaratan untuk berpartisipasi di Hackathon 8.0?", 
    answer: "Peserta hanya dapat bergabung dalam 1 tim, baik secara individu maupun tim (setiap tim dapat beranggotakan maksimal 4 orang).\n Peserta adalah warga negara Indonesia berusia 18 hingga 25 tahun untuk memenuhi syarat.\n\n Untuk Informasi lebih lanjut, peserta dapat melihat buku panduan Hackathon 8.0 (Link Guidebook Hackathon 8.0)\n Peserta harus menyerahkan dokumen yang dibutuhkan pada halaman pendaftaran Hackathon, seperti:\n1. CV (Curriculum Vitae)\n2. Portfolio (tidak wajib)\n3. Non-Binusian: KTP (KTP/sIM/dii)\n4. Binusian: Kartu Binusian (Kartu Flazz)" },
    { question: "Apakah Hackathon 8.0 gratis?", 
    answer: "Hackathon 8.0 adalah acara berbayar. Setiap tim harus melakukan pembayaran sesuai periode:\n1. Early Bird (30 Mei - 3 Juni 2024)\nBinusian: Rp. 190.000\nNon-Binusian: Rp. 210.000\n2. Harga Biasa (4 Juni - 11 Juni 2024)\nBinusian: Rp. 200.000\nNon-Binusian: Rp. 225.000" },
    { question: "Kapan batas waktu pendaftaran?", 
    answer: "Batas akhir pendaftaran adalah Selasa, 11 Juni 2025" },
    { question: "Bisakah saya bergabung dengan lebih dari satu tim?",
     answer: "Peserta hanya diperbolehkan bergabung dalam satu tim. Jika lebih dari satu tim, peserta tidak akan terdaftar sebagai peserta Hackathon 8.0." },
    { question: "Jika saya tidak memiliki dasar pemrograman atau desain, bolehkah saya berpartisipasi?", 
    answer: "Peserta tanpa latar belakang pemrograman atau dasar-dasar coding dan desain masih diperbolehkan untuk berpartisipasi pada acara Hackathon. Namun, akan ada seleksi untuk menentukan tim yang akan lolos." }
];

const container = document.getElementById('qaContainer');

qaData.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');

    const questionBox = document.createElement('div');
    questionBox.classList.add('question-box');

    const questionText = document.createElement('span');
    questionText.textContent = item.question;

    const toggleButton = document.createElement('button');
    toggleButton.classList.add('toggle-button');

    toggleButton.addEventListener('click', () => {
        card.classList.toggle('active');
        toggleButton.classList.toggle('active');
    });

    questionBox.appendChild(questionText);
    questionBox.appendChild(toggleButton);

    const answerBox = document.createElement('div');
    answerBox.classList.add('answer-box');
    answerBox.textContent = item.answer;

    card.appendChild(questionBox);
    card.appendChild(answerBox);
    container.appendChild(card);
});