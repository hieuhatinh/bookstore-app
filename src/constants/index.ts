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
        type: 'all'
    },
    {
        id: 1,
        category: 'Văn học trong nước',
        type: 'domestic_literature'
    },
    {
        id: 2,
        category: 'Văn học nước ngoài',
        type: 'foreign_literature'
    },
    {
        id: 3,
        category: 'Kinh tế',
        type: 'economy'
    },
    {
        id: 4,
        category: 'Tâm lý giáo dục',
        type: 'educational_psychology'
    },
    {
        id: 5,
        category: 'Triết học',
        type: 'philosophy'
    },
    {
        id: 6,
        category: 'Tôn giáo',
        type: 'religion'
    },
    {
        id: 7,
        category: 'Truyện',
        type: 'comic'
    },
    {
        id: 8,
        category: 'Lịch sử - Địa lý',
        type: 'history_geography'
    },
    {
        id: 9,
        category: 'Khoa học',
        type: 'science'
    },
]

export const userProfileLocalStorage = 'user'