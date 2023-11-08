import React from 'react'
import { Box, Container, Typography, Grid } from '@mui/material'
import Page from '../../common/Page'

// ----------------------------------------------------------------------


const Dashboard = () => {

	return (
		<Page title="Bebidas | Dashboard">
			<Container maxWidth="xl">
				<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Typography sx={{ mt: 3, fontWeight: 'bold' }} variant='h5'></Typography>
					<Typography sx={{ mt: 3, fontWeight: 'bold' }} variant='h2'></Typography>
				</Box>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={12}>
						<img src='/images/huy.jpg' alt='...' style={{ position: 'absolute', width: '90%', height: 'auto', marginTop: 40 }} />
					</Grid>
				</Grid>
			</Container>
		</Page>
	)
}

export default Dashboard