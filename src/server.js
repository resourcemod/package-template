const {events, chat, constants} = require('resourcemod')

events.onItemPickup((event) => {
    chat.sayToEveryone(`${event.player.name} just picked up ${event.item}.`, constants.HUD_PRINT_TALK);
})
