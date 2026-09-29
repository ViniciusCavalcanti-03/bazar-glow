import { useState } from "react";
import {useSearchParams} from 'react-router-dom'
import ProductFilter from "./ProductFilter";
import ProductsContainer from "./ProductsContainer";
const HomeMain = () =>{
    const[searchParams,setSearchParams] = useSearchParams()
return (
    <>
        <ProductFilter  setSearchParams={setSearchParams}/>
        <ProductsContainer searchParams={searchParams} /> 
    </>
    
    );
}

export default HomeMain