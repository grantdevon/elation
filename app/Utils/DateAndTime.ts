export const getCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1.
    const year = currentDate.getFullYear();
  
    // Use template literals to format the date as "day-month-year".
    const formattedDate = `${day}-${month}-${year}`;
  
    return formattedDate;
  };

export const getCurrentTime = () => {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    
    return `${hours}:${minutes}:${seconds}`;
  }
  