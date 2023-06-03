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
    const courseURL = "http://localhost:5050/api/course"

    function handleEdit(id, data) {
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
    }

    function handleDelete(id) {
        console.log(id)
        axios.delete(`${courseURL}/${id}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        axios.get(courseURL)
            .then((res) => {
                console.log(res.data);
                setResponse(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Box>
            <Paper>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Course Name
                                </TableCell>
                                <TableCell>
                                    Duration
                                </TableCell>
                                <TableCell>
                                    Fees
                                </TableCell>
                                <TableCell>
                                    Short Name
                                </TableCell>
                                <TableCell>
                                    Edit
                                    /
                                    Delete
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {(rowsPerPage > 0
                                ? response.slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                : response
                            ).map((item, index) => (
                                <TableRow key={index}>
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
                    count={response.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    )
}

export default Result;

{/* {response.map((item, index) =>
                <ul key={index}>
                    <li>Course Name: {item.courseName}</li>
                    <li>Course Duration: {item.duration}</li>
                    <li>Course Fees: {item.fees}</li>
                    <li>Course shortName: {item.shortName}</li>
                    <li>ID: {item._id}</li>
                    <Button variant="outlined" onClick={() => handleEdit(item._id, item)}>Edit</Button>
                    <Button variant="outlined" onClick={() => handleDelete(item._id)}>Delete</Button>
                </ul>
                <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Course Name
                        </th>
                        <th>
                            Duration
                        </th>
                        <th>
                            Fees
                        </th>
                        <th>
                            Short Name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {response.map((item, index) => (
                        <tr key={index}>
                            <td>{item.courseName}</td>
                            <td>{item.duration}</td>
                            <td>{item.fees}</td>
                            <td>{item.shortName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
            )} */}