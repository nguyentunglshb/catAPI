import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { CatContext } from "../contexts/CatContext";
import { BsSun } from 'react-icons/bs'
import { FaCloudRain } from 'react-icons/fa'
import Cat from "./Cat";

const CatContainer = () => {
    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const url = 'https://api.thecatapi.com/v1/breeds'
        const getData = setTimeout(
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
        , 1000)

        return clearTimeout(getData)
        
    }, [])

    const { theme, toggleTheme } = useContext(CatContext)
    const { isLight, light, dark } = theme
    const style = isLight ? light : dark

    const { auth, toggleAuth } = useContext(AuthContext)

    return ( 
        <div style={ style } className='cat-container'>
            <button onClick={ toggleAuth }>
                {!auth ? 'Log out' : 'Log in'}
            </button>
            {isLoaded ? (
                <div>
                {!auth ? (
                    <>
                        <h1>Calling API</h1>
                        <div>
                            <p className='title'>There are { data.length } type of cats in the API</p>
                            <div className="custom-btn">
                                <div className={isLight ? 'toggle-btn' : 'toggle-btn active'}  onClick={toggleTheme}>
                                    <button className="inner-circle">
                                    {isLight ? <BsSun /> : <FaCloudRain />}
                                    </button>
                                </div>
                            </div>
                            
                            <div className="cat-wrapper">
                                { data.map(cat => {
                                    return (
                                        <Cat cat={ cat } key={ cat.name }/>
                                    );
                                })}
                            </div>
                        </div>
                    </>
                ) : (
                    <p>U have to log in first</p>
                )}
            </div>
            ) : (
                <div className="bar-container">
                    <div className="progress-bar"></div>
                </div>
            )}
        </div>
     );
}
 
export default CatContainer;