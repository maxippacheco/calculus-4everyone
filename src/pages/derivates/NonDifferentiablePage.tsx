import { Flex, Heading, Box, Text, Image } from "@chakra-ui/react"
import { BlockMath, InlineMath } from "react-katex"
import discontinuity from '../../assets/discontinuidad.png'

export const NonDifferentiablePage = () => {
	return (
		<Flex m={"5"} flexDirection={"row"}>
			<Box flex="1">
				<Heading as="h1" size={'lg'}>Casos de NO derivabilidad</Heading>

				{/* Caso 1: Discontinuidad */}
				<Box>
					<Heading as="h5" size="md" mt="3rem">Caso 1: Discontinuidad</Heading>
					<Text mt="2rem" align="justify">
						Para que una función sea continua, deben cumplirse varias condiciones: la función debe 
						existir en un punto, su límite debe existir y ser igual a la función en ese punto.
						Sin embargo, uno de los casos más frecuentes de no derivabilidad se relaciona con la discontinuidad. 
						Como sabemos, uno de los casos mas comunes de NO derivabilidad es la discontinuidad
						ya que: 
					</Text>
					<Box my="2">
						Si una funcion <InlineMath math={`f`} /> es <strong>derivable</strong> en <InlineMath math={`x_0`} /> entonces tambien es
						continua en <InlineMath math={`x_0`} />.
					</Box>
					<Text>Ejemplos de discontinuidad: </Text>
					<Flex justify="center" mt="2rem">
						<Image src={discontinuity} alt="Ejemplos de discontinuidad" />

					</Flex>
				</Box>

				{/* Caso 2: Punto anguloso */}
				<Box>
					<Heading as="h5" size="md" mt="3rem">Caso 2: Punto anguloso</Heading>
					<Text mt="2rem" align="justify">
						Ahora, pasemos al segundo caso en nuestra exploración de situaciones en las que las funciones no son derivables. 
						Este caso se refiere a los puntos angulosos. En lugar de cambios suaves en el comportamiento de una función, 
						los puntos angulosos nos muestran giros bruscos o saltos repentinos en su gráfico. Estos puntos misteriosos nos desafían 
						a entender cómo las funciones pueden dar cambios repentinos en su pendiente. Que una funcion tenga un punto anguloso en c quiere decir:
					</Text>
					<Flex justify="center">
						<InlineMath math="f'_+(c) " />
						<Text mx={2}>es diferente de </Text>
						<InlineMath math=" f'_-(c)"  />
					</Flex>
				</Box>

				{/* Caso 3: Punto cuspidal */}
				<Box>
					<Heading as="h5" size="md" mt="3rem">Caso 3: Punto cuspidal</Heading>
					<Text mt="2rem" align="justify">
						Un punto cúspide es como una esquina afilada en una curva matemática. En lugar de doblarse suavemente, la curva cambia de dirección de repente. 
						Estos puntos nos desafían a entender por qué ocurren y cómo afectan a las funciones. Esto ocurre cuando en x = c, las derivadas laterales son 
						infinitas pero distintas.
					</Text>
					<Flex justify="center" mt={2}>
						<InlineMath math="f'_+(c) " />
						<Text mx={2}>es diferente de </Text>
						<InlineMath math=" f'_-(c)"  />
						<Text mx={2}>; con ambos </Text>
						<InlineMath math="\infin"  />
					</Flex>
				</Box>
				{/* Caso 4: Recta tangente vertical */}
				<Box>
					<Heading as="h5" size="md" mt="3rem">Caso 3: Punto cuspidal</Heading>
					<Text mt="2rem" align="justify">
						Un caso intrigante en el mundo de las funciones matemáticas es la tangente vertical. En lugar de seguir una curva suave, 
						se trata de una línea recta que sube o baja verticalmente en el gráfico. Esto puede parecer extraño, ya que su pendiente es infinita. 
						Explorar la tangente vertical en Reacta nos desafía a comprender su singularidad y cómo se relaciona con las funciones matemáticas.
						Esto sucede cuando las derivadas laterales son iguales e infinitas
					</Text>
					<Flex justify="center" mt={2}>
						<InlineMath math="f'_+(c) = f'_-(c)" />
						<Text mx={2}>; con ambos </Text>
						<InlineMath math="\infin"  />
					</Flex>
				</Box>
			</Box>

		</Flex>
	)
}
