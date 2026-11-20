// time_zone_date of india
const indiaTime = new Date().toLocaleString("en-IN", {
  timeZone: "Asia/Kolkata"
});

// print india times via its timezone
console.log(indiaTime);