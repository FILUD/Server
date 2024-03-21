let express = require('express');
let router = express.Router();
let dbCon = require('../database');

// Edit job posting
router.put('/editjobposting/:jobID', (req, res) => {
    const jobID = req.params.jobID;
    const { Post_IMG, Title, Description, OccupationID, Location, SalaryStart, SalaryMax, WorkType } = req.body;

    const sql = 'UPDATE JobPostings SET Post_IMG = ?, Title = ?, Description = ?, OccupationID = ?, Location = ?, SalaryStart = ?, SalaryMax = ?, WorkType = ? WHERE JobID = ?';
    const values = [ Post_IMG, Title, Description, OccupationID, Location, SalaryStart, SalaryMax, WorkType, jobID];

    dbCon.query(sql, values, (error, result) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: true, message: 'Failed to update job posting' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: true, message: 'Job posting not found' });
        }

        return res.status(200).json({ error: false, message: 'Job posting updated successfully' });
    });
});

// Edit CV
router.put('/editcv/:cvID', (req, res) => {
    const cvID = req.params.cvID;
    const { IMG_CV, Title, OccupationID } = req.body;

    const sql = 'UPDATE Cv SET IMG_CV = ?, Title = ?, OccupationID = ? WHERE CvID = ?';
    const values = [IMG_CV, Title, OccupationID, cvID];

    dbCon.query(sql, values, (error, result) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: true, message: 'Failed to update CV' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: true, message: 'CV not found' });
        }

        return res.status(200).json({ error: false, message: 'CV updated successfully' });
    });
});


// Edit address
router.put('/editaddress/:addressID', (req, res) => {
    const addressID = req.params.addressID;
    const { DistrictID, VillageName } = req.body;

    const sql = 'UPDATE Address SET DistrictID = ?, VillageName = ? WHERE AddressID = ?';
    const values = [DistrictID, VillageName, addressID];

    dbCon.query(sql, values, (error, result) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: true, message: 'Failed to update address' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: true, message: 'Address not found' });
        }

        return res.status(200).json({ error: false, message: 'Address updated successfully' });
    });
});

// Edit jobseeker information
router.put('/editjobseeker/:jobseekerID', (req, res) => {
    const jobseekerID = req.params.jobseekerID;
    const { JobseekerName, ProfessionalTitle, Profile_IMG, Description, AddressID, Tel } = req.body;

    // Update job seeker table
    const jobseekerSql = 'UPDATE Jobseeker SET JobseekerName = ?, ProfessionalTitle = ?, Profile_IMG = ?, Description = ?, AddressID = ?, Tel = ? WHERE JobseekerID = ?';
    const jobseekerValues = [JobseekerName, ProfessionalTitle, Profile_IMG, Description, AddressID, Tel, jobseekerID];

    dbCon.query(jobseekerSql, jobseekerValues, (error, jobseekerResult) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: true, message: 'Failed to update job seeker information' });
        }

        if (jobseekerResult.affectedRows === 0) {
            return res.status(404).json({ error: true, message: 'Job seeker not found' });
        }

        return res.status(200).json({ error: false, message: 'Job seeker information updated successfully' });
    });
});

// Edit employer information
router.put('/editemployer/:employerID', (req, res) => {
    const employerID = req.params.employerID;
    const { CompanyName, ProfessionalTitle, AddressID, Tel, Profile_IMG } = req.body;

    // Update employer table
    const employerSql = 'UPDATE Employer SET CompanyName = ?, ProfessionalTitle = ?, AddressID = ?, Tel = ?, Profile_IMG = ? WHERE EmployerID = ?';
    const employerValues = [ CompanyName, ProfessionalTitle, AddressID, Tel, Profile_IMG, employerID];

    dbCon.query(employerSql, employerValues, (error, employerResult) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: true, message: 'Failed to update employer information' });
        }

        if (employerResult.affectedRows === 0) {
            return res.status(404).json({ error: true, message: 'Employer not found' });
        }

        return res.status(200).json({ error: false, message: 'Employer information updated successfully' });
    });
});




module.exports = router;
