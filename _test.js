require('dotenv').config();
Feature('Flip');

Scenario('test Portal', ({ I }) => {
//untuk mengakses ke halaman pusat bantuan
I.amOnPage (process.env.URLBASE)
I.click ('Bantuan')
I.see ('Pusat Bantuan')
//untuk mengakses ke halaman karir
I.amOnPage (process.env.URLBASE)
I.click ('Karir')
I.see ('Flip Careers')
//untuk mengakses ke halaman biaya
I.amOnPage (process.env.URLBASE)
I.click ('Biaya')
I.see ('Pilih Layanan Flip yang Sesuai Kebutuhanmu')
//untuk mengakses ke halaman masuk
I.amOnPage (process.env.URLBASE)
I.click ('Masuk')
I.see ('Hai!')
});
