// Números del 1 al 2000 que empiezan por 2:
let num = 0;
for(count = 1; count <= 2000; count++) {
    num++;
    if(num.toString().startsWith("2")){
        console.log(num);
    }
}