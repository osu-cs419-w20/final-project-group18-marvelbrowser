import md5 from 'md5';
import urljoin from 'url-join';

import ApiKey from './apikey';

/**
 * Get a full URL to communicate with the Marvel API
 * It will properly sign the request and make it ready to send
 * 
 * @param {str} path the API endpoint to query
 * @returns {str}
 */
export function getApiRequestUrl(path) {
    var base = "https://gateway.marvel.com/v1/public/"
    var fullUrl = urljoin(base, path);

    // sign the request
    var ts = Date.now();
    var msg = `${ts}${ApiKey.privateKey}${ApiKey.publicKey}`;
    var hash = md5(msg);

    fullUrl += `?apikey=${ApiKey.publicKey}&ts=${ts}&hash=${hash}`;

    return fullUrl;
}

/**
 * Parse the data from the /characters endpoint by only saving
 * what we care about
 * 
 * @param {object} data the raw JSON data returned from the API
 * @returns {object}
 */
export function parseCharactersList(data) {
    var characters = [];
    
    console.log(data.data.results);
    data.data.results.forEach(c =>  {
        characters.push({
            id: c.id,
            name: c.name
        });
    });

    return characters;
}