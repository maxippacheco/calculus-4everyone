import { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { routes } from '.'

export const AppRouter = () => {
	return (
		<Suspense fallback={ <div> Loading </div> }>
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
