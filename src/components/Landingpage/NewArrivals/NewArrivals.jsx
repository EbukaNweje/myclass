import React, { useState } from 'react'
import "./NewArrivalsStyle.css"
import AllProducts from './AllProduct';
import Electronic from "./Electronics";
import JEWELERY from "./Jewelery";
import Mens from "./Mens";
import WOMEN from "./Womens";

const NewArrivals = () => {
    const [allProductsdata, setAllProductsData] = useState(true)
    const [electronicdata, setElectronicData] = useState(false)
    const [jewelerydata, setjeweleryData] = useState(false)
    const [mensdata, setMensData] = useState(false)
    const [womendata, setWomenData] = useState(false)


    const changeStateAllproduct = () =>{
        setAllProductsData(true);
        setElectronicData(false);
        setjeweleryData(false);
        setMensData(false);
        setWomenData(false);
    }

    const changeStateele = () =>{
        setAllProductsData(false);
        setElectronicData(true);
        setjeweleryData(false);
        setMensData(false);
        setWomenData(false);
    }

    const changeStatejew = () =>{
        setAllProductsData(false);
        setElectronicData(false);
        setjeweleryData(true);
        setMensData(false);
        setWomenData(false);
    }

    const changeStatmen = () =>{
        setAllProductsData(false);
        setElectronicData(false);
        setjeweleryData(false);
        setMensData(true);
        setWomenData(false);
    }

    const changeStatewomen = () =>{
        setAllProductsData(false);
        setElectronicData(false);
        setjeweleryData(false);
        setMensData(false);
        setWomenData(true);
    }





  return (
    <div className='NewArrivalsBody'>
        <article className='NewArrivalsTitle'>
            <h3>New Arrivals</h3>
        </article>
            <div className="MoveButton">
                <div className='MoveButtonWrapper'>
                    <div className={`BtnClick ${allProductsdata? "Active":null} `}  onClick={changeStateAllproduct}>All</div>
                    <div className={`BtnClick ${electronicdata? "Active":null} `} onClick={changeStateele}>ELECTRONICS</div>
                    <div className={`BtnClick ${jewelerydata? "Active":null} `} onClick={changeStatejew}>JEWELERY</div>
                    <div className={`BtnClick ${mensdata? "Active":null} `} onClick={changeStatmen}>MEN'S </div>
                    <div className={`BtnClick ${womendata? "Active":null} `} onClick={changeStatewomen}>WOMEN'S</div>
                </div>
            </div>
                <div className='Product'>
                 {
                    allProductsdata ? (<AllProducts />):             
                    electronicdata ? (<Electronic/>):
                    jewelerydata ? (<JEWELERY/>):
                    mensdata? (<Mens/>):
                    womendata ? (<WOMEN/>):
                    null
                 }
                </div>
    
    </div>
  )
}

export default NewArrivals