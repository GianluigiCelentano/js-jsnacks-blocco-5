var triangle = {
    base: 5,
    height: 10
}


var ipotenusa = Math.sqrt(Math.pow(triangle.base,2) + Math.pow(triangle.height,2))
console.log(ipotenusa)
var perimetro = ipotenusa + triangle.base + triangle.height
console.log(perimetro)
var area = (triangle.base * triangle.height) / 2
console.log(area)