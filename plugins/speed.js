let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  await m.reply('_Kalem Lurd rada nge lag..._')
  let neww = performance.now()
  m.reply(neww - old + 'ms')
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
module.exports = handler
