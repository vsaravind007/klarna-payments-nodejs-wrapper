const apiHandler = require('./lib/apiHandler');
const config = require('./lib/utils');
const Ajv = require('ajv');
const requestSchemas = require('./lib/requestSchemas');
const chalk = require('chalk');

class Klarna {

    throwError(error) {
        throw new Error(chalk.red(error));
    }

    showInfo(info) {
        if (this._debugMode)
            console.info('[Klarna] ' + info);
    }

    showLog(log) {
        if (this._debugMode)
            console.log('[Klarna] ' + log);
    }

    constructor(config) {
        this._debugMode = false;
        if (!config)
            this.throwError('Missing Klarna Merchant Config');
        if (!config.hasOwnProperty('userName') || config.userName == '')
            this.throwError('Invalid/Missing userName')
        else
            this._username = config.userName;
        if (!config.hasOwnProperty('password') || config.password == '')
            this.throwError('Invalid/Missing password')
        else
            this._password = config.password;
        if (!config.hasOwnProperty('region'))
            this.showInfo('Region not defined, using EU by default')
        else
            this._region = config.region;
        if (config.hasOwnProperty('debugEnabled') && (config.debugEnabled === true || config.debugEnabled == 'true'))
            this._debugMode = true;
        if (config.hasOwnProperty('testMode') && (config.testMode === false || config.testMode == 'false'))
            this._testMode = false;
        else {
            this._testMode = true;
            this.showInfo('Running in test mode');
        }

        this._config = {
            userName: this._username,
            password: this._password,
            isLive: !this._testMode,
            region: this._region
        }
    }



    newOrder(authToken, orderObject) {
        return apiHandler.createOrder(this._config, authToken, orderObject)
    }

    newRecurringOrder(authToken, orderObject) {
        return apiHandler.createRecurringOrder(this._config, authToken, orderObject)
    }

    generateCustomerToken(authToken, orderObject) {
        if (!authToken)
            return Promise.reject('Auth token missing');
        return apiHandler.generateCustomerToken(this._config, authToken, orderObject)
    }

    newCreditSession(sessionObject) {
        let ajv = new Ajv();
        let validate = ajv.compile(requestSchemas.newSessionSchema);
        let validSchema = validate(sessionObject);
        if (!validSchema)
            this.throwError(JSON.stringify(validate.errors));
        return apiHandler.createCreditSession(this._config, sessionObject)
    }
}

module.exports = Klarna;