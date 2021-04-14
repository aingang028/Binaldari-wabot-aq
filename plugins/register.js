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
User kamu Dibawah 👇

           ╔───────────────┐
           │ ABOUT YOU WITH BOT │
           └───────────────╝
           
┏━━⊱ 🧚🏿‍♂️❰ *INFO* ❱ 🧚🏿‍♂️⊰━━☬
┣𖥻ꦼꦽ➳ Nama: ${name}
┣𖥻ꦼꦽ➳ Umur: ${age}Tahun
┣𖥻ꦼꦽ➳SN: ${sn}
┣𖥻ꦼꦽ➳Command To Help *_#menu_*
│
┣𖥻ꦼꦽ➳Follow Instagram: *@aingang028*
┣𖥻ꦼꦽ➳ YouTube: *Aing Ang*
│
┗━━⊱  ⸨ *TERIMAKASIH* ⸩  ⊰━━━☬
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

