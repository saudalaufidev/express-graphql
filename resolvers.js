const root={    
    users(p,{db}){
        //ctx index number 1 in express-graphql 
        //ctx index number 2 in apollo and yoga 
        return db.users
    }
}
module.exports=root