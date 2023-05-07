import * as yup from 'yup'

export const schemaForm = yup.object({
    email: yup.string().email('Trường này phải là email').required('Bạn cần nhập email'), 
    password: yup.string().min(6, 'Cần nhập tối thiểu 6 ký tự').required('Bạn cần nhập password'),
    passwordConfirm: yup.string().min(6, 'Cần nhập tối thiểu 6 ký tự').required('Bạn cần nhập password').oneOf([yup.ref('password')], 'Password không khớp')
})