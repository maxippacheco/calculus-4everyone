import { LazyExoticComponent, lazy } from "react";
import { IconType } from "react-icons";
import { FiHome, FiLogIn } from "react-icons/fi";
import { TbMathFunctionY } from "react-icons/tb";



type JSXComponent = () => JSX.Element;

interface Route{
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
	icon: IconType;
}

const HomePage = lazy(() => import(/* webpackChunkName: "HomePage" */ '../pages/HomePage'))
const LoginPage = lazy(() => import(/* webpackChunkName: "LoginPage" */ '../pages/LoginPage'))
const DerivatesRouter = lazy(() => import(/* webpackChunkName: "LoginPage" */ './DerivatesRouter'))

export const routes: Route[] = [
	{
		path: '/home',
		to: '/home',
		Component: HomePage,
		name: 'Home',
		icon: FiHome
	},
	{
		path: '/login',
		to: '/login',
		Component: LoginPage,
		name: 'Login',
		icon: FiLogIn
	},
	{
		path: '/derivates/*',
		to: '/derivates',
		Component: DerivatesRouter,
		name: 'Derivates',
		icon: TbMathFunctionY 
	}
]

