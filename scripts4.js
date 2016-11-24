function getTriangleArea(a, h) {
	if ( a <= 0 || h <= 0) {
		console.log("Nieprawidłowe dane")
	} else if ( a > 0 && h > 0) {
		return a*h/2
	}
}

console.log( getTriangleArea(10,6) )
var triangle1Area = getTriangleArea(0, 15);
var triangle2Area = getTriangleArea(2, 0);
var triangle3Area = getTriangleArea(0, 0);
