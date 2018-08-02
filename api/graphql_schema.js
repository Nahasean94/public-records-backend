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

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        students: {
            type: StudentType,
            args: {education: {type: GraphQLID}},
            resolve(parent, args) {
                return queries.findStudent(args.education)
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
            async resolve(parent, args, ctx)
            {
                return await queries.addStudent(args)
            }
        },

    },

})

module.exports = new GraphQLSchema({query: RootQuery, mutation: Mutation})