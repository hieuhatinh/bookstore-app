import Link from 'next/link'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import routes from '@/routes'
import Search from './components/Search'
import { styled } from '@mui/material/styles'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    Button,
    Container,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material'
import { red } from '@mui/material/colors'

const color = red[500]

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: '#fff',
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#fff',
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}))

const ListUser = () => {
    return (
        <Box sx={{ width: '100%', maxWidth: 360 }}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary="Hồ sơ" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
            <Divider />
            <nav aria-label="secondary mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Đăng xuất" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    )
}

function HeaderLayout() {
    const user = true

    return (
        <AppBar className="bg-slate-200 pb-1">
            <Toolbar>
                <Container
                    maxWidth="lg"
                    className="flex items-center justify-between"
                >
                    <Link href={routes.home} className="me-5">
                        <Typography
                            variant="h2"
                            className="font-semibold text-xl text-rose-600"
                        >
                            BookStore
                        </Typography>
                    </Link>

                    <Search />

                    <Box className="grow" />

                    {user ? (
                        <Box className="flex items-center">
                            <LightTooltip
                                title={<ListUser />}
                                placement="bottom-end"
                                arrow
                                enterDelay={200}
                                leaveDelay={500}
                            >
                                <IconButton>
                                    <Avatar
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUzg3Q6JlV46-cTixJAfKsy6Z2slX3TFB8g&usqp=CAU"
                                        alt="avatar"
                                        className="w-6 h-6"
                                    />
                                </IconButton>
                            </LightTooltip>
                            <Divider
                                className="mx-3"
                                orientation="vertical"
                                variant="middle"
                                flexItem
                            />
                            <Link href="/cart">
                                <Tooltip
                                    title="Giỏ hàng"
                                    placement="bottom"
                                    arrow
                                >
                                    <IconButton>
                                        <Badge badgeContent={4} color="error">
                                            <ShoppingCartIcon className="text-violet-700" />
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                            </Link>
                        </Box>
                    ) : (
                        <Box className="flex items-center">
                            <Link href={routes.login}>
                                <Button variant="text">Đăng nhập</Button>
                            </Link>
                            <Divider
                                className="mx-1"
                                orientation="vertical"
                                variant="middle"
                                flexItem
                            />
                            <Link href={routes.register}>
                                <Button variant="text">Đăng ký</Button>
                            </Link>
                        </Box>
                    )}
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default HeaderLayout
