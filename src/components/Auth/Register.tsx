import React, { useState } from 'react'
import { Formik } from 'formik'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Link from 'next/link'
import { Typography } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import { LoadingButton } from '@mui/lab'
import { useRouter } from 'next/navigation'

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

import { schemaForm } from '@/constants'
import SocialNetwork from './SocialNetwork'
import routes from '@/routes'
import { auth } from '@/config/firebase'
import AlertError from '@/components/ErrorMessage/AlertError'

interface IValuesFormRegister {
    fullName: string
    email: string
    password: string
    passwordConfirm: string
}

interface IErrorMessage {
    title: string
    message: string
}

export default function Register() {
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

    return (
        <Box
            width={600}
            className="flex flex-col items-center justify-center mt-5"
        >
            <Typography
                variant="h2"
                className="font-semibold text-xl text-indigo-700 mb-5"
            >
                Register
            </Typography>
            <Formik
                initialValues={{
                    fullName: '',
                    email: '',
                    password: '',
                    passwordConfirm: '',
                }}
                validationSchema={schemaForm}
                onSubmit={async (values: IValuesFormRegister) => {
                    await createUserWithEmailAndPassword(
                        auth,
                        values.email,
                        values.password
                    )
                        .then((userCredential) => {
                            updateProfile(userCredential.user, {
                                displayName: values.fullName,
                            })
                            router.push(routes.login)
                        })
                        .catch((error) => {
                            setOpen(true)
                            setErrorMessage({
                                title: error.code,
                                message: error.message,
                            })
                        })
                }}
            >
                {(props) => (
                    <Box component="form" onSubmit={props.handleSubmit}>
                        <TextField
                            fullWidth
                            id="fullName"
                            name="fullName"
                            label="FullName"
                            value={props.values.fullName}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            error={
                                props.touched.fullName &&
                                Boolean(props.errors.fullName)
                            }
                            helperText={
                                props.touched.fullName && props.errors.fullName
                            }
                            className="mb-2"
                        />
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={props.values.email}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            error={
                                props.touched.email &&
                                Boolean(props.errors.email)
                            }
                            helperText={
                                props.touched.email && props.errors.email
                            }
                            className="mb-2"
                        />
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={props.values.password}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            error={
                                props.touched.password &&
                                Boolean(props.errors.password)
                            }
                            helperText={
                                props.touched.password && props.errors.password
                            }
                            className="mb-2"
                        />
                        <TextField
                            fullWidth
                            id="passwordConfirm"
                            name="passwordConfirm"
                            label="Password Confirm"
                            type="password"
                            value={props.values.passwordConfirm}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            error={
                                props.touched.passwordConfirm &&
                                Boolean(props.errors.passwordConfirm)
                            }
                            helperText={
                                props.touched.passwordConfirm &&
                                props.errors.passwordConfirm
                            }
                            className="mb-2"
                        />
                        {props.isSubmitting ? (
                            <LoadingButton
                                loading
                                loadingPosition="start"
                                startIcon={<SaveIcon />}
                                variant="contained"
                                fullWidth
                                type="button"
                            >
                                Đăng ký
                            </LoadingButton>
                        ) : (
                            <Button
                                variant="contained"
                                fullWidth
                                type="submit"
                                className="bg-blue-600"
                            >
                                Đăng ký
                            </Button>
                        )}
                    </Box>
                )}
            </Formik>
            <Box className="flex items-center justify-center my-2">
                <Typography variant="body1">Bạn đã có tài khoản?</Typography>
                <Link href={routes.login}>
                    <Button variant="text">Đăng nhập ngay</Button>
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
