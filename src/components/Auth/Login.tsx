import React from 'react'
import { useFormik } from 'formik'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

import routes from '@/routes'
import { schemaForm } from '@/constants'
import SocialNetwork from './SocialNetwork'
import Link from 'next/link'

export default function Login() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
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
                Login
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
                <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    className="bg-blue-600"
                >
                    Đăng nhập
                </Button>
            </form>
            <div className="flex items-center justify-center my-2">
                <span>Bạn chưa có tài khoản?</span>
                <Link href={routes.register}>
                    <Button variant="text">Đăng ký ngay</Button>
                </Link>
            </div>
            <SocialNetwork />
        </Box>
    )
}
