import React, { lazy } from 'react'
import { APP_VALUES } from '../constants/app'
import { HomeRedirect } from './RouteUtils'
const RouteController = lazy(() => import('./RouteController'))
const NotFound = lazy(() => import('../components/Pages/NotFound'))
const Login = lazy(() => import('../components/Pages/Login'))
const Home = lazy(() => import('../components/Pages/Home'))
const Dashboard = lazy(() => import('../components/Pages/Dashboard'))
const Usuarios = lazy(() => import('../components/Pages/Usuarios'))
const Productos = lazy(() => import('../components/Pages/Usuarios/Productos'))
const Categorias = lazy(() => import('../components/Pages/Usuarios/Categorias'))
const CartPage = lazy(() => import('../components/Pages/Usuarios/CartPage'))
const About = lazy(() => import('../components/Pages/Usuarios/About'))
const Welcome = lazy(() => import('../components/Pages/Usuarios/Welcome'))

const routes = [
	{
		path: "/",
		exact: true,
		component: HomeRedirect
	},
	{
		path: "/login",
		exact: true,
		render: props => <Login {...props} />
	},
	{
		path: `/${APP_VALUES.ROOT_ROUTE}`,
		render: props => <RouteController component={Home} {...props} />,
		routes: [
			{
				path: `/${APP_VALUES.ROOT_ROUTE}`,
				exact: true,
				render: props => <RouteController component={Dashboard} {...props} />
			},
			{
				path: `/${APP_VALUES.ROOT_ROUTE}/usuarios`,
				exact: true,
				render: props => <RouteController component={Usuarios} {...props} />
			},
			{
				path: `/${APP_VALUES.ROOT_ROUTE}/productos`,
				exact: true,
				render: props => <RouteController component={Productos} {...props} />
			},
			{
				path: `/${APP_VALUES.ROOT_ROUTE}/categorias`,
				exact: true,
				render: props => <RouteController component={Categorias} {...props} />
			},
			{
				path: `/${APP_VALUES.ROOT_ROUTE}/about`,
				exact: true,
				render: props => <RouteController component={About} {...props} />
			},
			{
				path: `/${APP_VALUES.ROOT_ROUTE}/welcome`,
				exact: true,
				render: props => <RouteController component={Welcome} {...props} />
			},
			
		]
	},
	{
		path: '*',
		render: props => <NotFound {...props} />
	}
]

export default routes