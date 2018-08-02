/**
 * This file contains database queries. We use the schemas defined in the schemas to CRUD within MongoDB
 */

"use strict"
const {
    Student
} = require('./schemas')//import various models
const mongoose = require('mongoose')//import mongoose library


mongoose.connect('mongodb://localhost/public_records', {promiseLibrary: global.Promise})

const queries = {
    addStudent: async function (student) {
        return await new Student({upi: student.upi, education: student.education}).save()
    },
    findStudent: async function (education) {
        return await Student.find({education: education}).exec()
    }
}
module.exports = queries
