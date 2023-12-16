import { Logo } from './logo/Logo';

export function NavBar({ children }) {

  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  )
}
