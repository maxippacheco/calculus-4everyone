import { Flex, Spinner } from '@chakra-ui/react'

export const Loader = () => {
	return (
		<Flex
		  width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
		>
			<Spinner
				thickness='7px'
				speed='0.75s'
				// emptyColor='gray.200'
				color='cyan.500'
				w={'100px'}
				h={'100px'}
			/>
		</Flex>
	)
}
