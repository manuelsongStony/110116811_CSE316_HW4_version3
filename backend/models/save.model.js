const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const saveSchema = new Schema({
    Subject: { type: String, required: false },
    Course: { type: String, required: false },
    CourseName: { type: String, required: false },
    Component: { type: String, required: false },
    Section: { type: String, required: false },
    Days: { type: String, required: false },
    StartTime: { type: String, required: false },
    EndTime: { type: String, required: false },
    StartDate: { type: String, required: false },
    EndDate: { type: String, required: false },
    Duration: { type: String, required: false },
    InstructionMode: { type: String, required: false },
    Building: { type: String, required: false },
    Room: { type: String, required: false },
    Instructor: { type: String, required: false },
    EnrollCap: { type: String, required: false },
    WaitCap: { type: String, required: false },
    CombDesc: { type: String, required: false },
    CombEnrollCap: { type: String, required: false },
    TwentyFourFormat: { type: String, required: false }
  
});

const Save = mongoose.model('Save', saveSchema);

module.exports = Save;