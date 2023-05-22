import { useEffect, useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { TabContext, TabPanel, TabList } from '@mui/lab'

import CardContainer from '@/components/Card/CardContainer'
import NoData from '@/components/NoData'
import { collection, getDocs, getDocsFromServer } from 'firebase/firestore'
import { db } from '@/config/firebase'

interface ITabItem {
    value: string
    label: string
}

interface IProps {
    items: ITabItem[]
}

export default function TabsContent(props: IProps) {
    const { items } = props

    const [value, setValue] = useState<string>(items[0].value)

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    // useEffect(() => {
    //     const data = async () => {
    //         const data1 = await getDocs(collection(db, 'all'))
    //         data1.forEach((doc) => {
    //             console.log(doc.id, doc.data())
    //         })
    //     }

    //     data()
    // }, [])

    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    textColor="primary"
                    indicatorColor="primary"
                >
                    {items.map((item) => (
                        <Tab
                            key={item.value}
                            label={item.label}
                            value={item.value}
                        />
                    ))}
                </Tabs>
            </Box>
            {items.map((item) => (
                <TabPanel key={item.value} value={item.value}>
                    {/* <CardContainer /> */}
                    <NoData text="Không có sản phẩm nào" />
                </TabPanel>
            ))}
        </TabContext>
    )
}
