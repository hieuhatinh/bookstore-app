import Divider from '@mui/material/Divider'
import Image from 'next/image'

import Google from '@/assets/images/google.png'
import Facebook from '@/assets/images/facebook.png'
import Link from 'next/link'

export default function SocialNetwork() {
    return (
        <div>
            <div className="flex items-center justify-center mb-2">
                <Divider className="flex-1" />
                <span className="mx-2">Hoặc tiếp tục bằng</span>
                <Divider className="flex-1" />
            </div>

            <div className="flex items-center justify-center">
                <Image
                    src={Facebook}
                    alt="google"
                    width={50}
                    height={50}
                    className="me-3 cursor-pointer"
                />
                <Image
                    src={Google}
                    alt="google"
                    width={50}
                    height={50}
                    className="cursor-pointer"
                />
            </div>

            <div className="text-center mt-1">
                <span className="me-1">
                    Bằng việc tiếp tục, bạn đã chấp nhận
                </span>
                <Link href="/" className="text-[#1976d2]">
                    Điều khoản sử dụng
                </Link>
            </div>
        </div>
    )
}
