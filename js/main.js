var fdb = new ForerunnerDB();
var db = fdb.db("資料庫");
MoneyCollection = db.collection('moneys');
MoneyCollection.load()
