/***
 *
 * This file contains all the graphql queries and mutations. These are responsible for receiving and responding to requests from the front end.
 */

const bcrypt = require("bcrypt")

const queries = require('../databases/queries')
const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLBoolean,} = require('graphql')//import various modules from graphql


const StudentType = new GraphQLObjectType({
    name: 'Admin',
    fields: () => ({
        id: {type: GraphQLID},
        upi: {type: GraphQLString},
        education: {type: GraphQLString},
    })
})
const SecondarySchoolType = new GraphQLObjectType({
    name: 'SecondarySchool',
    fields: () => ({
        id: {type: GraphQLID},
            upi: {type: GraphQLString},
            math: {type: GraphQLInt},
            english: {type: GraphQLInt},
            kiswahili: {type: GraphQLInt},
            chemistry: {type: GraphQLInt},
            biology: {type: GraphQLInt},
            physics: {type: GraphQLInt},
            geography: {type: GraphQLInt},
            history: {type: GraphQLInt},
            religion: {type: GraphQLInt},
            business: {type: GraphQLInt},
            year: {type: GraphQLString},

    })
})
const PrimarySchoolType = new GraphQLObjectType({
    name: 'PrimarySchool',
    fields: () => ({
        id: {type: GraphQLID},
            upi: {type: GraphQLString},
            math: {type: GraphQLInt},
            english: {type: GraphQLInt},
            kiswahili: {type: GraphQLInt},
            chemistry: {type: GraphQLInt},
            biology: {type: GraphQLInt},
            physics: {type: GraphQLInt},
            geography: {type: GraphQLInt},
            history: {type: GraphQLInt},
            religion: {type: GraphQLInt},
            business: {type: GraphQLInt},
            year: {type: GraphQLString},
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        students: {
            type: new GraphQLList(StudentType),
            args: {education: {type: GraphQLString}},
            resolve(parent, args) {
                return queries.findStudent(args.education)
            }
        },
        getSecondarySchoolRecords: {
            type: SecondarySchoolType,
            async resolve(parent, args, ctx) {
                return await queries.getSecondarySchoolRecords(args)
            }
        },
        getPrimarySchoolRecords: {
            type: PrimarySchoolType,
            async resolve(parent, args, ctx) {
                return await queries.getPrimarySchoolRecords(args)
            }
        },
    }
})
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addStudent: {
            type: StudentType,
            args: {
                upi: {type: GraphQLString},
                education: {type: GraphQLString},
            },
            async resolve(parent, args, ctx) {
                return await queries.addStudent(args)
            }
        },
        addSecondarySchoolRecord: {
            type: SecondarySchoolType,
            args: {
                upi: {type: GraphQLString},
                math: {type: GraphQLInt},
                english: {type: GraphQLInt},
                kiswahili: {type: GraphQLInt},
                chemistry: {type: GraphQLInt},
                biology: {type: GraphQLInt},
                physics: {type: GraphQLInt},
                geography: {type: GraphQLInt},
                history: {type: GraphQLInt},
                religion: {type: GraphQLInt},
                business: {type: GraphQLInt},
                year: {type: GraphQLString},
            },
            async resolve(parent, args, ctx) {
                return await queries.addSecondarySchoolRecord(args)
            }
        },
        addPrimarySchoolRecord: {
            type: PrimarySchoolType,
            args: {
                upi: {type: GraphQLString},
                math: {type: GraphQLInt},
                english: {type: GraphQLInt},
                kiswahili: {type: GraphQLInt},
                science: {type: GraphQLInt},
                social_studies: {type: GraphQLInt},
                year: {type: GraphQLString},
            },
            async resolve(parent, args, ctx) {
                return await queries.addPrimarySchoolRecord(args)
            }
        },



    },

})

module.exports = new GraphQLSchema({query: RootQuery, mutation: Mutation})