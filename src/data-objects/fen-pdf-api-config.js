export const fenPdfApiConfig = {

    /**
     * required in order to use api mode, just the uri to the endpoint
     * @property {String} endpointUri - The endpoint as a just the uri, no hostname
     */
    endpointUri: "",

    /**
     * defaults to base64 as the return response. It's up to the server as to what it sends back, so the implementing
     * client needs to just set this appropriately
     * @property {String} format - base64 or binary
     */
    format: "base64",

    /**
     * any headers that should be sent with the api request
     * @property {Object} headers - simple JSON object of "header name": "header value" pairs
     */
    headers: {},

    /**
     * anything needed to authenticate with the api
     * @property {Object} auth - Object containing further configuration to authenticate an api request
     * @property {String} auth.type - null to just use the session, basic for basic http, oauth for token based
     * @property {String} auth.username - username needed for oauth or basic
     * @property {String} auth.password - password needed for oauth or basic
     * @property {String} auth.bearerToken - The token as a simple string
     * @property {String} auth.grantType - Defaults to password_grant
     */
    auth: {

        type: null,

        username: "",

        password: "",

        bearerToken: "",

        grantType: "password_grant"
    },

    /**
     * The api driver that should be used to make a call. defaults to axios
     * @property {String} driver - The library to use for network requests, only axios is available at present
     */
    driver: "axios",

    /**
     * HTTP method that the endpoint expects for reading data
     * @property {String} methodRead - any valid HTTP method, defaults to GET. NOTE: be reasonable. Don't return data with DELETE
     */
    methodRead: "GET",

    /**
     * @property {String} methodWrite - Any valid HTTP method, defaults to POST. NOTE: be reasonable. Don't write data with DELETE or GET
     */
    methodWrite: "POST",

    /**
     * if used, call this function after the request is completed, passing the request response and associated as param
     * @property {Function} responseCallback - function that will be passed the data, response code, and generic pass/fail flag
     * @param {Object} data - object containing just the data from the response
     * @param {Number} httpResponseCode - Numeric and valid HTTP response code
     * @param {Boolean} wasSuccess - Simple flag to check for success or error. Should not be used as the only way to find a problem
     */
    // eslint-disable-next-line no-unused-vars
    responseCallback: (data, httpResponseCode, wasSuccess) => {},

    /**
     * @property {Object} response - a cached copy of the api response
     * @property {Object} response.data - The data for the response as it would be passed to the callback
     * @property {Object} response.responseCode - HTTP response code of the cached response as it would be passed to the callback
     */
    response: {
        data: {},
        responseCode: null
    }
};
