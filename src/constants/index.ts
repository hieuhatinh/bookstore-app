import routes from '@/routes'
import * as yup from 'yup'
import { Tooltip, TooltipProps, tooltipClasses } from '@mui/material'
import styled from '@emotion/styled'

export const schemaFormRegister = yup.object({
    fullName: yup.string().required('Bạn cần nhập trường này'),
    email: yup
        .string()
        .email('Trường này phải là email')
        .required('Bạn cần nhập email'),
    password: yup
        .string()
        .min(6, 'Cần nhập tối thiểu 6 ký tự')
        .required('Bạn cần nhập password'),
    passwordConfirm: yup
        .string()
        .min(6, 'Cần nhập tối thiểu 6 ký tự')
        .required('Bạn cần nhập password')
        .oneOf([yup.ref('password')], 'Password không khớp'),
})

export const schemaFormLogin = yup.object({
    email: yup
        .string()
        .email('Trường này phải là email')
        .required('Bạn cần nhập email'),
    password: yup
        .string()
        .min(6, 'Cần nhập tối thiểu 6 ký tự')
        .required('Bạn cần nhập password'),
})

// @/components/main/Footer.tsx
export const customerSupport = [
    {
        to: '/',
        title: 'Câu hỏi thường gặp',
    },
    {
        to: '/',
        title: 'Gửi yêu cầu hỗ trợ',
    },
    {
        to: '/',
        title: 'Hướng dẫn khách hàng',
    },
    {
        to: '/',
        title: 'Phương thức vận chuyển',
    },
]

// @/components/main/components/Search.tsx
export const listItemCategory = [
    {
        id: 0,
        category: 'Tất cả',
        path: routes.home,
    },
    {
        id: 1,
        category: 'Văn học trong nước',
        path: routes.booksOfTheGenre('domestic_literature'),
    },
    {
        id: 2,
        category: 'Văn học nước ngoài',
        path: routes.booksOfTheGenre('foreign_literature'),
    },
    {
        id: 3,
        category: 'Kinh tế',
        path: routes.booksOfTheGenre('economy'),
    },
    {
        id: 4,
        category: 'Tâm lý giáo dục',
        path: routes.booksOfTheGenre('educational_psychology'),
    },
    {
        id: 5,
        category: 'Triết học',
        path: routes.booksOfTheGenre('philosophy'),
    },
    {
        id: 6,
        category: 'Tôn giáo',
        path: routes.booksOfTheGenre('religion'),
    },
    {
        id: 7,
        category: 'Truyện',
        path: routes.booksOfTheGenre('comic'),
    },
    {
        id: 8,
        category: 'Lịch sử - Địa lý',
        path: routes.booksOfTheGenre('history_geography'),
    },
    {
        id: 9,
        category: 'Khoa học',
        path: routes.booksOfTheGenre('science'),
    },
]

export const userProfileLocalStorage = 'user'

export interface IUserCurrent {
    name?: string
    email?: string
    uid: string
}


// @/components/ProductDetail/index.tsx
// @/components/cart/Products/ProductItem.tsx
export type IProduct = {
    author: string
    description: string
    img: string
    'issuing-company': string
    name: string
    'number-of-pages': number
    price: number
    'publishing-company': string
    size: string
    type: string
}