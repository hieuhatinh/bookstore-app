import Link from 'next/link'
import { Button } from '@mui/material'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '@/config/firebase'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Divider from '@mui/material/Divider'
import Image from 'next/image'
import Google from '@/assets/images/google.png'
import Facebook from '@/assets/images/facebook.png'

import routes from '@/routes'
import AlertError from '@/components/ErrorMessage/AlertError'

interface IErrorMessage {
    title: string
    message: string
}

export default function SocialNetwork() {
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

    const handleSignInWithEmail = async () => {
        await signInWithPopup(auth, provider)
            .then((result) => {
                router.push(routes.home)
            })
            .catch((error) => {
                setOpen(true)
                setErrorMessage({
                    title: error.code,
                    message: error.message,
                })
            })
    }

    return (
        <div>
            <div className="flex items-center justify-center mb-2">
                <Divider className="flex-1" />
                <span className="mx-2">Hoặc tiếp tục bằng</span>
                <Divider className="flex-1" />
            </div>

            <div className="flex items-center justify-center">
                <Button>
                    <Image
                        src={Facebook}
                        alt="google"
                        width={50}
                        height={50}
                        className="me-3 cursor-pointer"
                    />
                </Button>
                <Button onClick={handleSignInWithEmail}>
                    <Image
                        src={Google}
                        alt="google"
                        width={50}
                        height={50}
                        className="cursor-pointer"
                    />
                </Button>
            </div>

            <div className="text-center mt-1">
                <span className="me-1">
                    Bằng việc tiếp tục, bạn đã chấp nhận
                </span>
                <Link href="/" className="text-[#1976d2]">
                    Điều khoản sử dụng
                </Link>
            </div>
            <AlertError
                open={open}
                handleClose={handleClose}
                errorMessage={errorMessage}
            />
        </div>
    )
}
