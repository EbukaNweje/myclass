import React, { useEffect, useState } from 'react'
import Data from "../data.json"
import { useDispatch, useSelector } from 'react-redux'
import { GetAllProduct, AddToCart } from '../Global/ProductState'
import MyCart from '../Landingpage/Categories/Categories'

const Work1 = () => {
    // const Mydata = Object.values(Data)
    const dispatch = useDispatch()
    
    const product = useSelector((state)=> state.persisitedReducer.allproducts )
    // console.log(product)
  
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>dispatch(GetAllProduct(data)))
            .catch(err=>console.log(err))
    },[])


    const AddCart = (e) => {
        dispatch(AddToCart(e))
        // const getCart = JSON.parse(localStorage.getItem('AddCart')) || []
        // const updatedItem = [...getCart, e]
        // localStorage.setItem("AddCart", JSON.stringify(updatedItem));
        // console.log(e)
    }


  return (
    <div>
      <MyCart/>
        {
            product?.map((p)=>(
               <>
                 <p>{p.title}</p>
                <button onClick={()=> AddCart(p)}>Add to cart</button>
               </>
            ))
        }
    </div>
  )
}

export default Work1