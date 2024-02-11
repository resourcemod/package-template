const {events, chat, constants} = require('resourcemod')

events.onClientConnect((event) => {
    chat.sayToEveryone(`${event.getPlayer().getName()} connected.`, constants.HUD_PRINT_TALK);
})
