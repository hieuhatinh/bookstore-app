import * as yup from 'yup'

export const schemaForm = yup.object({
    fullName: yup.string().required('Bạn cần nhập trường này'),
    email: yup.string().email('Trường này phải là email').required('Bạn cần nhập email'), 
    password: yup.string().min(6, 'Cần nhập tối thiểu 6 ký tự').required('Bạn cần nhập password'),
    passwordConfirm: yup.string().min(6, 'Cần nhập tối thiểu 6 ký tự').required('Bạn cần nhập password').oneOf([yup.ref('password')], 'Password không khớp')
})

export const schemaFormLogin = yup.object({
    email: yup.string().email('Trường này phải là email').required('Bạn cần nhập email'), 
    password: yup.string().min(6, 'Cần nhập tối thiểu 6 ký tự').required('Bạn cần nhập password'),
})

// @/components/main/Footer.tsx
export const customerSupport = [
    {
        to: '/', 
        title: 'Câu hỏi thường gặp'
    },
    {
        to: '/', 
        title: 'Gửi yêu cầu hỗ trợ'
    },
    {
        to: '/', 
        title: 'Hướng dẫn khách hàng'
    },
    {
        to: '/', 
        title: 'Phương thức vận chuyển'
    },
]

// @/components/main/components/Search.tsx
export const listItemCategory = [
    {
        id: 0,
        category: 'Tất cả',
    },
    {
        id: 1,
        category: 'Văn học trong nước',
    },
    {
        id: 2,
        category: 'Văn học nước ngoài',
    },
    {
        id: 3,
        category: 'Kinh tế',
    },
    {
        id: 4,
        category: 'Tâm lý giáo dục',
    },
    {
        id: 5,
        category: 'Triết học',
    },
    {
        id: 6,
        category: 'Tôn giáo',
    },
    {
        id: 7,
        category: 'Truyện',
    },
    {
        id: 8,
        category: 'Lịch sử - Địa lý',
    },
    {
        id: 9,
        category: 'Khoa học',
    },
]
