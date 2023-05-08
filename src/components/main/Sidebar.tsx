import {
    Box,
    List,
    ListItemButton,
    ListItemText,
    ListSubheader,
    Paper,
} from '@mui/material'

const listItemCategory = [
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

export default function Sidebar() {
    return (
        <Box>
            <Paper className="h-[500px] overflow-y-auto">
                <List
                    className="h-full overflow-y-auto"
                    subheader={
                        <ListSubheader component="h4">
                            Thể loại sách
                        </ListSubheader>
                    }
                >
                    {listItemCategory.map((item) => (
                        <ListItemButton key={item.id}>
                            <ListItemText primary={item.category} />
                        </ListItemButton>
                    ))}
                </List>
            </Paper>
        </Box>
    )
}
