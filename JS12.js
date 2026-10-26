function SumDigit(No)
{
  isum = 0
  idigit = 0
  
 while(No!= 0)
 {
   idigit = No%10
   isum = isum + idigit
   No= No/10
 }
}
function main()
{
  let iret= 0;

  iret = SumDigit(257)
 
  console.log("Summation of digits : ",iret)
}

main()
