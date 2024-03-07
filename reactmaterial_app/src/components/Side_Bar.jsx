import { Grid, Link, Paper, Typography } from '@mui/material'
import React from 'react'

function Side_Bar({title, description, archives, social}) {
  return (
    <>
    <Grid item xs={12} md={4}>
        <Paper elevation={0} className='flex flex-col gap-2 p-4 my-10'>
            <Typography>
                {title}
            </Typography>
            <Typography>{description}</Typography>
        </Paper>

        <Typography variant='h5' gutterBottom>
            Archives
        </Typography>
        {
            archives.map((archive,index)=>(
                <Link display='block' variant='body1' href={archive.url} >
                {archive.title}
                </Link>
            ))
        }
    </Grid>
    </>
  )
}

export default Side_Bar