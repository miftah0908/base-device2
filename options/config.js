/* 
NOTE : JGN HPS DIBAWAH INI!!
RECODE : RAHMXBOT X RAHMAN GNTENG:V
WHATSAPP : 085821676621
NOMOR BOT : 085821369324
NOTE : JGN HPS AUTHORNYA!!!

DONASI LAH BANG BIAR 
ADMINNYA UPDATE LAGI

Kalau Mau Donasi Silahkan Pilih Yah
Payment : Ovo/Gopay/Dana
Number Payment : Chat Owner Wa nya Di Atas
Pulsa : 081528965381
*/

const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIs = {
liaacans: 'https://zenzapis.xyz',
}

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIKeys = {
'https://zenzapis.xyz': '9d30efca66',
}

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//
global.thumb = fs.readFileSync('./image/thumbnail.jpg') // JGN DI UBAH!
global.name = '𝕄𝕀𝔽𝕋𝔸ℍ 𝔾𝔸ℕℤ (Owner)', // GNTI NAMA LU!
global.creator = 'ᴍɪʙᴏᴛ ツ' // GANTI NAMA BOT LU BANH!
global.owner = ['6285171226069'] // GNTI NOMOR LU!
global.premium = ['6285821676621']
 // ADD PREM YG LU MAU BANH!!
global.quotes = 'TRY TO ACHIEVE SUCCESS ' // Ganti Quotes, Tapi Trsrh Klian
global.pulsa = ['085171226069'] // UBAH NOMOR YG AKTIF!
global.botname = 'Created ᴍɪʙᴏᴛ ツ' // GNTI NAMA BOT LU!
global.packname = '© 2022' // TRSERAH MO GANTI AP!
global.author = 'ᴍɪʙᴏᴛ ツ' // GNTI NMA LU!
global.fake = 'ᴍɪʙᴏᴛ ツ BOT VERIFIED' // GNTI NMA BOT LU BANH!
// FITUR TOPUP OTOMATIS 
global.hargadmff = 1261
global.hargadmml = 1700
global.merchant = 'M221101PAZJ5903YO' 
global.secret = '0d350408700039df5a179db3426644f5b2066b4b90da0dea980133a5a5ae4c58'
global.signature = '3aa26c9fa9f70fb2bc218419c7b30c19'
//CARA AKTIFIN:
//1. DAFTAR DI APIGAMES.UD
//2. AMBIL MERCHANT ID DAN SECRET KEY
//3. DAFTAR DI UNIPIN
//4. HUBUNGKAN AKUN UNIPIN DENGAN APIGANES DI BAGIAN KONEKSI
//5. BUAT SIGNATURE DENGAN TOOLS ENCRYPT MD5 MERCHANTID+SECRETKEY
//6 PASANG DIATAS SITU DAN SELESAI.
global.prefa = ['','!','.','/','#','$']
global.sp = '⭔' // JGN DI UBAH²! NTR EROR
global.mess = {
success: '*[SUCCESS]* SUKSES PERMINTAAN ANDA TERKIRIM!',
admin: 'Fitur Ini Khusus Untuk Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
prem: 'Fitur Ini Khusus Untuk Premium',
owner: 'Fitur Ini Khusus Untuk Owner Bot',
group: 'Fitur Ini Digunakan Hanya Untuk Group!',
private: 'Fitur Ini Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Ini Khusus Pengguna Nomor Bot',
wait: '*[WAIT]* SEDANG DIPROSES, HARAP TUNGGU SEBENTAR!',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
premium: "Unlimited",
free: 10
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
