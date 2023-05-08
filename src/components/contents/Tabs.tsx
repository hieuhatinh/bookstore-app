import { useState } from 'react'
import { Box, Tab } from '@mui/material'
import { TabContext, TabPanel, TabList } from '@mui/lab'

interface ITabItem {
    value: string
    label: string
}

interface IProps {
    items: ITabItem[]
}

export default function Tabs(props: IProps) {
    const { items } = props

    const [value, setValue] = useState<string>(items[0].value)

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                >
                    {items.map((item) => (
                        <Tab
                            key={item.value}
                            label={item.label}
                            value={item.value}
                        />
                    ))}
                </TabList>
            </Box>
            {items.map((item) => (
                <TabPanel key={item.value} value={item.value}>
                    Item One
                </TabPanel>
            ))}
        </TabContext>
    )
}
