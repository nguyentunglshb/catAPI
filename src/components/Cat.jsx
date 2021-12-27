const Cat = (props) => {

    return ( 
        <div className='cat-single'>
            {props.cat.image? (
                <div className='cat-img'>
                    <img src={ props.cat.image.url } alt={ props.cat.name } />
                </div>
            ) : (
                <p>No image</p>
            )}
            <div className="cat-body">
            <h3>{ props.cat.name }</h3>
                <p className='cat-origin'>{ props.cat.origin }</p>
                <p className='cat-id'><span>With id:</span> { props.cat.id }</p> 
                <p className='cat-des'><span>Description:</span> { props.cat.description }</p>
                <p className='cat-country'><span>Country code:</span> { props.cat.country_code }</p>
                <p className='cat-friendly'><span>Dog Friendly:</span> { props.cat.dog_friendly }</p>
                <p className='cat-energy'><span>Energy level:</span> { props.cat.energy_level }</p>
                <p className='cat-life'><span>Life span:</span> { props.cat.life_span } years</p>
            </div>
            
            
            
        </div>
     );
}
 
export default Cat;