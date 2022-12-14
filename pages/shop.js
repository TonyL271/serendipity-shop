import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import client from '../lib/client'
import ProductCard from '../src/components/ProductCard'
import { CustomAlert } from '../src/components'

const shop = ({ products, testProducts }) => {
  const [showAlert, setShowAlert] = useState(false)

  return (
    <Box sx={{
      minHeight: 'calc(100vh- 80px)',
      width: '100vw',
      bgcolor: 'primary.dark',

    }}>
      <Box sx={{
        width: '60%',
        margin: '0 auto',
        minHeight: '100vh',
        backgroundColor: 'white',
      }}>
        <Box
          className="products"
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr));',
            gridGap: '3rem',
            padding: '3rem',
          }}
        >
          {products.map(product => (
            <ProductCard key={product._id} product={product} setShowAlert={setShowAlert} />
          ))}
          {Array(20 - products.length).fill(0).map((num, index) => (
            <ProductCard key={index} product={testProducts[0]} />
          ))}

        </Box>
      </Box>
      <CustomAlert message="Added to cart" showAlert={showAlert} />
    </Box>
  )
}

export async function getStaticProps() {
  const products = await client.fetch(`*[_type == "product"]`);
  const testProducts = await client.fetch(`*[_type == "testing"]`);

  return {
    props: {
      products,
      testProducts
    }
  };
}

export default shop