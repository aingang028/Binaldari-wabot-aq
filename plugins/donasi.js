let handler = async m => m.reply(`
╔════════════════════☬
║ *DONASI UNTUK BOT*
╠════════════════════☬
║╭──❉ *DONASI BOS* ❉─────
║│🧚🏿‍♂️➸ *3*: 089508963104
║│🧚🏿‍♂️➸ *DANA*: 089509963104
║│🧚🏿‍♂️➸ *Smartfren* 088235435804
║│🧚🏿‍♂️➸ *Telkomsel* 081357302007
║│🧚🏿‍♂️➸ *GO-PAY* 081357302007
║╰───────────────────
╚════════════════════☬
╔══「 Hubungi 」══════════☬
║🧚🏿‍♂️➸  Ingin donasi? Wa.me/6289508963104
╚════════════════════☬
╔════════════════════  ☬
║  ▌│█║▌║▌║║▌║▌║█│▌
║  ▌│█║▌║▌║║▌║▌║█│▌
║        
╠════════════════════☬
║ _*POWERED BY Binaldari 🧚🏿‍♂️*_
╚════════════════════☬


Makasih banget yahh kamu udah mau Donasi ( ˘ ³˘)♥

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa Tri"
3.)Dan terus masukkan nomor kami 089508963104
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
