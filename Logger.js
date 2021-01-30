class Logger {
    /** 
     * @param {String} level warn | error | success
     * @param {String} logmessage this is for use with the logger message
     */
    constructor(level, logmessage) {

        this.message = logmessage

        switch (level) {
            case warn:
                this.warnException()
                break;
            case error:
                this.errorException()
                break
            case success:
                this.success()
            default:
                break;
        }
    }

    /**
     * @param {import('chalk').Chalk} color c o l o r s t y l e 
     */

    warnException(color) {
        console.warn(color.red(this.message))
    }

    /**
     * @param {import('chalk').Chalk} color c o l o r s t y l e 
     */

    errorException(color) {
        console.error(color.redBright(this.message))
    }

    /**
     * @param {import('chalk').Chalk} color c o l o r s t y l e 
     */

    success(color) {
        console.error(color.greenBright(this.message))
    }
}

module.exports = Logger;