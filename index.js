const express=require('express')
const app=express()
const {graphqlHTTP}=require('express-graphql')
const schema=require('./schema')
const resolvers=require('./resolvers')
const db=require('./db')
app.get("/",(req,res,next)=>{
    res.redirect("/graphql")
})
const ss="SAUD SAID"
app.use("/graphql",graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
    context:{
        db
    }


  }))

app.listen({port:4000},()=>{
    console.log("server working")
})