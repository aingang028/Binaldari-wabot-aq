let handler = async (m, { conn, args }) => {
  throw // Fitur belum jadi :)
  if (!args[0]) throw 'Uhm...url nya mana?'
  global.API('xteam', '/dl/twitter', {
    url: args[0]
  }, '833f655ae5e773e9')
  conn.sendFile(m.chat, undefined, '', '', m)
}
handler.help = [].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^$/i

module.exports = handler
