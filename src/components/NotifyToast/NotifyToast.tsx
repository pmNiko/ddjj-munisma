import { Toaster } from 'react-hot-toast'

/**
 * Component NotifyToast
 * @description notificaciones
 */
export const NotifyToast = () => {
    return (
        <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={20}
            toastOptions={{
                style: {
                    marginTop: '5em',
                },
                success: {
                    duration: 5000,
                    style: {
                        background: '#1e90ff',
                        color: 'white',
                        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                        fontSize: '1em',
                    },
                },
                loading: {
                    duration: 8000,
                    style: {
                        background: 'rgb(46, 125, 50)',
                        color: 'white',
                        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                        fontSize: '1em',
                    },
                },
                error: {
                    duration: 8000,
                    style: {
                        background: '#fffff',
                        color: 'black',
                        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                        fontSize: '1em',
                    },
                },
            }}
        />
    )
}
