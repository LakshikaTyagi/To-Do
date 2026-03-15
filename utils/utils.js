function getDate() {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDay();
  const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December",];

  const todayDate = date.getDate();

  return `${dayNames?.[day]}, ${months?.[month]} ${todayDate} `;
}

export { getDate };
