import HelixRoutes from './app.routes'
import { NavbarProps } from '@helix-ai/libs/react-shared-ui'

export interface appProps {
  navbar: NavbarProps
}

const props = {
  navbar: {
    pages: ['About', 'News', 'Technology', 'Contact'],
    settings: ['Profile', 'Account', 'Dashboard', 'Logout'],
  },
}
export function App() {
  return <HelixRoutes navbar={props.navbar} />
}

export default App
