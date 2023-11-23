import styles from './index.module.scss'
import { Navbar, NavbarProps } from '@helix-ai/react-shared-ui'
import { Box, Grid, Typography } from '@mui/material'
import HomeCard from '../Components/home-card/HomeCard'

export interface appProps {
  navbar: NavbarProps
}

const props: appProps = {
  navbar: {
    pages: ['About', 'News', 'Technology', 'Contact'],
    settings: ['Profile', 'Account', 'Dashboard', 'Logout'],
    logo: '/images/Favicon-01.png',
  },
}

export function Index() {
  return (
    <>
      <Navbar
        pages={props.navbar.pages}
        settings={props.navbar.settings}
        logo={props.navbar.logo}
      />
      <Box
        sx={{
          padding: 10,
        }}
      >
        <Grid
          container
          spacing={6}
          sx={{
            padding: 5,
            alignItems: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            justifyItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Grid item>
            <HomeCard />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Index
