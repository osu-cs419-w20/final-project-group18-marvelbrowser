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
 * @returns {Array}
 */
export function parseCharactersList(data) {
    var characters = [];
    
    data.data.results.forEach(c => {
        characters.push({
            id: c.id,
            name: c.name,
            photoUrl: `${c.thumbnail.path}.${c.thumbnail.extension}`
        });
    });

    return characters;
}

/**
 * Parse the data for a single character from /characters/:id
 * 
 * @param {object} data the raw JSON data returned from the API
 * @returns {object}
 */
export function parseCharacter(data) {
    var myData = data.data.results[0];
    var info = {
        id: myData.id,
        name: myData.name,
        photoUrl: `${myData.thumbnail.path}.${myData.thumbnail.extension}`
    }

    return info;
}

/**
 * Parse data from /characters/:id/comics
 * 
 * @param {object} data the raw JSON data returned from the API
 * @returns {Array}
 */
export function parseCharacterComicsList(data) {
    var comics = [];

    data.data.results.forEach(c => {
        comics.push({
            id: c.id,
            title: c.title,
            photoUrl: `${c.thumbnail.path}.${c.thumbnail.extension}`,
        })
    });

    return comics;
}