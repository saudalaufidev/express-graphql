const {buildSchema}=require('graphql')
module.exports=buildSchema(`
type Query{
    users:[User!]!
}
type User{
    id:ID!
    name:String!
}
`)