import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { LoadingButton } from '@mui/lab'
import SaveIcon from '@mui/icons-material/Save'

import { signInWithEmailAndPassword } from 'firebase/auth'

import { schemaFormLogin } from '@/constants'
import SocialNetwork from './SocialNetwork'
import AlertError from '@/components/ErrorMessage/AlertError'
import routes from '@/routes'
import { auth } from '@/config/firebase'

interface IValuesLogin {
    email: string
    password: string
}

interface IErrorMessage {
    title: string
    message: string
}

export default function Login() {
    const router = useRouter()
    const [open, setOpen] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<IErrorMessage>({
        title: '',
        message: '',
    })

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: schemaFormLogin,
        onSubmit: async (values: IValuesLogin) => {
            await signInWithEmailAndPassword(
                auth,
                values.email,
                values.password
            )
                .then((userCredential) => {
                    router.push(routes.home)
                })
                .catch((error) => {
                    setOpen(true)
                    setErrorMessage({
                        title: error.code,
                        message: error.message,
                    })
                })
        },
    })

    return (
        <Box
            width={600}
            className="flex flex-col items-center justify-center mt-5"
        >
            <Typography
                variant="h2"
                className="font-semibold text-xl text-indigo-700 mb-5"
            >
                Login
            </Typography>
            <Box component="form" onSubmitCapture={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    className="mb-2"
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                    }
                    helperText={
                        formik.touched.password && formik.errors.password
                    }
                    className="mb-2"
                />
                {formik.isSubmitting ? (
                    <LoadingButton
                        loading
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="contained"
                        fullWidth
                        type="button"
                    >
                        Đăng nhập
                    </LoadingButton>
                ) : (
                    <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                        className="bg-blue-600"
                    >
                        Đăng nhập
                    </Button>
                )}
            </Box>

            <Box className="flex items-center justify-center my-2">
                <Typography variant="body1">Bạn chưa có tài khoản?</Typography>
                <Link href={routes.register}>
                    <Button variant="text">Đăng ký ngay</Button>
                </Link>
            </Box>
            <SocialNetwork />

            {/* Hiển thị alert khi đăng ký thất bại */}
            <AlertError
                open={open}
                handleClose={handleClose}
                errorMessage={errorMessage}
            />
        </Box>
    )
}
