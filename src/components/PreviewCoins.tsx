import React from 'react'; 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ReusableCard from './ReusableCard';

import '../styling.css';

const PreviewCoins: React.FC = () => {

  const sampleData = {
    name: "sign up to view NFTs",
    description: "View this and more NFTs with a Golddoubloons account!",
    cost: 7,
    eth_cost: 6000,
    slug: "placeholder"
  }

  const n = 3;

  return(
    <>
      <h3>These could be yours! Sign up today!</h3>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {[...Array(n)].map((e, i) =>
            <ReusableCard
              variant="rectangular" 
              width={345} 
              height={300} 
              key={i} 
              pressingData={sampleData}
              location={"preview"}
              ethCost={sampleData.eth_cost}
            />
          )}
        </Grid>
      </Box>
    </>
  )
}

export default PreviewCoins;