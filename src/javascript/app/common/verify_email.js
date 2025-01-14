const Cookies       = require('js-cookie');
const TrafficSource = require('../../app/common/traffic_source');

/* Contains helper function related to the verify_email API call */
const getFormRequest = () => {
    const utm_data = TrafficSource.getData();
    const affiliate_token = Cookies.getJSON('affiliate_tracking');

    return [
        { selector: '#email', validations: ['req', 'email'], request_field: 'verify_email' },
        { request_field: 'type', value: 'account_opening' },
        {
            request_field: 'url_parameters',
            value        : {
                ...utm_data,
                ...(affiliate_token && { affiliate_token: affiliate_token.t }),
            },
        },
    ];
};

module.exports = getFormRequest;
