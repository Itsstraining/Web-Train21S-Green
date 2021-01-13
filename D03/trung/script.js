
let a = prompt("Nhap a: ");
let b = prompt("NHap b: ");

function sum(a,b)
{
    let x = 0; //remember
    let aleght= a.length;
    let bleght = b.length;
    let ditialsum ;
    let plus = "";
    if(b > a)
    {
        let temp = b;
        a=b;
        a=temp;
    }
    for(let i =0 ; i < a.length ; i++)
    {
        let inp1 = parseInt(a.charAt(a.length-1-i));
        let inp2 = parseInt(b.charAt(b.length-1-i));
    
        inp2=(inp2)?inp2:0;
        temp=(x+inp1+inp2).toString();
        ditialsum=temp.charAt(temp.length-1);
        if(temp>0)
        {
            x = 1;

        }else{
            x=0;
        }
        plus = (i==a.length-1)?temp+plus:ditialsum+plus;

    }    
    return plus;
}
    alert(sum(a,b));
   
   