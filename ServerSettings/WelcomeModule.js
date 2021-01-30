let {MessageEmbed} = require("discord.js");

class Welcome {



    constructor(username, servername) {

        this.name = username
        this.server = servername
        this.userText = "Welcome [user.name] to [server.name]! :heart:"

        this.WelcomeUser = new MessageEmbed()

        .setTitle('Welcome! :wave:')

        .setDescription(this.userText)

        .setTimestamp()

        //this.replace()
        //this.ifNull()

    }

    /**
     * 
     * @param {Welcome} text 
     */
    replace(text) {
        text.userText.replace("[user.name]", text.name)
        text.userText.replace("[server.name]", text.server)
    }

    /**
     * @param {Welcome} exception
     */
    ifNull(exception) {
        if (typeof exception.name === 'undefined')
            throw new Error("Name must not be null!")
        if(typeof exception.server === 'undefined')
            throw new Error("Servername must not be null!") 
    } 
}

module.exports = Welcome;