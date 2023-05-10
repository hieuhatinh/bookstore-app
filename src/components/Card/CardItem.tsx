import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Badge, Card, CardActionArea } from '@mui/material'

export default function CardItem() {
    return (
        <Card className="max-w-[200px]">
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://salt.tikicdn.com/cache/280x280/ts/product/7c/e3/95/dae5605536e6c8b9bd8073e6482b0335.jpg.webp"
                    alt="green iguana"
                    className="pt-2"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        Lizard
                    </Typography>
                    <Badge
                        badgeContent="đ"
                        className="text-price font-bold left-[3px]"
                    >
                        <Typography
                            variant="body2"
                            className="text-price font-bold"
                        >
                            119.453
                        </Typography>
                    </Badge>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
