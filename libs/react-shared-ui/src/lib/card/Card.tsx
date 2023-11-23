import styles from './Card.module.scss'
import {
  MicroserviceInterface,
  NewsInterface,
  TechnologyInterface,
} from '@helix-ai/entities'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

export interface CardProps {
  id: number | undefined
  name: string | undefined
  description: string | undefined
  content?: string | undefined
  image?: string | undefined
  alt?: string | undefined
  slug?: string | undefined
  website?: string
  imageSize?: {
    height: number | undefined
    width: number | undefined
  }
}

export function Card(props: CardProps) {
  return (
    <Box
      sx={{
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 2,
        maxWidth: 600,
        backgroundColor: 'rgba(36, 36, 36, 0.8)',
        border: '3px solid rgba(1, 17, 91)',
        borderRadius: 10,
        boxShadow: '10px 10px 10px rgba(25, 25, 25, 0.5)',
      }}
    >
      <Typography
        variant="h3"
        id="title"
        sx={{
          color: 'rgb(240, 234, 214)',
          padding: 2,
        }}
      >
        {props.name}
      </Typography>
      {props.image ? (
        <a href={props.website as string}>
          <Image
            src={props.image as string}
            alt={props.alt as string}
            height={(props.imageSize?.height as number) || 300}
            width={(props.imageSize?.width as number) || 300}
          />
        </a>
      ) : null}
      <Box
        sx={{
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 2,
          maxHeight: 350,
          backgroundColor: 'rgba(36, 36, 36, 0.8)',
          border: '3px solid rgba(1, 17, 91)',
          borderRadius: 10,
          color: 'rgb(240, 234, 214)',
          overflowY: 'scroll',
        }}
      >
        <Typography
          id="description"
          sx={{
            fontSize: 25,
          }}
        >
          {props.description}
        </Typography>
        <br />
        {props.content ? (
          <Typography
            id="content"
            sx={{
              fontSize: 25,
            }}
          >
            {props.content}
          </Typography>
        ) : null}
      </Box>
    </Box>
  )
}

export default Card
