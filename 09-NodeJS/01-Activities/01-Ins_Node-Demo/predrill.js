
function weekday(arg1) {
    if (arg1 && typeof arg1 === "number") {
      arg1 = arg1 % 7;
      /**
       * 0 - please enter a number
       */
    } else {
      return "Please enter a number";
    }
    
    const daysOfWeek = {
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
      7: "Sunday",
    };
    // Remember to use bracket notation with variables containing property values like [arg1]
    return daysOfWeek[arg1];
  }
  ​
  const dayAsString = weekday(1);
  console.log(dayAsString);