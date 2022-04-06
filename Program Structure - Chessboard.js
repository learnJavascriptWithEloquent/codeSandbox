var h = 8
var w = 8
var salida = '';
for(var i=0;i<h;i++) {
    for(var j=0;j<w;j++) {
        if(i%2 == 0) {
            salida += (j%2 == 0)?" ":"#"
        }else{
            salida += (j%2 == 0)?"#":" "
        }
    }
    salida += '\n'
}
console.log(salida)