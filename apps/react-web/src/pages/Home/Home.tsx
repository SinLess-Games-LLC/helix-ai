import styles from './Home.module.scss'
import { Navbar, NavbarProps } from '@helix-ai/libs/react-shared-ui'

/* eslint-disable-next-line */
export interface HomeProps {
  navbar: NavbarProps
}

export function Home(props: HomeProps) {
  return (
    <div>
      <Navbar pages={props.navbar.pages} settings={props.navbar.settings} />
    </div>
  )
}

export default Home
