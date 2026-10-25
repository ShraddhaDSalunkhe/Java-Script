function CheckEven(No)
{
  if(No%2 ==0)
  {
    return true
  }
  else
  {
    return false
  }
}
function main()
{
  let value = 10
  let bRet = false

  bRet = CheckEven(value)
  if(bRet == true)
  {
    console.log(`${value} is even - program1030.js:20`)
  }
  else
  {
    console.log(`${value} is odd - program1030.js:24`)
  }
  

}

main()
