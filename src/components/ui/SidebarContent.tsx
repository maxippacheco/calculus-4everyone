import { 
	Box, 
	CloseButton, 
	useColorModeValue, 
	Flex, 
	Text 
} from "@chakra-ui/react"

import { SidebarProps } from "../../interfaces/ui"

import { NavItem } from "."
import { routes } from "../../routers"


export const SidebarContent = ({ navbarItems, onClose, id, ...rest }: SidebarProps) => {
  return (
    <Box
      // transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {
				routes.map((link) => (
          <div key={link.path}>
            <Flex
              align="center"
              p="4"
              mx="4"
              borderRadius="lg"
              role="group"
              key={link.path}  
            >
              {/* <Text as="kbd">Typography</Text> */}
            </Flex>
            <NavItem key={ link.name } icon={ link.icon } to={ link.to }>
            { link.name }
            </NavItem> 
          </div>
      	))
			}

      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
      >
        { navbarItems }
        
      </Flex>

    </Box>
  )
}

