function CheckPerfect(No)
{
  let i = 0
  let Sum = 0

  for(i = 1; i<= No/2; i++)
  {
    Sum = Sum + i
  }
  return(No == Sum)
  
}
function main()
{
 let bRet = false
 bRet = CheckPerfect(28)
 if(bRet == true)
 {
   console.log("It is perfect Number ")
 }
 else
 {
  console.log("It is not perfect number ")
 }

}

main()
