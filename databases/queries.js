/**
 * This file contains database queries. We use the schemas defined in the schemas to CRUD within MongoDB
 */

"use strict"
const {
    Student,
    PrimarySchool,
    SecondarySchool,
    Institution
} = require('./schemas')//import various models
const mongoose = require('mongoose')//import mongoose library


mongoose.connect('mongodb://localhost/public_records', {promiseLibrary: global.Promise})

const queries = {
    addStudent: async function (student) {
        return await new Student({upi: student.upi, education: student.education}).save()
    },
    addInstitution: async function (name) {
        return await new Student({
            upi: name.upi,
            name: name.name
        }).save()
    },
    addSecondarySchoolRecord: async function (record) {
        return await new SecondarySchool({
            upi: record.upi,
            math: record.math,
            english: record.english,
            kiswahili: record.kiswahili,
            chemistry: record.chemistry,
            biology: record.biology,
            physics: record.physics,
            geography: record.geography,
            history: record.history,
            religion: record.religion,
            business: record.business,
            year: record.year,
        }).save()
    },
    addPrimarySchoolRecord: async function (record) {
        return await new SecondarySchool({
            upi: record.upi,
            math: record.math,
            english: record.english,
            kiswahili: record.kiswahili,
            science: record.science,
            social_studies: record.social_studies,
            year: record.year,
        }).save()
    },
    findStudent: async function (education) {
        return await Student.find({education: education}).exec()
    },
    getSecondarySchoolRecords: async function () {
        return await SecondarySchool.find({}).exec()
    },
    getPrimarySchoolRecords: async function () {
        return await PrimarySchool.find({}).exec()
    }
}
module.exports = queries
