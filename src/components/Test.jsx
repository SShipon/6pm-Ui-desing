import React, { useEffect, useState } from 'react';

const Test = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data =>console.log(data))
    }, []);
  
   
    return (
        <div>
            <p>Product -------------{products.length}</p>
            {
                products.map(product =>{
                    <div>
                        <p>{product.name}</p>
                    </div>
                })
            }
        </div>
    );
};

export default Test;