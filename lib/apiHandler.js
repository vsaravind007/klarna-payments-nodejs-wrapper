const request = require('request');
const CONFIG = require('./utils');

function generateAuth(username, password) {
    return "Basic " + new Buffer(username + ":" + password).toString("base64");
}

module.exports.createOrder = function(_config, authToken, orderObject) {
    return new Promise(function(resolve, reject) {
        let options = {
            url: CONFIG.URLS.API_URL(_config.isLive, _config.region) + CONFIG.URLS.NEW_ORDER_API_URL(false,authToken),
            headers: {
                'Authorization': generateAuth(_config.userName, _config.password),
                'content-type': 'application/json'
            },
            json: orderObject,
            method: 'POST'
        };
        //console.log('OPTIONS -> ', options)
        request(options,
            function(error, response, body) {
                if (error)
                    reject(error)
                try {
                    body = JSON.parse(body);
                } catch (e) {
                    console.log('already json');
                }

                if (body.hasOwnProperty('error_code'))
                    reject(body)
                else
                    resolve(body)
            });
    })
}

module.exports.createRecurringOrder = function(_config, authToken, orderObject) {
    return new Promise(function(resolve, reject) {
        let options = {
            url: CONFIG.URLS.API_URL(_config.isLive, _config.region) + CONFIG.URLS.NEW_ORDER_API_URL(true,authToken),
            headers: {
                'Authorization': generateAuth(_config.userName, _config.password),
                'content-type': 'application/json'
            },
            json: orderObject,
            method: 'POST'
        };
        //console.log('OPTIONS -> ', options)
        request(options,
            function(error, response, body) {
                if (error)
                    reject(error)
                try {
                    body = JSON.parse(body);
                } catch (e) {
                    console.log('already json');
                }

                if (body.hasOwnProperty('error_code'))
                    reject(body)
                else
                    resolve(body)
            });
    })
}

module.exports.generateCustomerToken = function(_config, authToken, orderObject) {
    return new Promise(function(resolve, reject) {
        let options = {
            url: CONFIG.URLS.API_URL(_config.isLive, _config.region) + CONFIG.URLS.NEW_CUSTOMER_TOKEN_API_URL(authToken),
            headers: {
                'Authorization': generateAuth(_config.userName, _config.password),
                'content-type': 'application/json'
            },
            json: orderObject,
            method: 'POST'
        };
        //console.log('OPTIONS -> ', options)
        request(options,
            function(error, response, body) {
                if (error)
                    reject(error)
                try {
                    body = JSON.parse(body);
                } catch (e) {
                    console.log('already json');
                }

                if (body.hasOwnProperty('error_code'))
                    reject(body)
                else
                    resolve(body)
            });
    })
}

module.exports.createCreditSession = function(_config, sessionObject) {
    return new Promise(function(resolve, reject) {
        let options = {
            url: CONFIG.URLS.API_URL(_config.isLive, _config.region) + CONFIG.URLS.NEW_CREDIT_SESSION_API_URL,
            headers: {
                'Authorization': generateAuth(_config.userName, _config.password),
                'content-type': 'application/json'
            },
            json: sessionObject,
            method: 'POST'
        };
        //console.log(options)
        request(options,
            function(error, response, body) {
                if (error)
                    reject(error)
                try {
                    body = JSON.parse(body);
                } catch (e) {
                    console.log('already json');
                }

                if (body.hasOwnProperty('error_code'))
                    reject(body)
                else
                    resolve(body)
            });
    })
}