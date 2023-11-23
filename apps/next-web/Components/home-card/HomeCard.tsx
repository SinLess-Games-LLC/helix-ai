import styles from './HomeCard.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import image from '../../public/images/Favicon-01.png'

/* eslint-disable-next-line */
export interface HomeCardProps {}

export function HomeCard(props: HomeCardProps) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        minWidth: 300,
        maxWidth: 1300,
        backgroundColor: 'rgba(36, 36, 36, 0.8)',
        border: '3px solid rgba(1, 17, 91)',
        borderRadius: 10,
        boxShadow: '10px 10px 10px rgba(25, 25, 25, 0.5)',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: 'rgb(240, 234, 214)',
        }}
      >
        Helix Ai
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        <Grid
          item
          xs={0}
          sm={5}
          md={5}
          lg={5}
          xl={5}
          sx={{
            justifyContent: 'center',
            padding: 5,
            display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex' },
          }}
        >
          <Image src={image} alt="Helix Logo" height={400} width={400} />
        </Grid>
        <Grid
          item
          xs={10}
          sm={8}
          md={8}
          lg={7}
          xl={7}
          sx={{
            padding: '4vw',
            alignSelf: 'center',
            display: { xs: 'flex', sm: 'flex' },
          }}
        >
          <Typography
            sx={{
              color: 'rgb(240, 234, 214)',
              fontSize: 20,
            }}
          >
            Helix Ai, is a cutting-edge platform at the forefront of innovation.
            Helix Ai redefines the landscape of technology and services. Rooted
            in a commitment to excellence, Helix seamlessly integrates
            state-of-the-art solutions and visionary strategies to empower
            businesses, elevate user experiences, and foster unparalleled
            growth. With a foundation built on expertise, adaptability, and a
            passion for pushing boundaries, Helix transcends conventional
            boundaries to deliver comprehensive solutions that propel
            organizations into the future. Welcome to Helix, where innovation
            meets impact, and possibilities are limitless.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomeCard
