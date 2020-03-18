import React, { useState, useEffect } from 'react';
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import fetch from 'isomorphic-unfetch';

import AllCharacters from '../components/AllCharacters';
import Character from '../components/Character';

import APIKey from '../../apikey';

function Characters() {
    const { id } = useParams();
    const { path } = useRouteMatch();

    const [ characters, setCharacters ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        let ignore = false;
        const controller = new AbortController();

        async function fetchCharacters() {
            let responseBody = {}
            setLoading(true);
            try {
                
            }
        }
    })

    if (id) {
        // render a single character
    } else {
        // render the list
        return (
			<Switch>
				<Route exact path={`${path}`}>
					<h1>Please select a character</h1>
				</Route>
				<Route path={`${path}/:id`}>
					<Character />
				</Route>
			</Switch>
		);
    }
}

export default Characters;