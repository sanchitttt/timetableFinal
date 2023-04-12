import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const daysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const columns = ['Day', 'Branch', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

function Timetable({ data, rowSpanLength }) {
    if (data && data.length && data[0] && data[0][0]) {
        return (
            <motion.div
                className='w-[100%] h-[100%]'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: '0.3' }}
            >
                <TableContainer sx={{ maxHeight: '100%', width: '100%' }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => {
                                    return <TableCell align="center">{column}</TableCell>
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((day, idx) => {
                                return (
                                    <>
                                        <TableRow>
                                            <TableCell rowSpan={rowSpanLength + 1}>
                                                {daysArr[idx]}
                                            </TableCell>
                                        </TableRow>
                                        {day.map((item) => {
                                            return (
                                                <TableRow>
                                                    <TableCell>{item[0]}</TableCell>
                                                    {item[1].map((subItem) => {
                                                        return <TableCell>{subItem}</TableCell>;
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                    </>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </motion.div>
        )
    }

}

export default Timetable