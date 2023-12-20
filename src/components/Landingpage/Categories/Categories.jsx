import React, { useEffect, useState } from 'react'
import "./CategoriesStyle.css"
import img from "./banner_1.jpg"
import img2 from "./el.jpg"
import img3 from "./banner_3.jpg"
import img4 from "./bjd.webp"
import {useNavigate} from "react-router-dom"
import { GetAllCategories } from '../../Global/ProductState'
import { useDispatch } from 'react-redux'


const Categories = () => {
    const [categories, setCategories] = useState()
    const Nav = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(data=>{
              setCategories(data);
              dispatch(GetAllCategories(data));
            })
            .catch(err=>console.log(err))
    },[])

    console.log(categories);


  return (
    <div className='CategoriesBody'>
        <div className="CategoriesWrapper">
          {
            categories?.map((category, index)=>(
                <div className='CategoriesCardBody' style={{backgroundImage: category === "women's clothing" ? `url(${img})` : category === "men's clothing"? `url(${img3})` : category === "jewelery"? `url(${img4})` : category === "electronics"? `url(${img2})` :null }}>
                <div className='CategoriesCardTextBody' onClick={()=>Nav(`categories/${index}/${category}`)}>{category}</div>
            </div>
            ))
          }
        </div>
    </div>
  )
}

export default Categories