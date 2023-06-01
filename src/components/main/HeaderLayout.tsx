import {
    useContext,
    useEffect,
    useState,
    Dispatch,
    SetStateAction,
} from 'react'
import Link from 'next/link'
import Tooltip from '@mui/material/Tooltip'
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
    Paper,
    TooltipProps,
    tooltipClasses,
} from '@mui/material'
import { auth } from '@/config/firebase'
import { useRouter } from 'next/navigation'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CloseIcon from '@mui/icons-material/Close'
import styled from '@emotion/styled'

import { signOut } from 'firebase/auth'

import routes from '@/routes'
import Search from './components/Search'
import AlertError, { IErrorMessage } from '@/components/ErrorMessage/AlertError'
import { userProfileLocalStorage, IUserCurrent } from '@/constants'
import { OpenSuccessMessageContext } from '@/pages/product/[category]/[id]'

interface IPropsListUser {
    anchorEl: null | HTMLElement
    open: boolean
    handleClose: () => void
}

// render khi hover vào ảnh đại diện
const ListUser = (props: IPropsListUser) => {
    const { anchorEl, open, handleClose } = props
    const router = useRouter()
    const [openErrorMessage, setOpenErrorMessage] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<IErrorMessage>({
        title: '',
        message: '',
    })

    const handleCloseErrorMessage = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return
        }

        setOpenErrorMessage(false)
    }

    // logout
    const handleSignOut = async () => {
        await signOut(auth)
            .then(() => {
                localStorage.removeItem(userProfileLocalStorage)
                router.push(routes.login)
            })
            .catch((err) =>
                setErrorMessage({ title: err.code, message: err.message })
            )
    }

    return (
        <>
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
                    <MenuItem onClick={handleSignOut}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Đăng xuất" />
                    </MenuItem>
                </nav>
            </Menu>
            <AlertError
                errorMessage={errorMessage}
                open={openErrorMessage}
                handleClose={handleCloseErrorMessage}
            />
        </>
    )
}

// hiển thị thông báo khi thêm vào giỏ hàng
const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: '#fff',
    },
    [`& .${tooltipClasses.tooltip}`]: {
        width: 275,
        maxWidth: '100%',
        backgroundColor: '#fff',
        padding: 0,
        marginTop: '4px !important',
    },
}))

interface IPropsAlertAddProductSuccess {
    setOpen: Dispatch<SetStateAction<boolean>>
}
const AlertAddProductSuccess = (props: IPropsAlertAddProductSuccess) => {
    const { setOpen } = props

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Paper className="p-3">
            <CloseIcon
                className="float-right cursor-pointer"
                onClick={handleClose}
            />
            <Typography
                variant="body1"
                className="flex items-center justify-center pe-2"
            >
                <CheckCircleIcon className="me-1 text-lime-500" />
                <span className="text-sm whitespace-nowrap">
                    Thêm vào giỏ hàng thành công!
                </span>
            </Typography>
            <Button
                href={routes.cart}
                variant="contained"
                className="normal-case bg-red-600 hover:bg-red-600 mt-2 w-full"
            >
                Xem giỏ hàng và thanh toán
            </Button>
        </Paper>
    )
}

function HeaderLayout() {
    const [userProfile, setUserProfile] = useState<IUserCurrent | null>(null)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    useEffect(() => {
        const storedData = localStorage.getItem(userProfileLocalStorage)
        const userCurrent: IUserCurrent = storedData
            ? JSON.parse(storedData)
            : null

        setUserProfile(userCurrent)
    }, [])

    // usecontext xử lý thông báo đã thêm sản phẩm vào giỏ hàng
    const valueProvider = useContext(OpenSuccessMessageContext)
    const { openSuccessMessage, setOpenSuccessMessage } = valueProvider

    useEffect(() => {
        const idTimeout = setTimeout(() => {
            setOpenSuccessMessage(false)
        }, 5000)

        return () => clearTimeout(idTimeout)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

                    {userProfile ? (
                        <Box className="flex items-center">
                            <Tooltip
                                disableHoverListener
                                disableTouchListener
                                title={userProfile.name || userProfile.email}
                                placement="bottom"
                            >
                                <IconButton onClick={handleClick}>
                                    <Avatar
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUzg3Q6JlV46-cTixJAfKsy6Z2slX3TFB8g&usqp=CAU"
                                        alt="avatar"
                                        className="w-6 h-6"
                                    />
                                </IconButton>
                            </Tooltip>
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
                            <CustomTooltip
                                PopperProps={{
                                    disablePortal: true,
                                }}
                                title={
                                    <AlertAddProductSuccess
                                        setOpen={setOpenSuccessMessage}
                                    />
                                }
                                placement="bottom-end"
                                open={openSuccessMessage}
                            >
                                <Link href={routes.cart}>
                                    <IconButton>
                                        <Badge badgeContent={4} color="error">
                                            <ShoppingCartIcon className="text-violet-700" />
                                        </Badge>
                                    </IconButton>
                                </Link>
                            </CustomTooltip>
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
