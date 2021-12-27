const Country = ({
    country: {
        name,
        capital, 
        flag,
        languages,
        population,
        currency
    }
}) => {
    const formatedCappital = capital.length > 0 ? 
        ( <>
            <span>Capital: </span> {capital}
        </>
        ) : (
            ''
        )
    console.log(capital);
    
    const formatedLanguage = languages.length > 1 ? 'Languages' : 'Language' 


    return ( 
        <div className="country">
            <div className="country_flag">
                <img src={flag} alt={name} />
            </div>
            <h3 className="country_name">{name.toUpperCase()}</h3>
            <div className="country_text">
                <p>{formatedCappital}</p>
                <p>
                    <span>{formatedLanguage}: </span>
                    {languages.map(language => language.name).join(', ')}
                </p>
                <p>
                    <span>Population: </span>
                    {population.toLocaleString()}
                </p>
                <p>
                    <span>Currency: </span>
                    {currency}
                </p>
            </div>
        </div>
     );
}
 
export default Country;