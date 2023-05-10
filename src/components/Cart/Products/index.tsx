import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    IconButton,
    List,
    ListSubheader,
    Paper,
    Typography,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import ProductItem from './ProductItem'

export default function Products() {
    return (
        <Box className="h-full">
            <List className="overflow-auto pt-0 max-h-list-product-height">
                <ListSubheader className="mb-3 z-10">
                    <Paper elevation={0}>
                        <FormGroup>
                            <Grid container className="items-center">
                                <Grid item xs={5}>
                                    <FormControlLabel
                                        control={<Checkbox name="all" />}
                                        label={`Tất cả (1 sản phẩm)`}
                                    />
                                </Grid>
                                <Grid item xs={2} className="text-center">
                                    <Typography variant="body1">
                                        Đơn giá
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} className="text-center">
                                    <Typography variant="body1">
                                        Số lượng
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} className="text-center">
                                    <Typography variant="body1">
                                        Thành tiền
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} className="text-center">
                                    <IconButton
                                        aria-label="delete"
                                        size="large"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </FormGroup>
                    </Paper>
                </ListSubheader>
                <Paper elevation={0} className="px-4">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </Paper>
            </List>
        </Box>
    )
}
