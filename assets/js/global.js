function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    const msg1 = `<p class="animation mb-0 text-truncate">Buat yang mau pm fb, tiktok, ig disini pc ya</p>`;
    const msg2 = `<p class="animation mb-0 text-truncate">Salam kenal buat user Malaysia</p>`;
    const msg3 = `<p class="animation mb-0 text-truncate">Jangan lupa follow sosmed gua dibawah ya</p>`;
    const msg4 = `<p class="animation mb-0 text-truncate">Buat yang namanya mau dipajang disini, pc ya</p>`;
    const msg5 = `<p class="animation mb-0 text-truncate">Bagi yang mau donasi ke saya, pc WA ya</p>`;
    const msg6 = `<p class="animation mb-0 text-truncate">Follow ML gw -> 'Stee.' rank mitik</p>`;
    // const msg6 = `<p class="animation mb-0 text-truncate">Ingat! WR hanyalah angka</p>`;
    // const msg7 = `<p class="animation mb-0 text-truncate">Aman sedikit dunia</p>`;
    // const msg8 = `<p class="animation mb-0 text-truncate">Jangan lupa istirahat coeg</p>`;
    // const msg9 = `<p class="animation mb-0 text-truncate">Semangat GB nya bro</p>`;
    // const msg10 = `<p class="animation mb-0 text-truncate">Lo user apa?</p>`;
    // const msg11 = `<p class="animation mb-0 text-truncate">Mabar yok</p>`;
    // const msg12 = `<p class="animation mb-0 text-truncate">Semangat party nya bro</p>`;
    // const msg13 = `<p class="animation mb-0 text-truncate">Semangat push ke mitik bro</p>`;

    let arrayEl = [msg1, msg2, msg3, msg4, msg5, msg6];
    let arrayMax = 6;
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayMax) {
            array = 0;
        }
    }, 4250);
}