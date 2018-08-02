'use strict'

/**
 *
 * This file contains the schemas (tables) that will be used to store various data
 */
//import the mongoose library to help us create javascript objects which are used to define schemas and also hold various data types
const mongoose = require('mongoose')

/**
 *
 * In mongoose, a schema represents the structure of a particular document, either completely or just a portion of the document. It's a way to express expected properties and values as well as constraints and indexes. A model defines a programming interface for interacting with the database (read, insert, update, etc). So a schema answers "what will the data in this collection look like?" and a model provides functionality like "Are there any records matching this query?" or "Add a new document to the collection".

 In straight RDBMS, the schema is implemented by DDL statements (create table, alter table, etc), whereas there's no direct concept of a model, just SQL statements that can do highly flexible queries (select statements) as well as basic insert, update, delete operations.

 Another way to think of it is the nature of SQL allows you to define a "model" for each query by selecting only particular fields as well as joining records from related tables together.

 *
 */
//declare the Schema object. Each Schema object represents the equivalent of table in mysql
const Schema = mongoose.Schema

//create the Advocate Schema (Advocate table)
const StudentSchema = new Schema({
    upi: {
        type: String,
        unique: true,
        required: [true, 'UPI is a required field']
    },
    education: {
        type: String,
        enum: ['primary','secondary'],
        required: [true, 'Education is required']
    },
})



/**
 *
 * Create models from the above schemas.
 */
const Student = mongoose.model('Student', StudentSchema)
//export the above models to used in other files
module.exports = {
   Student
}