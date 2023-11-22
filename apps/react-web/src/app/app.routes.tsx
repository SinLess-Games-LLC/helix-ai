import { Route, Routes } from 'react-router-dom'
import { NavbarProps } from '@helix-ai/libs/react-shared-ui'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'

export interface routeProps {
  navbar: NavbarProps
}

export function HelixRoutes(props: routeProps) {
  return (
    <Routes>
      <Route path="/" element={<Home navbar={props.navbar} />} />
      <Route path="/About" element={<About navbar={props.navbar} />} />
      <Route path="News" />
      <Route path="Technology" />
      <Route path="Contact" />
    </Routes>
  )
}

export default HelixRoutes
