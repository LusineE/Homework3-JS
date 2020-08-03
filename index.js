// -----------------------recursive fibonachi------------------------------
 const recfib = n =>{
     if (n<0)
     return 0
     if (n===1)
     return 1
     return recfib(n-2)+recfib(n-1)
 }
 console.log(recfib(6))

 