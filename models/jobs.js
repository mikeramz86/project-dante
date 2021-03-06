'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const jobsSchema = mongoose.Schema({
    job: {type: String, required: true},
    company: {type: String, required: true},
    stage: {type: String, required: true},
    status: {type: String,},
    date: {type: String},
    comp: {type: String},
    pros: {type: String},
    cons: {type: String},
    notes: {type: String},
    userId: {type: String, required: false}
});


jobsSchema.methods.serialize = function () {
    return {
        id: this._id,
        job: this.job,
        company: this.company,
        stage: this.stage,
        status: this.status,
        date: this.date,
        comp: this.comp,
        pros: this.pros,
        cons: this.cons,
        notes: this.notes,
        userId: this.userId,
    };
};

const Job = mongoose.model('Job', jobsSchema);

module.exports = { Job };


