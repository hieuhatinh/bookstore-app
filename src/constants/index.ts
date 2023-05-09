import * as yup from 'yup'

export const schemaForm = yup.object({
    email: yup.string().email('Trường này phải là email').required('Bạn cần nhập email'), 
    password: yup.string().min(6, 'Cần nhập tối thiểu 6 ký tự').required('Bạn cần nhập password'),
    passwordConfirm: yup.string().min(6, 'Cần nhập tối thiểu 6 ký tự').required('Bạn cần nhập password').oneOf([yup.ref('password')], 'Password không khớp')
})

// footer
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