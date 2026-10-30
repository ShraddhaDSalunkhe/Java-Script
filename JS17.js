function Summation(Arr)
{
   let iSum = 0, i=0
   
   for(i=0;i<Arr.length;i++)
   {
      iSum = iSum+ Arr[i]
   }
   return (iSum)
}
function main()
{
   let Arr = [11,21,51,101]
   let iRet = 0
   iRet = Summation(Arr)

   console.log("Summation is :  Untitled1:17 - program1043.js:17",iRet)
   
}

main()
