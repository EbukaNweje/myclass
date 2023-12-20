import React from 'react'
import {useParams} from "react-router-dom"

const CategoriesPage = () => {
    const {categoriesname, id} = useParams()
  return (
    <div>{categoriesname} {id}</div>
  )
}

export default CategoriesPage