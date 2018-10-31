module.exports.URLS = {
    API_URL: function(isLive, region) {
        if (region === undefined)
            region = eu;
        if (isLive && region == 'eu')
            return 'https://api.klarna.com';
        if (isLive && region == 'us')
            return 'https://api-na.klarna.com';
        if (!isLive && region == 'eu')
            return 'https://api.playground.klarna.com';
        if (!isLive && region == 'us')
            return 'https://api-na.playground.klarna.com';
    },
    NEW_ORDER_API_URL: function(subscription, authToken) {
        return !subscription ? '/payments/v1/authorizations/' + authToken + '/order' : '/customer-token/v1/tokens/' + authToken + '/order'
    },
    NEW_CREDIT_SESSION_API_URL: '/payments/v1/sessions',
    NEW_CUSTOMER_TOKEN_API_URL: function(authToken) {
        return '/payments/v1/authorizations/' + authToken + '/customer-token';
    }
}

module.exports.ORDER_TYPES = {
    PHYSICAL: 'physical',
    DIGITAL: 'digital',
    DISCOUNT: 'discount',
    SHIPPING_FEE: 'shipping_fee',
    SALES_TAX: 'sales_tax',
    GIFT_CARD: 'gift_card',
    STORE_CREDIT: 'store_credit',
    SURCHARGE: 'surcharge'
}