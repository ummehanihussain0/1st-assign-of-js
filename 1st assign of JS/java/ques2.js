var a = 2;
var b = 1;
document.write( "a is : " ,  a)
document.write("<br>");

document.write( "b is : " ,  b)
document.write("<br>");
--a;
--a - --b; 
--a - --b + ++b;
var Result = --a - --b + ++b + b--;
document.write( " Result is : " , Result);

