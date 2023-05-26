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
import { isNullOrUndefined } from 'util'

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
        data: null,
    },
    {
        name: 'Kích thước',
        data: null,
    },
    {
        name: 'Số trang',
        data: null,
    },
    {
        name: 'Nhà xuất bản',
        data: null,
    },
]

interface IPropsTableInfo {
    issuingCompany: string | undefined
    numberOfPages: number | undefined
    size: string | undefined
    publishingCompany: string | undefined
}

export default function TableInfo(props: IPropsTableInfo) {
    const { issuingCompany, numberOfPages, size, publishingCompany } = props

    return (
        <Box className="p-5">
            <Typography variant="h6" className="font-bold mb-3">
                Thông tin sản phẩm
            </Typography>
            <TableContainer>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableBody>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                                Công ty phát hành
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {issuingCompany}
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                                Kích thước
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {size}
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                                Số trang
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {numberOfPages}
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                                Nhà xuất bản
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {publishingCompany}
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
