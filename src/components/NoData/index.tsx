import { Box, Typography } from '@mui/material'

interface Props {
    text: string
}

export default function NoData(props: Props) {
    const { text } = props

    return (
        <Box className="text-center">
            <Typography variant="body1">{text}</Typography>
        </Box>
    )
}
