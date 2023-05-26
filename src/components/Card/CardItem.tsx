import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Badge, Card, CardActionArea } from '@mui/material'
import Link from 'next/link'

import routes from '@/routes'
import Image from 'next/image'

interface IProps {
    image: string
    name: string
    id: string
    price: number
    category: string | string[] | undefined
}

export default function CardItem(props: IProps) {
    const { image, name, id, price, category } = props

    return (
        <Link href={routes.linkToProduct(category, id)}>
            <Card className="max-w-[200px] max-h-[380px]">
                <CardActionArea>
                    <Image
                        height={200}
                        width={180}
                        src={image}
                        alt={name}
                        className="pt-2 px-3 w-[180px] h-[200px] m-auto"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            className="text-lg three-dots leading-snug"
                        >
                            {name}
                        </Typography>
                        <Badge
                            badgeContent="đ"
                            className="text-price font-bold left-[3px]"
                        >
                            <Typography
                                variant="body2"
                                className="text-price font-bold"
                            >
                                {price}
                            </Typography>
                        </Badge>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}
