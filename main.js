canvas = document.getElementById("my_canvas");
ctx = canvas.getContext ("2d");

ctx.beginPath ();
ctx.strokeStyle = "grey";
ctx.lineWidth = 4;
ctx.rect (150, 143, 430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc (200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath ();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc (250, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath ();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc (300, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath ();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc (350, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath ();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc (400, 200, 40, 0, 2 * Math.PI);
ctx.stroke();