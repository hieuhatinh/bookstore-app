import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'

interface Props {
    open: boolean
    comp: any
    handleClose: any
    title: string
}

export default function AlertDialog(props: Props) {
    const { open, comp, handleClose, title } = props

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                {comp}
            </Dialog>
        </div>
    )
}
