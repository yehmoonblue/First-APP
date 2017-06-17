var sum = [0,0,0,0,0,0]


MoneyCollection.load(function(){
  $("table#commenttable tbody").text("");
  
  var result= MoneyCollection.find(
    { },
    { $orderBy: {date:-1},$limit: 10}
  );
  
    for(var i=0;i<result.length;i++){
      var commentdata="<tr><td>"+result[i].name+"</td><td>"+result[i].number+"</td><td>"+result[i].date+"</td><td>"+result[i].deleteitem+"</td></tr>"
      $("table#commenttable tbody").append(commentdata);
    };
});


function deleteitem(){
      var id = $(this).data("id");
      console.log(id)
      var r=confirm("你確定要刪掉嗎？")
      if(r){
        MoneyCollection.remove({
          _id:id
        });  
        MoneyCollection.save();
      };
        console.log(777);
      }
        



      
      $("table").on("click","button#deleteitem",deleteitem);
      
