import React, { useState } from 'react'
import { useGetPOSCategoryByIdQuery, useGetPOSCategoryQuery } from '../all-products/allproductsApi/allProductsApi'
import { Link } from 'react-bootstrap-icons';

function PosCategory({ bringPosCategoryId, showCategoryBox, setShowCategoryBox }) {
    const [abc, setAbc] = useState(false);
    const [getCategId, setGetCategId] = useState()

    const { isLoading, data } = useGetPOSCategoryQuery({token: window.localStorage.getItem('token')});
    const { data: categoryProducts } = useGetPOSCategoryByIdQuery({ val: getCategId, token: window.localStorage.getItem('token') });
    // console.log('dataPosCateg-----------', data)

    const showProd = (id) => {
        bringPosCategoryId(id)
        setGetCategId(id)
        setShowCategoryBox(false)
        setAbc(true)
    }

    return (
        <>
            <div className={showCategoryBox ? 'categories-box active' : 'categories-box'}>
                <div className='rel-box'>
                    <ul className='categ_prod_wrapper' style={{height:"600px",overflow:"auto"}}>
                        {data && data.map((item, i) => {
                            return <li style={{cursor:"pointer"}} key={i} onClick={() => showProd(item.uid)}>
                                <figure>
                                    <img src={item.icon?.url}></img>
                                </figure>
                                <figcaption>
                                    <p>{item.name}</p>
                                </figcaption>
                            </li>
                        })}
                    </ul>
                    <button type='button' onClick={() => setShowCategoryBox(false)} className='cross'>X</button>
                </div>
            </div>

            {abc && <div>
                <ul className='categ_prod_wrapper' style={{height:"600px",overflow:"auto"}}>
                    {categoryProducts && categoryProducts.map((item, i) => {
                        return <li style={{cursor:"pointer"}} key={i} onClick={() => showProd(item.uid)}>
                            <figure>
                                <img src={item.variations[0]?.mainImage_url.url}></img>
                            </figure>
                            <figcaption>
                                <p>{item.name}</p>
                            </figcaption>
                        </li>
                    })}
                </ul>
            </div>}
        </>
    )
}

export default PosCategory