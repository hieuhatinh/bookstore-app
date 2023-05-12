import { useState } from 'react'
import {
    Box,
    List,
    ListItemText,
    ListSubheader,
    Paper,
    Tab,
    Tabs,
} from '@mui/material'
import { listItemCategory } from '@/constants'

export default function Sidebar() {
    const [value, setValue] = useState<string>(listItemCategory[0].category)

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    return (
        <Box>
            <Paper className="h-sidebar-height overflow-y-auto">
                <List
                    className="h-full overflow-y-auto"
                    subheader={
                        <ListSubheader component="h4">
                            Thể loại sách
                        </ListSubheader>
                    }
                >
                    <Tabs
                        value={value}
                        orientation="vertical"
                        onChange={handleChange}
                        className="flex items-start"
                    >
                        {listItemCategory.map((item) => (
                            <Tab
                                key={item.id}
                                label={
                                    <ListItemText
                                        className="flex items-center normal-case"
                                        primary={item.category}
                                    />
                                }
                                value={item.category}
                                className="flex items-start py-1 ps-8 w-full"
                            />
                        ))}
                    </Tabs>
                </List>
            </Paper>
        </Box>
    )
}
