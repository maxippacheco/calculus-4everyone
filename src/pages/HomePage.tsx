import { AppLayout } from "../layouts/AppLayout"

const NavbarItems = () => {
  return(
    <div>Hola mundo</div>
  )
}

const HomePage = () => {

  return (
   <AppLayout navItems={<NavbarItems />}>
    <div>Hola</div>
   </AppLayout> 
  )
}

export default HomePage
