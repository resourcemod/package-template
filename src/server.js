const {events, chat, constants} = require('resourcemod')

events.onClientConnect((event) => {
    chat.sayToEveryone(`${event.getSteamId()} connected.`, constants.HUD_PRINT_TALK);
})
