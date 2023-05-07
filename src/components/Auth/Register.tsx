import React from 'react'
import { useFormik } from 'formik'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

import { schemaForm } from '@/constants'
import SocialNetwork from './SocialNetwork'
import routes from '@/routes'
import Link from 'next/link'

export default function Login() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: '',
        },
        validationSchema: schemaForm,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    return (
        <Box
            width={600}
            className="flex flex-col items-center justify-center mt-5"
        >
            <h2 className="font-semibold text-xl text-indigo-700 mb-5">
                Register
            </h2>
            <form onSubmit={formik.handleSubmit}>
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
                <TextField
                    fullWidth
                    id="passwordConfirm"
                    name="passwordConfirm"
                    label="Password Confirm"
                    type="password"
                    value={formik.values.passwordConfirm}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                        formik.touched.passwordConfirm &&
                        Boolean(formik.errors.passwordConfirm)
                    }
                    helperText={
                        formik.touched.passwordConfirm &&
                        formik.errors.passwordConfirm
                    }
                    className="mb-2"
                />
                <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    className="bg-blue-600"
                >
                    Đăng ký
                </Button>
            </form>
            <div className="flex items-center justify-center my-2">
                <span>Bạn đã có tài khoản?</span>
                <Link href={routes.login}>
                    <Button variant="text">Đăng nhập ngay</Button>
                </Link>
            </div>
            <SocialNetwork />
        </Box>
    )
}
