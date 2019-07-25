function getMessage(){
    const year = new Date().getFullYear();
   const month = new Date().getMonth();
   const date = new Date().getDate();

   console.log("Today date is  " + year  + "  " +  month  + "  " +  date);
  }
getMessage();