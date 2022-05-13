import { DeclarationPage } from 'pages/DeclarationPage'
import { LoginPage } from 'pages/LoginPage'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { RouteDDJJ, PrivateRoute, PublicRoute } from 'routes'

/**
 * Component Navigation
 * @description componente encargado del router de la aplicación.
 */
export const Navigation = () => {

    return (
        <Router basename='/ddjj' >
            <Routes >
                <Route
                    path={RouteDDJJ.LOGIN}
                    element={
                        <PublicRoute>
                            <LoginPage />
                        </PublicRoute>
                    }
                />
                <Route
                    path={RouteDDJJ.DECLARATION}
                    element={
                        <PrivateRoute condition={true}>
                            <DeclarationPage />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<Navigate to={RouteDDJJ.LOGIN} replace />} />
            </Routes>
        </Router>
    )
}
