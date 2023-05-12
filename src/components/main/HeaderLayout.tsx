import { useState } from 'react'
import Link from 'next/link'
import Tooltip from '@mui/material/Tooltip'
import routes from '@/routes'
import Search from './components/Search'
import Settings from '@mui/icons-material/Settings'
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
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    Menu,
    MenuItem,
} from '@mui/material'

interface IPropsListUser {
    anchorEl: null | HTMLElement
    open: boolean
    handleClose: () => void
}

const ListUser = (props: IPropsListUser) => {
    const { anchorEl, open, handleClose } = props

    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            sx={{ width: '100%', maxWidth: 360 }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <nav aria-label="main mailbox folders">
                <MenuItem>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Hồ sơ" />
                </MenuItem>
            </nav>
            <Divider />
            <nav aria-label="secondary mailbox folders">
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Cài đặt" />
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Đăng xuất" />
                </MenuItem>
            </nav>
        </Menu>
    )
}

function HeaderLayout() {
    const user = false

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

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
                            className="font-semibold text-xl text-logo"
                        >
                            BookStore
                        </Typography>
                    </Link>

                    <Search />

                    <Box className="grow" />

                    {user ? (
                        <Box className="flex items-center">
                            <IconButton onClick={handleClick}>
                                <Avatar
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUzg3Q6JlV46-cTixJAfKsy6Z2slX3TFB8g&usqp=CAU"
                                    alt="avatar"
                                    className="w-6 h-6"
                                />
                            </IconButton>
                            <ListUser
                                anchorEl={anchorEl}
                                open={open}
                                handleClose={handleClose}
                            />
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
