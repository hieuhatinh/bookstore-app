import {
    Badge,
    Button,
    Divider,
    List,
    ListItem,
    ListItemText,
    Paper,
} from '@mui/material'

export default function Bill() {
    return (
        <>
            <Paper elevation={0} className="mb-3 p-3">
                <List>
                    <ListItem
                        secondaryAction={
                            <Badge badgeContent="đ" className="text-price">
                                0
                            </Badge>
                        }
                    >
                        <ListItemText primary="Tạm tính" />
                    </ListItem>
                    <ListItem
                        secondaryAction={
                            <Badge badgeContent="đ" className="text-price">
                                0
                            </Badge>
                        }
                    >
                        <ListItemText primary="Giảm giá" />
                    </ListItem>
                    <Divider />
                    <ListItem
                        secondaryAction={
                            <Badge badgeContent="đ" className="text-price">
                                0
                            </Badge>
                        }
                    >
                        <ListItemText primary="Tổng tiền" />
                    </ListItem>
                </List>
            </Paper>
            <Button className="bg-submit-buy w-full text-white hover:bg-submit-buy capitalize">
                Mua hàng (0)
            </Button>
        </>
    )
}
