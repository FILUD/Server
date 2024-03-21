let express = require('express');
let router = express.Router();
let dbCon = require('../database');
let app = express();

// Select all postings job
router.get('/getjobpostings', (req, res) =>{
    dbCon.query('SELECT * FROM JobPostings', (error, results, fields) =>{
        if(error) throw error;

        let message = ''
        if (results === undefined || results.length == 0){
            message = 'Job not found';
        }else{
            message = 'Successfully retrieved all Job';
        }
        return res.send({ error: false, data: results, message: message})
    })
})

router.get('/getalljobseeker', (req, res) =>{
    dbCon.query('SELECT * FROM Jobseeker', (error, results, fields) =>{
        if(error) throw error;

        let message = ''
        if (results === undefined || results.length == 0){
            message = 'Jobseeker not found';
        }else{
            message = 'Successfully all Jobseeker';
        }
        return res.send({ error: false, data: results, message: message})
    })
})

router.get('/getallcv', (req, res) =>{
    dbCon.query('SELECT * FROM Cv', (error, results, fields) =>{
        if(error) throw error;

        let message = ''
        if (results === undefined || results.length == 0){
            message = 'CV not found';
        }else{
            message = 'Successfully all CV';
        }
        return res.send({ error: false, data: results, message: message})
    })
})

router.get('/getalladdress', (req, res) =>{
    dbCon.query('SELECT * FROM Address', (error, results, fields) =>{
        if(error) throw error;

        let message = ''
        if (results === undefined || results.length == 0){
            message = 'Address not found';
        }else{
            message = 'Successfully all Address';
        }
        return res.send({ error: false, data: results, message: message})
    })
})

router.get('/getalldistrict', (req, res) =>{
    dbCon.query('SELECT * FROM District', (error, results, fields) =>{
        if(error) throw error;

        let message = ''
        if (results === undefined || results.length == 0){
            message = 'District not found';
        }else{
            message = 'Successfully all District';
        }
        return res.send({ error: false, data: results, message: message})
    })
})

router.get('/getallcategory', (req, res) =>{
    dbCon.query('SELECT * FROM WorkCategory', (error, results, fields) =>{
        if(error) throw error;

        let message = ''
        if (results === undefined || results.length == 0){
            message = 'Category not found';
        }else{
            message = 'Successfully all Category';
        }
        return res.send({ error: false, data: results, message: message})
    })
})


module.exports = router;
