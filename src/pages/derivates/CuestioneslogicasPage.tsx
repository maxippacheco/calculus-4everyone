import { Box, Flex, Heading, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import { BlockMath, InlineMath } from 'react-katex';

const sectionDescription = [
	{ text: "Implicacion directa" },
	{ text: "Contrareciproco" },
	{ text: "Cuantificadores" },
	{ text: "Existencial" },
	{ text: "Si solo si" },
	{ text: "Verdaderos y falsos" }
]

export const CuestioneslogicasPage = () => {
	
	return (
		<Flex m={"5"} flexDirection={"row"}>
			<Box flex="1">
				<Heading as="h1" size={'lg'}>Cuestiones de logica</Heading>

				{/* Implicacion directa */}
				<Heading as="h5" size="md" mt="3rem">Implicacion directa</Heading>
				<Box my="5">
					<InlineMath math={`A \\Rightarrow B `} />
				</Box>
				<List textAlign="justify" spacing={3}>
					<ListItem>
						<ListIcon as={AiFillStar} color="cyan.500" />
						Significa "A es suficiente para B", como que "B es necesario para A".
					</ListItem>
					<ListItem>
						<ListIcon as={AiFillStar} color="cyan.500" />
						Podemos recordarlo mediante la memotecnia "Suficiente implica necesario"(SiN).
					</ListItem>
				</List>

				{/* Contrareciproco */}
				<Heading as="h5" size="md" mt="3rem">Contrareciproco</Heading>
				<Box my="5">
					<InlineMath>
						\neg B \Rightarrow \neg A
					</InlineMath>
				</Box>
					<List textAlign="justify" spacing={3}>
					<ListItem>
						<ListIcon as={AiFillStar} color="cyan.500" />
							Significa "no B es suficiente no para A", como que "B es necesario para A".
						</ListItem>
					<ListItem>
						<ListIcon as={AiFillStar} color="cyan.500" />
						Sirve para demostraciones.
					</ListItem>
				</List>

				{/* Si solo si */}
				<Heading as="h5" size="md" mt="3rem">Si solo si</Heading>
				<Box my="5">
					<InlineMath>
						A \Leftrightarrow B
					</InlineMath>
				</Box>
				<List textAlign="justify" spacing={3}>
					<ListItem>
						<ListIcon as={AiFillStar} color="cyan.500" />
							Si y solo si. Si A es verdadero, B tambien, y si B es falso A tambien lo sera.
						</ListItem>
				</List>

				<Heading as="h2" size={'lg'} mt="3rem">Cuantificadores</Heading>

				{/* Existencial */}
				<Heading as="h5" size="md" mt="3rem">Existencial</Heading>
				<Box my="5">
					<InlineMath>
						\exists
					</InlineMath>
				</Box>
				<List textAlign="justify" spacing={3}>
					<ListItem>
						<ListIcon as={AiFillStar} color="cyan.500" />
							Al menos un elemento del conjunto cumple con esa propiedad.
						</ListItem>
				</List>

				{/* Universal */}
				<Heading as="h5" size="md" mt="3rem">Universal</Heading>
				<Box my="5">
					<InlineMath>
						\forall
					</InlineMath>
				</Box>
				<List textAlign="justify" spacing={3}>
					<ListItem>
						<ListIcon as={AiFillStar} color="cyan.500" />
							Al menos un elemento del conjunto cumple con esa propiedad.
						</ListItem>
				</List>

				{/* Verdaderos y falsos */}
				<Heading as="h5" size="md" mt="3rem">Verdaderos o falsos</Heading>
				
				{/* exists */}
				<Box my="5">
					<InlineMath>
						\exists
					</InlineMath>
				</Box>
				<List textAlign="justify" spacing={3}>
					<ListItem>
						<ListIcon as={AiFillStar} color="cyan.500" />
						Verdadero: hallar un ejemplo donde la propiedad mencionada se cumple.
					</ListItem>

					<ListItem>
						<ListIcon as={AiFillStar} color="cyan.500" />
						Falso: exponer una argumentacion de por que la propiedad nunca puede cumplirse.
					</ListItem>
				</List>

				{/* forall */}
				<Box my="5">
					<InlineMath>
						\forall
					</InlineMath>
				</Box>
				<List textAlign="justify" spacing={3}>
					<ListItem>
						<ListIcon as={AiFillStar} color="cyan.500" />
						Verdadero: exponer una argumentacion de por que la propiedad siempre debe cumplirse.
					</ListItem>

					<ListItem>
						<ListIcon as={AiFillStar} color="cyan.500" />
						Falso: debe mostrarse UN ejemplo donde la propiedad NO se cumple.
					</ListItem>
				</List>
			</Box>

			<Box flex="1" display={{ base: 'none', xl: 'block'}} position='sticky' zIndex="sticky" top="20px" >
				<Flex justifyContent="end">
					<List spacing={2}>
						<ListItem as="kbd" fontSize="lg" color="cyan.500">ON THIS PAGE</ListItem>
						{
							sectionDescription.map(({text}) => (
								<ListItem _hover={{textDecoration: 'underline', cursor:'pointer'}}>{text}</ListItem>
							))
						}
					</List>
				</Flex>
			</Box>
		</Flex>
	)
}
