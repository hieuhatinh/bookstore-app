import { FormEvent, useState } from 'react'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import {
    Box,
    ClickAwayListener,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListSubheader,
    Tooltip,
    TooltipProps,
    tooltipClasses,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import styled from '@emotion/styled'
import { v4 as uuidv4 } from 'uuid'

interface IPropsHistoryItem {
    id: string
    search: string
}

interface IPropsSearchHistory {
    history: IPropsHistoryItem[]
    handleRemoveItem: (id: string) => void
}

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        width: 500,
        maxWidth: '100%',
        backgroundColor: '#fff',
        padding: 0,
        marginTop: '4px !important',
    },
})

const SearchHistory = (props: IPropsSearchHistory) => {
    const { history, handleRemoveItem } = props

    return (
        <Paper className="max-h-search-history w-full overflow-auto">
            <List subheader={<ListSubheader>Lịch sử tìm kiếm</ListSubheader>}>
                {history.map((item) => (
                    <ListItem
                        key={item.id}
                        secondaryAction={
                            <IconButton
                                onClick={() => handleRemoveItem(item.id)}
                            >
                                <CloseIcon width={20} height={20} />
                            </IconButton>
                        }
                    >
                        <ListItemButton className="py-0">
                            <ListItemText primary={item.search} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Paper>
    )
}

export default function Search() {
    const [search, setSearch] = useState<string>('')
    const [searchHistory, setSearchHistory] = useState<IPropsHistoryItem[]>([])

    const [open, setOpen] = useState(false)

    const handleTooltipClose = () => {
        setOpen(false)
    }

    const handleTooltipOpen = () => {
        setOpen(true)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setSearchHistory([...searchHistory, { id: uuidv4(), search }])
        setSearch('')
    }

    const handleRemoveItem = (id: string) => {
        setSearchHistory((prev) => prev.filter((item) => item.id !== id))
    }

    return (
        <Paper
            component="form"
            className="w-width-search"
            onSubmit={handleSubmit}
        >
            <ClickAwayListener onClickAway={handleTooltipClose}>
                <div>
                    <CustomTooltip
                        PopperProps={{
                            disablePortal: true,
                        }}
                        // onClose={handleTooltipClose}
                        open={open}
                        // disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        placement="bottom-start"
                        title={
                            <SearchHistory
                                history={searchHistory}
                                handleRemoveItem={handleRemoveItem}
                            />
                        }
                    >
                        <Box className="flex items-center py-[2px] px-1 w-full">
                            <IconButton sx={{ p: '10px' }} aria-label="menu">
                                <SearchIcon />
                            </IconButton>
                            <div className="flex-1">
                                <InputBase
                                    placeholder="Bạn tìm gì hôm nay?"
                                    inputProps={{
                                        'aria-label': 'Bạn tìm gì hôm nay?',
                                    }}
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    onFocus={handleTooltipOpen}
                                    className="w-full"
                                />
                            </div>

                            <Divider
                                sx={{ height: 28, m: 0.5 }}
                                orientation="vertical"
                            />
                            <Button variant="text">Tìm kiếm</Button>
                        </Box>
                    </CustomTooltip>
                </div>
            </ClickAwayListener>
        </Paper>
    )
}
