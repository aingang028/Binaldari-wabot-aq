let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
*TUTORIAL MENGGUNAKAN BINALDARI BOT*
 🧚🏿‍♂️pastikan kalian sudah daftar di Binaldari Bot caranya, ketik !daftar nama.umur
        â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
Kalo gak paham tuh baca dulu -_-
         â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
âž¸ *${prefix}sticker*
Kirim gambar/video dengan caption sticker
âž¸ *${prefix}ttp*
Text to sticker contoh : ${prefix}ttp Ang Ganteng
*nb keknya error
âž¸ *${prefix}tts*
Suara google contoh : ${prefix}tts Ang Ganteng banget
âž¸ *${prefix}toimg*
Reply sticker yang mau dijadiin image
âž¸ *${prefix}nulis*
Untuk menulis dibuku
âž¸ *${prefix} bucin*
Random Bucin
âž¸ *${prefix}play*
Mendownload lagu dari youtube bisa menggunakan text atau link
         â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
Note : Sisanya gunain otak kalian aja cape w jelasin :)
         â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
ðŸ”° -----[ *TUTOR BY ANG* ]----- ðŸ”°
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

