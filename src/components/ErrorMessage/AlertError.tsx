import { Alert, Snackbar, AlertTitle } from '@mui/material'

interface IErrorMessage {
    title: string
    message: string
}

interface IPropsError {
    errorMessage: IErrorMessage
    handleClose: () => void
    open: boolean
}

export default function AlertError(props: IPropsError) {
    const { errorMessage, handleClose, open } = props
    const { title, message } = errorMessage

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: '100%' }}
            >
                <AlertTitle>{title}</AlertTitle>
                {message}
            </Alert>
        </Snackbar>
    )
}
