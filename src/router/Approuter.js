import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/login";
import Course from "../pages/Course"
import Teacher from "../pages/Teacher"
import Institute from "../pages/Institute"
import Student from "../pages/Student"
import Result from "../pages/Result";
import Stdresult from "../pages/Stdresult";
import Tearesult from "../pages/Tearesult";
import Insresult from "../pages/Insresult";

function Approuter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/student" element={<Student />} />
                <Route path="/teacher" element={<Teacher />} />
                <Route path="/institute" element={<Institute />} />
                <Route path="/course" element={<Course />} />
                <Route path="/result" element={<Result />} />
                <Route path="/stdresult" element={<Stdresult />} />
                <Route path="/tearesult" element={<Tearesult />} />
                <Route path="/insresult" element={<Insresult />} />
            </Routes>
        </Router>
    )
};

export default Approuter;