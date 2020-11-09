const router = require('express').Router();
let Course1 = require('../models/course.model');
let Save = require('../models/save.model');


router.route('/').get((req, res) => {
    Save.find()
    .then(saves => res.json(saves))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    console.log("SDsfasdffs");
    const Subject=req.body.Subject
    
    const Course=req.body.Course
    const CourseName=req.body.CourseName
    const Component=req.body.Component
    const Section=req.body.Section
    const Days=req.body.Days
    const StartTime=req.body.StartTime
    const EndTime=req.body.EndTime
    const StartDate=req.body.StartDate
    const EndDate=req.body.EndDate
    const Duration=req.body.Duration
    const InstructionMode=req.body.InstructionMode
    const Building=req.body.Building
    const Room=req.body.Room
    const Instructor=req.body.Instructor
    const EnrollCap=req.body.EnrollCap
    const WaitCap=req.body.WaitCap
    const CombDesc=req.body.CombDesc
    const CombEnrollCap=req.body.CombEnrollCap
    const TwentyFourFormat = req.body.TwentyFourFormat;

  const newSave = new Save({
     Subject,
     Course,
     CourseName,
     Component,
     Section,
     Days,
     StartTime,
     EndTime,
     StartDate,
     EndDate,
     Duration,
     InstructionMode,
     Building,
     Room,
     Instructor,
     EnrollCap,
     WaitCap,
     CombDesc,
     CombEnrollCap,
     TwentyFourFormat,
     
  });

  newSave.save()
  .then(() => res.json('Course added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
/*
router.route('/:id').get((req, res) => {
    Course.findById(req.params.id)
    .then(course => res.json(course))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Course.findByIdAndDelete(req.params.id)
    .then(() => res.json('Course deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Course.findById(req.params.id)
    .then(course => {
        course.username = req.body.username;
        course.description = req.body.description;
        course.duration = Number(req.body.duration);
        course.date = Date.parse(req.body.date);

        course.save()
        .then(() => res.json('Course updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
*/
module.exports = router;