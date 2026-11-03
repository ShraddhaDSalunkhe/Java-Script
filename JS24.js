function main()
{
  for(let i=0; i<=4; i++)
  {
    for(let j=0; j<=i; j++)
    {
      process.stdout.write("*\t")
    }
    console.log()
  }
}

main()
