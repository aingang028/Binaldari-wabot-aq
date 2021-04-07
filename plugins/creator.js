let handler = function (m) {
  // this.sendContact(m.chat, '6289508963104, 'Nurutomo', m)
  this.sendContact(m.chat, '6289508963104', 'kapten Ang', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
