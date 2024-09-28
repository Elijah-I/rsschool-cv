document
  .querySelector("#month-for-now")
  .appendChild(
    document.createTextNode(monthDiff(new Date("03.01.2024"), new Date()))
  );

function monthDiff(d1, d2) {
  let months;

  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();

  return months <= 0 ? 0 : months;
}
