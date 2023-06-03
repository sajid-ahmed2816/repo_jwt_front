import { useState, useEffect } from "react";
import axios from "axios";
import {
    Box,
    Paper,
    Button,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TablePagination
} from "@mui/material";

function Result() {
    const [response, setResponse] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [totalRecords, setTotalRecords] = useState(0);
    const courseURL = "http://localhost:5050/api/course";

    const handleEdit = (id, data) => {
        console.log(id, data);
        let updatedData = { ...data }; // Initialize with the existing data

        // Prompt for updated values
        let updatedCourseName = prompt("Enter Course Name", data.courseName);
        let updatedDuration = prompt("Enter Duration", data.duration);
        let updatedFees = prompt("Enter Fees", data.fees);
        let updatedShortName = prompt("Enter Short Name", data.shortName);

        // Update the corresponding fields in the updatedData object
        if (updatedCourseName !== null) {
            updatedData.courseName = updatedCourseName;
        }
        if (updatedDuration !== null) {
            updatedData.duration = updatedDuration;
        }
        if (updatedFees !== null) {
            updatedData.fees = updatedFees;
        }
        if (updatedShortName !== null) {
            updatedData.shortName = updatedShortName;
        }

        axios.put(`${courseURL}/${id}`, updatedData)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDelete = (id) => {
        console.log(id);
        axios.delete(`${courseURL}/${id}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`${courseURL}?page=${page + 1}&limit=${rowsPerPage}`);
                setResponse(result.data.data);
                setTotalRecords(result.data.totalRecords);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [page, rowsPerPage]);

    return (
        <Box>
            <Paper>
                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                        <TableHead>
                            <TableRow>
                                <TableCell>Course Name</TableCell>
                                <TableCell>Duration</TableCell>
                                <TableCell>Fees</TableCell>
                                <TableCell>Short Name</TableCell>
                                <TableCell>Edit / Delete</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {response.map((item) => (
                                <TableRow key={item._id}>
                                    <TableCell>{item.courseName}</TableCell>
                                    <TableCell>{item.duration}</TableCell>
                                    <TableCell>{item.fees}</TableCell>
                                    <TableCell>{item.shortName}</TableCell>
                                    <TableCell>
                                        <Button
                                            sx={{ marginRight: 1 }}
                                            variant="outlined"
                                            onClick={() => handleEdit(item._id, item)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            onClick={() => handleDelete(item._id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={totalRecords}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}

export default Result;
