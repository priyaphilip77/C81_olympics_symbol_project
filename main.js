canvas = document.getElementById("my_canvas");

ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "purple";
ctx.lineWidth = 10;
ctx.rect(160, 143, 500, 300);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 15;
ctx.arc(295, 270, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 15;
ctx.arc(415, 270, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 15;
ctx.arc(535, 270, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 15;
ctx.arc(355, 320, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 15;
ctx.arc(475, 320, 50, 0, 2*Math.PI);
ctx.stroke();