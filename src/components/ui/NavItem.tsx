import { Box, Flex, Icon } from "@chakra-ui/react"
import { NavItemProps } from "../../interfaces/ui"
import { NavLink } from "react-router-dom"

export const NavItem = ({ icon, children, to, ...rest }: NavItemProps) => {
  return (
    <NavLink to={to}>
    <Box
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
		>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'red.400',
          color: 'white',
        }}
        { ...rest }
			>
        {
					icon && (
						<Icon
							mr="4"
							fontSize="16"
							_groupHover={{
								color: 'white',
							}}
							as={icon}
						/>
					)
				}

        { children }
      </Flex>
    </Box>
    </ NavLink>
  )
}
