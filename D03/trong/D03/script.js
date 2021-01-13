let a = prompt("nhap so thu 1 : ");
let b = prompt("nhap so thu 2 : ");
function sum(num1,num2){
    let alength = a.length;
    let blength = b.length;
    let carry = 0;
    let c;
    let ketqua="";
    
    if(b.length>a.length){
       let temp = b; 
        b = a;
        a = temp;
    }
    c = a.length -  b.length;
    for(let i =0; i <c; i++)    
    {
        b = '0' + b
    }
    for(let i = 0; i <a.length; i++)
    {
        let d = parseInt(a.charAt(a.length-1-i));
        let e = parseInt(b.charAt(b.length-1-i));
        let tinh = d + e;
        tinh.toString();
        ketqua = tinh + ketqua;
    }
    return ketqua;
}
alert(sum(a,b));
