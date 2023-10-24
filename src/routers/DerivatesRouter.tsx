import { Route, Routes } from 'react-router-dom'
import { DerivatesPage, CuestioneslogicasPage, NonDifferentiablePage } from '../pages'
import { AppLayout } from '../layouts'
import { Flex, Box } from '@chakra-ui/react'

const NavItems = () => {
	return(
		<Box>
			<Flex as="kbd" color="cyan.400" mb="6" mt="8" fontSize={"md"}>NO DERIVABILIDAD</Flex>
			{/* <Flex my="2" fontSize="md">Discontinuidad</Flex> */}
			<Flex my="2" fontSize="md">..</Flex>
			<Flex my="2" fontSize="md">Punto cuspidal</Flex>
			<Flex my="2" fontSize="md">Punto anguloso</Flex>
		</Box>
	)
}

const DerivatesRouter = () => {
	return (
		<AppLayout navItems={<NavItems />}>
			<Routes>
				<Route element={ <DerivatesPage /> } path='/' />
				<Route element={ <CuestioneslogicasPage /> } path='/cuestiones-logicas' />
				<Route element={ <NonDifferentiablePage /> } path='/non-differentiable' />
			</Routes>
		</AppLayout>
	)
}

export default DerivatesRouter;