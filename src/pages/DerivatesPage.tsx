import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { AppLayout } from '../layouts'
import { BlockMath } from 'react-katex'



const NavItems = () => {
	return(
		<Box>
			<Flex as="kbd" color="cyan.400" mb="6" mt="8" fontSize={"md"}>NO DERIVABILIDAD</Flex>
			<Flex my="2" fontSize="md">Discontinuidad</Flex>
			<Flex my="2" fontSize="md">..</Flex>
			<Flex my="2" fontSize="md">Punto cuspidal</Flex>
			<Flex my="2" fontSize="md">Punto anguloso</Flex>
		</Box>
	)
}

const DerivatesPage = () => {

	return (
		<>
			<Flex justifyContent="center">
				<Heading as="h1" size={{ sm: 'lg', lg: 'xl'}}>Casos de no-derivabilidad</Heading>
				<Text></Text>
			</Flex>
			{/* <BlockMath math={`\\forall x\\in I \\int x^2 dx `} /> */}
		</> 
	)
}

export default DerivatesPage