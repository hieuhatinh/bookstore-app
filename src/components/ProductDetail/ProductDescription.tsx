import { Box, Typography } from '@mui/material'

interface IPropsProductDescription {
    description: string | undefined
}

export default function ProductDescription(props: IPropsProductDescription) {
    const { description } = props

    return (
        <Box className="p-5">
            <Typography variant="h6" className="font-bold mb-3">
                Mô tả sản phẩm
            </Typography>
            <p>{description}</p>
        </Box>
    )
}
