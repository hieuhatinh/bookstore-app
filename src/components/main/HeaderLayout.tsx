import Link from 'next/link'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
import routes from '@/routes'
import Search from './components/Search'
import { styled } from '@mui/material/styles'

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
        <Container className="flex items-center justify-between">
            <div className="flex items-center">
                <Link href={routes.home} className="me-5">
                    <h2 className="font-semibold text-xl text-rose-600">
                        BookStore
                    </h2>
                </Link>

                <Search />
            </div>

            {user ? (
                <div className="flex items-center">
                    <LightTooltip
                        title={<ListUser />}
                        placement="bottom-end"
                        arrow
                        enterDelay={200}
                        leaveDelay={500}
                    >
                        <Avatar
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUzg3Q6JlV46-cTixJAfKsy6Z2slX3TFB8g&usqp=CAU"
                            alt="avatar"
                            className="w-6 h-6 cursor-pointer"
                        />
                    </LightTooltip>
                    <Divider className="mx-3" orientation="vertical" flexItem />
                    <Tooltip title="Giỏ hàng" placement="bottom" arrow>
                        <Badge
                            badgeContent={4}
                            color="primary"
                            className="cursor-pointer"
                        >
                            <ShoppingCartIcon className="text-violet-700" />
                        </Badge>
                    </Tooltip>
                </div>
            ) : (
                <div className="flex items-center">
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
                </div>
            )}
        </Container>
    )
}

export default HeaderLayout
