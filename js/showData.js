var sum = [0,0,0,0,0,0]

  MoneyCollection.load(function(){
      $("table#commenttable tbody").text("");
      
      var result= MoneyCollection.find(
        { },
        { $orderBy: {date:-1},$limit: 10}
        );
        
      for(var i=0;i<result.length;i++){
        var commentdata="<tr><td>"+result[i].date+"</td><td>"+result[i].name+"</td><td>"+result[i].number+"</tr>"
