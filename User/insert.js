
let express = require('express');
let router = express.Router();
let dbCon = require('../database');

//insert new job posting
router.post('/postjobposting', (req, res) => {

    const { EmployerID, Post_IMG, Title, Description, OccupationID, Location, SalaryStart, SalaryMax, WorkType} = req.body;

    const sql = 'INSERT INTO JobPostings (EmployerID, Post_IMG, Title, Description, OccupationID, Location, SalaryStart, SalaryMax, PostDate, WorkType) VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), ?)';
    const values = [EmployerID, Post_IMG, Title, Description, OccupationID, Location, SalaryStart, SalaryMax, WorkType];

    dbCon.query(sql, values, (error, result) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: true, message: 'Failed to insert job posting' });
        }

        return res.status(201).json({ error: false, message: 'Job posting created successfully', jobPostingId: result.insertId });
    });
});

//post cv
router.post('/postcv', (req, res) => {
    const { JobseekerID, IMG_CV, Title, UploadDate, OccupationID } = req.body;

    const sql = 'INSERT INTO Cv (JobseekerID, IMG_CV, Title, UploadDate, OccupationID) VALUES (?, ?, ?, NOW(), ?)';
    const values = [JobseekerID, IMG_CV, Title, OccupationID];

    dbCon.query(sql, values, (error, result) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: true, message: 'Failed to upload CV' });
        }
        return res.status(201).json({ error: false, message: 'CV uploaded successfully', cvId: result.insertId });
    });
});

//post address
router.post('/postaddress', (req, res) => {
    const { DistrictID, VillageName } = req.body;

    const sql = 'INSERT INTO Address (DistrictID, VillageName) VALUES (?, ?)';
    const values = [DistrictID, VillageName];

    dbCon.query(sql, values, (error, result) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: true, message: 'Failed to insert address' });
        }

        return res.status(201).json({ error: false, message: 'Address inserted successfully', addressId: result.insertId });
    });
});



//post Province
router.post('/postprovince', (req, res) => {

    const { ProvinceName } = req.body;

    const sql = 'INSERT INTO Province ( ProvinceName ) VALUES ( ? )';
    const values = [ ProvinceName ];

    dbCon.query(sql, values, (error, result) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: true, message: 'Failed to insert Province' });
        }

        return res.status(201).json({ error: false, message: 'Province inserted successfully', districtId: result.insertId });
    });
});

//post WorkCategory
router.post('/postcategory', (req, res) => {

    const { CategoryName } = req.body;

    const sql = 'INSERT INTO WorkCategory ( CategoryName ) VALUES ( ? )';
    const values = [ CategoryName ];

    dbCon.query(sql, values, (error, result) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: true, message: 'Failed to insert Category' });
        }

        return res.status(201).json({ error: false, message: 'Category inserted successfully', districtId: result.insertId });
    });
});

module.exports = router;


