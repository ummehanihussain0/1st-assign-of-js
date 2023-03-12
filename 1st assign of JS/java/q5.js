var table = "<h2>Multiplication table of " + "4" + "</h2>";
for (var i = 1; i <= 10; i++) {
  table += "<table>";
  table += "<td>" + 4 + " x " + i + "</td>";
  table += "<td>=</td>";
  table += "<td>" + (4 * i) + "</td>";
  table += "</table>";
}
document.write(table);