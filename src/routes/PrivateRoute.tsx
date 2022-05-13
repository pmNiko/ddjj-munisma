import { Navigate } from 'react-router-dom'

interface Props {
    children: JSX.Element
    condition?: boolean
}

/** Metodo para restringir el acceso de una ruta privada. */
export const PrivateRoute = ({ condition, children }: Props): JSX.Element => {
    return condition ? children : <Navigate to="/" />
}
