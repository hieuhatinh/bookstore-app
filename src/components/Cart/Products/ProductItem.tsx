import {
    Badge,
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    IconButton,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import Product from './Product'
import NumberOfProducts from '@/components/NumberOfProducts'

interface IProps {}

export default function ProductItem(props: IProps) {
    return (
        <FormGroup className="py-4">
            <Grid container className="items-center">
                <Grid item xs={5}>
                    <FormControlLabel
                        control={<Checkbox name="all" />}
                        label={<Product />}
                    />
                </Grid>
                <Grid item xs={2} className="text-center">
                    <Badge badgeContent="đ" className="text-price">
                        200.000
                    </Badge>
                </Grid>
                <Grid item xs={2} className="text-center">
                    <Box className="flex items-center justify-center">
                        <NumberOfProducts />
                    </Box>
                </Grid>
                <Grid item xs={2} className="text-center">
                    <Badge badgeContent="đ" className="text-price">
                        200.000
                    </Badge>
                </Grid>
                <Grid item xs={1} className="text-center">
                    <IconButton aria-label="delete" size="large">
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </FormGroup>
    )
}
