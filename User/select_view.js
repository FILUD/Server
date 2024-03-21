let express = require('express');
let router = express.Router();
let dbCon = require('../database');
let app = express();

// Select View postings job
router.get('/viewjobpostings', (req, res) =>{
    dbCon.query('SELECT * FROM JobPostings_View', (error, results, fields) =>{
        if(error) throw error;

        let message = ''
        if (results === undefined || results.length == 0){
            message = 'Job not found';
        }else{
            message = 'Successfully View all Job';
        }
        return res.send({ error: false, data: results, message: message})
    })
})

// Select View BY EmployerID
router.post('/viewjobpostings_byid', (req, res) =>{
    const employerID = req.body.employerID;
    dbCon.query('SELECT * FROM JobPostings_Details WHERE EmployerID = ?', employerID, (error, results, fields) =>{
        if(error) throw error;

        let message = ''
        if (results === undefined || results.length == 0){
            message = 'No job postings found for this employer';
        }else{
            message = 'Successfully viewed job postings';
        }
        return res.send({ error: false, data: results, message: message})
    })
})

//Select View CV
router.get('/viewcv', (req, res) =>{
    dbCon.query('SELECT * FROM Cv_Details', (error, results, fields) =>{
        if(error) throw error;

        let message = ''
        if (results === undefined || results.length == 0){
            message = 'CV not found';
        }else{
            message = 'Successfully View all CV';
        }
        return res.send({ error: false, data: results, message: message})
    })
})

// Select View BY EmployerID
router.post('/viewcv_byid', (req, res) =>{
    const jobseekerID = req.body.jobseekerID;
    dbCon.query('SELECT * FROM Cv_Details WHERE JobseekerID = ?', jobseekerID, (error, results, fields) =>{
        if(error) throw error;

        let message = ''
        if (results === undefined || results.length == 0){
            message = 'No Cv found for this jobseekerID';
        }else{
            message = 'Successfully viewed CV';
        }
        return res.send({ error: false, data: results, message: message})
    })
})

//Select View Jobseeker
router.get('/viewjobseeker', (req, res) =>{
    dbCon.query('SELECT * FROM Jobseeker_View', (error, results, fields) =>{
        if(error) throw error;

        let message = ''
        if (results === undefined || results.length == 0){
            message = 'Jobseeker not found';
        }else{
            message = 'Successfully View all Jobseeker';
        }
        return res.send({ error: false, data: results, message: message})
    })
})

// Select View Jobseeker BY JobseekerID
router.post('/viewjobseeker_byid', (req, res) =>{
    const jobseekerID = req.body.jobseekerID;
    dbCon.query('SELECT * FROM Jobseeker_View WHERE JobseekerID = ?', jobseekerID, (error, results, fields) =>{
        if(error) throw error;

        let message = ''
        if (results === undefined || results.length == 0){
            message = 'No Data found for this jobseekerID';
        }else{
            message = 'Successfully viewed jobseeker';
        }
        return res.send({ error: false, data: results, message: message})
    })
})

//Select View Employer
router.get('/viewemployer', (req, res) =>{
    dbCon.query('SELECT * FROM Employer_View', (error, results, fields) =>{
        if(error) throw error;

        let message = ''
        if (results === undefined || results.length == 0){
            message = 'Employer not found';
        }else{
            message = 'Successfully View all Employer';
        }
        return res.send({ error: false, data: results, message: message})
    })
})

// Select View Employer BY EmployerID
router.post('/viewemployer_byid', (req, res) =>{
    const employerID = req.body.employerID;
    dbCon.query('SELECT * FROM Employer_View WHERE EmployerID = ?', employerID, (error, results, fields) =>{
        if(error) throw error;

        let message = ''
        if (results === undefined || results.length == 0){
            message = 'No Data found for this employerID';
        }else{
            message = 'Successfully viewed employer';
        }
        return res.send({ error: false, data: results, message: message})
    })
})

// Select View postings job
router.get('/viewaddress', (req, res) =>{
    dbCon.query('SELECT * FROM Address_view', (error, results, fields) =>{
        if(error) throw error;

        let message = ''
        if (results === undefined || results.length == 0){
            message = 'Job not found';
        }else{
            message = 'Successfully View all Job';
        }
        return res.send({ error: false, data: results, message: message})
    })
})


module.exports = router;