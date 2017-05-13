var sum = [0,0,0,0,0,0]


MoneyCollection.load(function(){
  $("table#commenttable tbody").text("");
  
  var result= MoneyCollection.find(
    { },
    { $orderBy: {date:-1},$limit: 10}
  );
  
  for(var i=0;i<result.length;i++){
    var commentdata="<tr><td>"+result[i].name+"</td><td>"+result[i].number+"</td><td>"+result[i].date+"</td><td>"+"<button id='deleteitem' type='button' class='btn btn-default' data-id='"+MoneyCollection.find()[i]._id+"'>刪除</button>"+"</tr>"
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

function drawMyChart(sum){
    if(!!document.createElement('canvas').getContext){ 
      var mychart = new AwesomeChart('canvas1');
      mychart.title = "消費總覽";
      mychart.data = [sum[0], sum[1], sum[2], sum[3], sum[4], sum[5]];
      mychart.labels = ["食", "飲", "行", "育", "樂","其他"];
      mychart.draw();
    }
  }


function deleteitem(){
      var id = $(this).data("id");
      console.log(id)
      var r=confirm
      if(r){
        MoneyCollection.remove({
          _id:id
        });  
        MoneyCollection.save();
      };
        console.log(777);
      }
      
      $("table").on("click","button#deleteitem",deleteitem);


