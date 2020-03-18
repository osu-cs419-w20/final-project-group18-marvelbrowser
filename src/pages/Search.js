import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

import AllComics from '../components/AllComics';
import AllCharacters from '../components/AllCharacters';

import { getApiRequestUrl, parseComicsList, parseCharactersList } from '../ApiHelper';

function Comics() {
    const [ comics, setComics ] = useState([]);
    const [ characters, setCharacters ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ doFetch, setDoFetch ] = useState(true);

    const [ formCategory, setFormCategory ] = useState("/comics");
    const [ categories ] = useState([
        { label: "Comics", value: "/comics" },
        { label: "Characters", value: "/characters" }
    ]);

    const [ formFormat, setFormFormat ] = useState("comic");
    const [ formats ] = useState([
        { label: "Comic", value: "comic" },
        { label: "Magazine", value: "magazine" },
        { label: "Trade Paperback", value: "trade paperback" },
        { label: "Hardcover", value: "hardcover" },
        { label: "Digest", value: "digest" },
        { label: "Graphic Novel", value: "graphic novel" },
        { label: "Digital Comic", value: "digital comic" },
        { label: "Infinite Comic", value: "infinite comic" }
    ])

    const [ formDateDescriptor, setFormDateDescriptor ] = useState("");
    const [ dateDescriptors ] = useState([
        { label: "All Time", value: "" },
        { label: "This Month", value: "thisMonth" },
        { label: "This Week", value: "thisWeek" },
        { label: "Last Week", value: "lastWeek" },
        { label: "Next Week", value: "nextWeek" }
    ]);

    const [ formNumResults, setFormNumResults ] = useState("25");
    const [ numResults ] = useState([
        { label: "10", value: "10" },
        { label: "25", value: "25" },
        { label: "50", value: "50" },
        { label: "100", value: "100" }
    ]);

    const [ formTitle, setFormTitle ] = useState("");

    useEffect(() => {
        document.title = "Search";
        console.log(comics);
        if (doFetch) {
            const controller = new AbortController();

            // Prep URL for Comic Search
            if (formCategory==="/comics") {
                async function fetchComics() {
                    let responseBody = {};
                    setLoading(true);
    
                    try {
                        var url = getApiRequestUrl(formCategory);
                        url += "&format=" + formFormat.toString();
                        url += "&formatType=comic"
                        url += "&noVariants=true"
                        if (formDateDescriptor != "")   { url += "&dateDescriptor=" + formDateDescriptor.toString(); }
                        if (formTitle != "")            { url += "&titleStartsWith=" + formTitle.toString(); }
                        if (formNumResults != "")       { url += "&limit=" + formNumResults.toString(); }
                        console.log(`making request: ${url}`);
                        const response = await fetch(
                            url
                        );
                        responseBody = await response.json();
                    } catch (e) {
                        if (e instanceof DOMException) {
                            console.log("request aborted");
                            console.log(e);
                        } else {
                            setError(true);
                            console.log(e);
                        }
                    }
    
                    setError(false);
                    setLoading(false);
                    setComics(parseComicsList(responseBody));
                }
                fetchComics();
            // Else, prep URL for Character Search
            } else if (formCategory==="/characters") {
                console.log('you made it this far');
                var url = getApiRequestUrl(formCategory);
                url += ""
                async function fetchCharacters() {
                    let responseBody = {};
                    setLoading(true);
    
                    try {
                        var url = getApiRequestUrl(formCategory);
                        if (formTitle != "") { url += "&nameStartsWith=" + formTitle.toString(); console.log(formTitle.toString()) }
                        if (formNumResults != "") { url += "&limit=" + formNumResults.toString(); }
                        console.log(`making request: ${url}`);
                        const response = await fetch(
                            url
                        );
                        responseBody = await response.json();
                    } catch (e) {
                        if (e instanceof DOMException) {
                            console.log("request aborted");
                            console.log(e);
                        } else {
                            setError(true);
                            console.log(e);
                        }
                    }
    
                    setError(false);
                    setLoading(false);
                    setCharacters(parseCharactersList(responseBody));
                }
    
                fetchCharacters();
            } else {
                console.log("Invalid Category");
                setError(true);
            }

            setDoFetch(false);
            return () => {
                controller.abort();
            };
        }
    }, [ doFetch ]);

    return (
        <div>
            <h1>Comic Search</h1>
            <br />
            { (formCategory === "/comics") ? 
            <div>
                <form>
                    <table>
                        <tr>
                            {console.log("formCategory: " + formCategory)}
                            <td>Category:</td>
                            <td>
                                <select name="categories" onChange={a => {setFormCategory(a.target.value); setDoFetch(true)}} value={formCategory}>
                                    {categories.map(category => (
                                    <option key={category.value} value={category.value}>{category.label}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>Title:</td>
                            <td>
                                <input name="formTitle" onChange={b => {setFormTitle(b.target.value); setDoFetch(true)}} value={formTitle} placeholder="Title starts with..." type="text"/>
                            </td>                
                        </tr>

                        <tr>
                            {console.log("formFormat: " + formFormat)}
                            <td>Format:</td>
                            <td>
                                <select name="formats" onChange={c => {setFormFormat(c.target.value); setDoFetch(true)}} value={formFormat}>
                                    {formats.map(format => (
                                    <option key={format.value} value={format.value}>{format.label}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>

                        <tr>
                            {console.log("formDateDescriptor: " + formDateDescriptor)}
                            <td>Date Descriptor:</td>
                            <td>
                                <select name="dateDescriptors" onChange={d => {setFormDateDescriptor(d.target.value); setDoFetch(true)}} value={formDateDescriptor}>
                                    {dateDescriptors.map(dateDescriptor => (
                                    <option key={dateDescriptor.value} value={dateDescriptor.value}>{dateDescriptor.label}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>

                        <tr>
                            {console.log("formNumResults: " + formNumResults)}
                            <td>Display:</td>
                            <td>
                                <select name="numResults" onChange={e => {setFormNumResults(e.target.value); setDoFetch(true)}} value={formNumResults}>
                                    {numResults.map(num => (
                                    <option key={num.value} value={num.value}>{num.label}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    </table>
                </form>

                {loading && <div>Fetching data...<br /></div>}
                {error && <div>ERROR!<br /></div>}
                {(!loading) && (comics.length==0) ? <h3>No Results</h3> : ""}

                <AllComics comics={comics} />
            </div>
            :
            <div>
                <form>
                    <table>
                        <tr>
                            {console.log("formCategory: " + formCategory)}
                            <td>Category:</td>
                            <td>
                                <select name="categories" onChange={a => {setFormCategory(a.target.value); setDoFetch(true)}} value={formCategory}>
                                    {categories.map(category => (
                                    <option key={category.value} value={category.value}>{category.label}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>Name:</td>
                            <td>
                                <input name="formTitle" onChange={b => {setFormTitle(b.target.value); setDoFetch(true)}} value={formTitle} placeholder="Name starts with..." type="text"/>
                            </td>                
                        </tr>

                        <tr>
                            {console.log("formNumResults: " + formNumResults)}
                            <td>Display:</td>
                            <td>
                                <select name="numResults" onChange={d => {setFormNumResults(d.target.value); setDoFetch(true)}} value={formNumResults}>
                                    {numResults.map(num => (
                                    <option key={num.value} value={num.value}>{num.label}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    </table>
                </form>

                {loading && <div>Fetching data...<br /></div>}
                {error && <div>ERROR!<br /></div>}
                {(!loading) && (comics.length==0) ? <h3>No Results</h3> : ""}

                <AllCharacters characters={characters} />
            </div>
            }
            

                    {/* INTENTIONALLY DISABLED (but feel free to implement it if you really want to) */}

        </div>
    );
}

export default Comics;
