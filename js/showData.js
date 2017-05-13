var sum = [0,0,0,0,0,0]


MoneyCollection.load(function(){
  $("table#commenttable tbody").text("");
  
  var result= MoneyCollection.find(
    { },
    { $orderBy: {date:-1},$limit: 10}
  );
  
  for(var i=0;i<result.length;i++){
    var commentdata="<tr><td>"+result[i].name+"</td><td>"+result[i].number+"</td><td>"+result[i].date+"</tr>"
    $("table#commenttable tbody").append(commentdata);
    
    switch(result[i].name){
      case "食":
        this.sum[0] = this.sum[0] + result[i].number/1
        break;
      case "飲":
        this.sum[1] = this.sum[1] + result[i].number/1
        break;
      case "行":
        this.sum[2] = this.sum[2] + result[i].number/1
        break;
      case "育":
        this.sum[3] = this.sum[3] + result[i].number/1
        break;
      case "樂":
        this.sum[4] = this.sum[4] + result[i].number/1
        break;
      default:
        this.sum[5] = this.sum[5] + result[i].number/1
        break;
                         }
  };
  
  drawMyChart(this.sum)
});  
