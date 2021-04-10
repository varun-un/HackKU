console.log("jsloaded");
var MongoClient = import('mongodb');
MongoClient = MongoClient.MongoClient;
const uri = "mongodb+srv://general_access:jjzrqmvtwbh1TNcu@nutritious.llyyo.mongodb.net/nutritioUS?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var email = "";
client.connect(err => {
    const collection = client.db("nutritioUS").collection("user_accounts");
    // perform actions on the collection object
    collection.find({email: 'carl.wheezer321@gmail.com'}).toArray((error, items) => {
        console.log(items)
    });

    client.close();
});