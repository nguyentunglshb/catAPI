import { Fragment } from "react/cjs/react.production.min"
import Country from "./Country"
import { useState, useEffect } from "react"
import axios from "axios"



const Home = () => {

    const [data, setData] = useState([])
    // useEffect(() => {
    //     const url = 'https://restcountries.eu/rest/v2/all'
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    //         .catch(err => console.log(err))
    // }, [])

    // useEffect(() => {
    //     fetchCountryData()
    // }, [])
    // const fetchCountryData = async () => {
    //     const url = 'https://restcountries.eu/rest/v2/all'
    //     const res = await fetch(url)
    //     const data = await res.json()
    //     console.log(data);
    //     setData(data)
    // }

    // useEffect(() => {
    //     const url = 'https://restcountries.eu/rest/v2/all'
    //     axios 
    //         .get(url)
    //         .then(res => {
    //             setData(res.data)
    //             console.log(res.data);
    //         })
    //         .catch(err =>  {
    //             console.log(err);
    //         })
    // }, [])
    useEffect(() => {
        fetchCountryData()
    }, [])

    const fetchCountryData = async () => {
        const url = 'https://restcountries.eu/rest/v2/all'
        try {
            const res = await axios.get(url)
            const data = await res.data
            console.log(data);
            setData(data)
        } catch(err) {
            console.log(err);
        }
    }
    
    return ( 
        <Fragment>
            <h1>This is home component</h1>
            <h1>Calling API</h1>
            <div>
                <p>There are {data.length} countries in the api</p>
                <div className="countries_wrapper">
                    {data.map(country => <Country country={ country } key={ country.name } />)}
                </div>
            </div>
        </Fragment>
     );
}
 
export default Home;