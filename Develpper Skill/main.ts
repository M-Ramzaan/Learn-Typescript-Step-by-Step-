//In this developer skill section first we learn how to use VS code very effectively to get most out of it and save time.

//Video no 50
//1-Install and configure Prettier extension. You can also go to prettier official documentation change some auto settings like commas default is double you can change it to single bus configuring prettier via inserting a file in the current project name .prettierrc and then add setting as per your requirements.

//2- Set up shortcuts like for console.log() us just cl via user snippets present in the preferences section of vs code and then create a new file name and it and there is instructions given use that to assign a shortcut i use cl for console.log().

//3- Install todo highlight extension and configure it via json file.

//Video # 54 How to do research and solve problems.
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const tempOne = [1, 2, 3];
const tempTwo = [4, 5, 6];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTemperatureAmplitude = function (temp: any[]) {
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    const currTemp = temp[i];
    if (typeof currTemp !== "number") continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};
//const amplitude = calcTemperatureAmplitude(temperatures);
//console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays (We use concat method for this)

const calcTemperatureAmplitude2 = function (
  temp1: any[],
  temp2: any[]
): number {
  const temps = temp1.concat(temp2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== "number") continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude2 = calcTemperatureAmplitude2(tempOne, tempTwo);
console.log(amplitude2);
