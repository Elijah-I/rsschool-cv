const Burger = {
  toggleMenu() {
    document.body.classList.toggle("with-menu");
  },
};

// * 2

// const strings = [
//   [0, 1, 1, 0],
//   [1, 0, 0, 0],
//   [1, 0, 0, 0],
//   [, 0, 0, 0],
// ];

// const total =
//   strings.reduce((total, line) => {
//     return total + line.reduce((a, b) => a + b, 0);
//   }, 0) / 2;

// console.log(total);

// * 3

// const now = [7, 23, 58];
// const nowTimestamp = convertToTimestamp(now);

// const notifications = [
//   [1, 0, 0],
//   [7, 23, 0],
//   [1, 1, 0],
//   [1, 1, 1],
// ];

// const settings = {
//   gap: 1000000000,
//   minimal: 1000000000,
//   minimalKey: -1,
// };

// const closestKey = notifications
//   .map((date) => convertToTimestamp(date))
//   .reduce((closestKey, timestamp, key) => {
//     const currentGap = timestamp - nowTimestamp;
//     if (currentGap >= 0 && currentGap < settings.gap) {
//       settings.gap = currentGap;
//       closestKey = key;
//     }
//     if (timestamp < settings.minimal) {
//       settings.minimal = timestamp;
//       settings.minimalKey = key;
//     }
//     return closestKey;
//   }, -1);

// const closest =
//   notifications[closestKey !== -1 ? closestKey : settings.minimalKey];

// console.log(closest);

// * 4

// let total = 0;
// const N = 5;
// const startFrom = [2, 2];

// const space = [
//   ["*", "*", "*", "*", "*"],
//   ["*", ".", ".", ".", "*"],
//   ["*", "*", ".", "*", "*"],
//   ["*", ".", ".", ".", "*"],
//   ["*", "*", "*", "*", "*"],
// ];

// const getSpaces = (line, position) => {
//   const getLine = (line, position, direction = false) => {
//     const positionLeft = position - 1;
//     const positionRight = position + 1;

//     if (!direction) {
//       if (space[line][position] === ".") total++;
//       else return;
//     }

//     if (
//       (!direction || direction === "left") &&
//       positionLeft >= 0 &&
//       space[line][positionLeft] === "."
//     ) {
//       total++;
//       getLine(line, positionLeft, "left");
//     }

//     if (
//       (!direction || direction === "right") &&
//       positionRight <= N &&
//       space[line][positionRight] === "."
//     ) {
//       total++;
//       getLine(line, positionRight, "right");
//     }
//   };

//   getLine(line, position);
//   if (line - 1 >= 0) getLine(line - 1, position);
//   if (line + 1 <= N) getLine(line + 1, position);
// };

// getSpaces(...startFrom);

// console.log(total);
