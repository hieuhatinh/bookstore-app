import { FormEvent, useState } from 'react'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

export default function Search() {
    const [search, setSearch] = useState<string>('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <Paper
            component="form"
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: 500,
            }}
            onSubmit={handleSubmit}
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <SearchIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Bạn tìm gì hôm nay?"
                inputProps={{ 'aria-label': 'Bạn tìm gì hôm nay?' }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <Button variant="text">Tìm kiếm</Button>
        </Paper>
    )
}
