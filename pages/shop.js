import React from 'react'
import { Box } from '@mui/material'
import client from '../lib/client'
import ProductCard from '../src/components/ProductCard'

const shop = ({ products }) => {
  return (
    <Box sx={{
      height: '100vh',
      width: '100vw',
      bgcolor: 'primary.dark',

    }}>
      <Box sx={{
        width: '50%',
        margin: '0 auto',
        minHeight: '100vh',
        backgroundColor: 'white',
      }}>
        <Box
          className="products"
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridGap: '2rem',
            padding: '2rem',
          }}
        >
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export async function getStaticProps() {
  const products = await client.fetch(`*[_type == "product"]`);

  return {
    props: {
      products
    }
  };
}

export default shop