import styles from './index.module.scss'
import { Card, Navbar, NavbarProps } from '@helix-ai/react-shared-ui'
import { Box, Grid } from '@mui/material'
import { AboutConstants } from '../../constants/About.constants'

export interface AboutProps {
  navbar: NavbarProps
}

const props: AboutProps = {
  navbar: {
    pages: ['About', 'News', 'Technology', 'Contact'],
    settings: ['Profile', 'Account', 'Dashboard', 'Logout'],
    logo: '/images/Favicon-01.png',
  },
}

export function About() {
  return (
    <>
      <Navbar
        pages={props.navbar.pages}
        settings={props.navbar.settings}
        logo={props.navbar.logo}
      />
      <Box
        sx={{
          paddingTop: 10,
          PaddingBottom: 20,
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: 'center',
            padding: 2,
          }}
        >
          {AboutConstants.map((card, index) => (
            <Grid item key={index}>
              <Card
                id={card.id}
                name={card.name}
                description={card.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default About
