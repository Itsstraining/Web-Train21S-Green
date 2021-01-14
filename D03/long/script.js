let a = prompt("Nhap a");
let b = prompt("Nhap b");
function sum(a,b)
{
    let carry = 0; 
     let alength=a.length;
     let blength=b.length;
     let dgsum; 
     let plus="";
     if(b > a)
     {
         let temp = b;
         a = b;
         a = temp;
     }
     for(let i = 0; i < a.length ; i++)
     {
         let inp1 = parseInt(a.charAt(a.length-1-i));
         let inp2 = parseInt(b.charAt(b.length-1-i));
         inp2=(inp2)?inp2:0;
         temp=(carry+inp1+inp2).toString();
         dgsum=temp.charAt(temp.length-1);
         if(temp>9)
         {
             carry = 1;
         }else
         {
             carry = 0;

         }
         plus = (i==a.length-1)?temp+plus:dgsum+plus;
         
     }
     return plus;
}
alert(sum(a,b));