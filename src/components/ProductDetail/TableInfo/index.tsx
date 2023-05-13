import styled from '@emotion/styled'
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
    tableCellClasses,
} from '@mui/material'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#f5f5f5',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}))

const informations = [
    {
        name: 'Công ty phát hành',
        data: 'Alphabooks',
    },
    {
        name: 'Ngày xuất bản',
        data: '2018-12-26 16:24:25',
    },
    {
        name: 'Kích thước',
        data: '13 x 20,5 cm',
    },
    {
        name: 'Dịch Giả',
        data: 'Phương Oanh',
    },
    {
        name: 'Loại bìa',
        data: 'Bìa mềm',
    },
    {
        name: 'Số trang',
        data: 444,
    },
    {
        name: 'Nhà xuất bản',
        data: 'Nhà Xuất Bản Lao Động Xã Hội',
    },
]

export default function TableInfo() {
    return (
        <Box className="p-5">
            <Typography variant="h6" className="font-bold mb-3">
                Thông tin sản phẩm
            </Typography>
            <TableContainer>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableBody>
                        {informations.map((item) => (
                            <StyledTableRow key={item.name}>
                                <StyledTableCell component="th" scope="row">
                                    {item.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {item.data}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
