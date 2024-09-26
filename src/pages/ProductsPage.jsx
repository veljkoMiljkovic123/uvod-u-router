import React, { useEffect, useState } from 'react'
import PostsService from '../services/postsServices'
import { toast } from 'react-toastify'
import SingleProductComponent from '../components/SingleProductComponent'

function ProductsPage() {

  const [singleProduct, setSingleProduct] = useState({})
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    PostsService.getSingleProduct()
      .then(res => {
        setSingleProduct(res.data)
        setLoading(true)
        console.log(res.data);
        
        toast.success('Uspesno su stigli podaci')
      })
      
      .catch(err => console.log(err)
      )
  },[])

  return (
    <div className='container mx-auto'>
      {loading?<SingleProductComponent product = {singleProduct}/>:<h2 className='text-4xl text-center'>Loading....</h2>}
    </div>
  )
}

export default ProductsPage