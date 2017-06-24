var sum = [0,0,0,0,0,0]

MoneyCollection.load(function(){
  $("table#commenttable tbody").text("");
  
  var result= MoneyCollection.find(
    { },
    { $orderBy: {date:-1},$limit: 10}
  );
  
  
  for(var i=0;i<result.length;i++){
    var commentdata="<tr><td>"+result[i].name+"</td><td>"+result[i].type+"</td><td>"+result[i].number+"</td><td>"+result[i].date+"</td><td>"+"<button id='deleteitem' type='button' class='btn btn-default' data-id='"+MoneyCollection.find()[i]._id+"'>刪除</button>"+"</td></tr>"
    $("table#commenttable tbody").append(commentdata);
    switch(result[i].type){
      case "食":
        this.sum[0] = this.sum[0] + result[i].number/1
        break;
      case "衣":
        this.sum[1] = this.sum[1] + result[i].number/1
        break;
      case "行":
        this.sum[2] = this.sum[2] + result[i].number/1
        break;
      case "樂":
        this.sum[3] = this.sum[3] + result[i].number/1
        break;
      default:
        this.sum[4] = this.sum[4] + result[i].number/1
        break;
                         }
  };
  drawMyChart(this.sum)
});


function drawMyChart(sum){
    if(!!document.createElement('canvas').getContext){ 
      var mychart = new AwesomeChart('canvas1');
      mychart.title = "消費總覽";
      mychart.data = [sum[0], sum[1], sum[2], sum[3], sum[4]];
      mychart.labels = ["食","衣","行","樂","其他"];
      mychart.draw();
    }
  }

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

  
