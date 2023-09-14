import { 
	useDisclosure,
	useColorModeValue, 
	Drawer, 
	DrawerContent, 
	Box 
} from '@chakra-ui/react'
import { SidebarContent, MobileNav } from '../components/ui'

interface Props{
	children: JSX.Element | JSX.Element[];
  navItems: JSX.Element | JSX.Element[];
}

export const AppLayout = ({ navItems, children }:Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent 
        onClose={ () => onClose } 
        display={{ base: 'none', md: 'block' }} 
        navbarItems={ navItems }
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent 
            onClose={onClose} 
            navbarItems={ navItems } 
          />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
				{ children }
      </Box>
    </Box>
  )
}
