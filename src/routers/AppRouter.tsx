import { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { routes } from '.'
import { Loader } from '../components/ui'

export const AppRouter = () => {
	return (
		<Suspense fallback={ <Loader /> }>
			<BrowserRouter>
				<Routes>
					{
						routes.map(({ Component, path, to }) => (
							<Route path={ path} element={ <Component /> } key={ to } />
						))
					}
					<Route path="/*" element={ <Navigate to={ routes[0].to } replace />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	)
}
