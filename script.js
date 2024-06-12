function next() {
    var nama = document.getElementById('nama').value;
    localStorage.setItem('nama', nama);

    var currentPage = window.location.pathname.split('/').pop();
    var nextPage = '';

    if (currentPage === 'input-nama.html') {
        nextPage = 'input-tanggal.html';
    } else if (currentPage === 'input-tanggal.html') {
        nextPage = 'crosscheck-tanggal.html';
    }

    if (nextPage !== '') {
        window.location.href = nextPage;
    }
}

function crosscheckTanggal() {
    var nama = localStorage.getItem('nama');
    var tglLahir = new Date(localStorage.getItem('tglLahir'));
    var today = new Date();

    if (tglLahir.getDate() === today.getDate() && tglLahir.getMonth() === today.getMonth()) {
        document.getElementById('ucapan').innerHTML = 'Selamat Ulang Tahun, ' + nama + '!';
    } else {
        document.getElementById('ucapan').innerHTML = 'Happy Birthday, ' + nama + '!';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.title === 'Crosscheck Tanggal Lahir') {
        crosscheckTanggal();
    }
});
