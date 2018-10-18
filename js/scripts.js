var add = function(num1, num2) {
  var sum = num1 + num2;
  return sum;
};



$(document).ready(function() {
  $("#triangle").submit(function(event) {
    event.preventDefault();

    var a = parseInt($("input#a").val());
    var b = parseInt($("input#b").val());
    var c = parseInt($("input#c").val());

    var sumofab = add(a,b);
    var sumofac = add(a,c);
    var sumofcb = add(c,b);


    if (sumofab <= c || sumofcb <=a || sumofac <= b){
      $("#not").show();
    }else if (a === b&& b=== c && a === c) {
      $("#equilateral").show();
    }else if (a!==b && a!==c && b!==c) {
      $("#scalene").show();
    }else if (a === b || b=== c || a === c){
      $("#isosceles").show();
    }

  });
});
