import { Navigate } from 'react-router-dom'

interface Props {
    children: JSX.Element
    restricted?: boolean
    condition?: boolean
}

/** Metodo para la definición de rutas protegidas y publicas. */
export const PublicRoute = ({ condition = true, restricted = false, children }: Props): JSX.Element => {
    return condition && restricted ? <Navigate to="/" /> : children
}
