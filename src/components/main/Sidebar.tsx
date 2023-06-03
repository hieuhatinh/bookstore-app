import { useEffect, useState } from 'react'
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
import { usePathname } from 'next/navigation'

export default function Sidebar() {
    const pathName = usePathname()

    const result: any =
        listItemCategory.find((item) => item.path === pathName) ||
        listItemCategory[0]

    const [value, setValue] = useState<any>(result.category)

    useEffect(() => {
        setValue(result.category)
    }, [pathName, result.category])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
                        onChange={handleChange}
                        orientation="vertical"
                        className="flex items-start"
                    >
                        {listItemCategory.map((item) => (
                            <Tab
                                component="a"
                                key={item.id}
                                href={item.path}
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
