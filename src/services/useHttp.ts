import axios from 'axios'
import { useEffect, useState } from 'react'

const BASE_URL = 'https://localhost:4200/api/v1/authenticate'

type Params = {
    cuit: string
    password: string
}

interface Props {
    endpoint: string
    params?: Params
    protectedRoute?: boolean
}

const initialParams: Params = {
    cuit: '',
    password: '',
}

export const useAuth = ({ endpoint, params = initialParams, protectedRoute = false }: Props) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [response, setResponse] = useState([])

    let config = {}

    if (protectedRoute) {
        const token = localStorage.getItem('token')
        config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    }

    useEffect(() => {
        const get = async () => {
            try {
                const response = await axios.post(`${BASE_URL}${endpoint}`, params, config)

                if (response.status === 200) {
                    setResponse(response.data.token)
                } else {
                    console.error(response)
                    setError(response.data.message)
                }

                setIsLoading(false)
            } catch (error: any) {
                setError(error.message)
                setIsLoading(false)
            }
        }

        get()
    }, [params, protectedRoute])

    return { isLoading, response, error }
}
