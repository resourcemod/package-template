const {events, chat} = require('resourcemod')

events.onPlayerChat((event) => {
    if (event.message.startsWith('!help')) {
        event.player.say(`${chat.Colors.Blue} Hello!`)
        event.player.say(`${chat.Colors.Red} Please, read resourcemod docs first:`)
        event.player.say(`${chat.Colors.DarkRed} https://rmod.dev/`)
    }
})