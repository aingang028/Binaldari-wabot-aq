const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg ( SN|YOUR NUMBER )`
  if (!Reg.test(text)) throw `Format salah!\n*Harap daftar dengan Benar!\nDengan Ketik *${usedPrefix}daftar <nama>.umur>*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong cukk... gak bisa :v\nHarus diisi dengan Benar dan tidak menipu *_OWNER/BOT!_*'
  if (!age) throw 'Umur tidak boleh kosong dan diisi dengan angka\nNote: Tidak menipu Umur Kamu di *_OWNER/BOT_*'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
Anda sudah Berhasil Terdaftar dan,
User kamu Dibawah π

           βββββββββββββββββ
           β ABOUT YOU WITH BOT β
           βββββββββββββββββ
           
ββββ± π§πΏββοΈβ° *INFO* β± π§πΏββοΈβ°βββ¬
β£π₯»κ¦Όκ¦½β³ Nama: ${name}
β£π₯»κ¦Όκ¦½β³ Umur: ${age}Tahun
β£π₯»κ¦Όκ¦½β³SN: ${sn}
β£π₯»κ¦Όκ¦½β³Command To Help *_#menu_*
β
β£π₯»κ¦Όκ¦½β³Follow Instagram: *@aingang028*
β£π₯»κ¦Όκ¦½β³ YouTube: *Aing Ang*
β
ββββ±  βΈ¨ *TERIMAKASIH* βΈ©  β°ββββ¬
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

