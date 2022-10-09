import React from 'react'
import { Box } from '@mui/material'
import client from '../lib/client'
import { testClient } from '../lib/client'
import ProductCard from '../src/components/ProductCard'

const shop = ({ products, testProducts }) => {
  return (
    <Box sx={{
      minHeight: '100vh',
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
          {Array(20 - products.length).fill(0).map((num, index) => (
            <ProductCard key={index} product={testProducts[0]} />
          ))}

        </Box>
      </Box>
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