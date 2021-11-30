const data = require("./data.json");

/*
Your tasks to create functions:

1. Find items in the Meeting Room.
2. Find all electronic devices.
3. Find all the furniture.
4. Find all items were purchased on 16 Januari 2020.
5. Find all items with brown color.
*/

// Solution for Number 1 (Find items in the Meeting Room.)
const findItemByRoom = (roomName) => {
  return data.filter((item) => item["placement"]["name"] === roomName);
};

console.log("1. Items inside Meeting Room");
console.log(findItemByRoom("Meeting Room"));

// Solution for Number 2 (Find all electronic devices.)
const findItemByType = (itemType) => {
  return data.filter((item) => item["type"] === itemType);
};

console.log("\n2. Electronic devices");
console.log(findItemByType("electronic"));

// Solution for Number 3 (Find all the furniture.)
console.log("\n3. Furnitures");
console.log(findItemByType("furniture"));

// Solution for Number 4 (Find all items were purchased on 16 January 2020.)
// dateToSearch format = 'YYYY-MM-DD' (e.g. 16 January 2020 => '2020-01-16')
const findItemByTime = (dateToSearch) => {
  let fullDate = new Date(dateToSearch);
  const date = fullDate.getDate();
  const month = fullDate.getMonth();
  const year = fullDate.getFullYear();

  return data.filter((item) => {
    let itemDate = item["purchased_at"].toString().concat("000");
    itemDate = new Date(Number(itemDate));

    return (
      date === itemDate.getDate() &&
      month === itemDate.getMonth() &&
      year === itemDate.getFullYear()
    );
  });
};

console.log("\n4. Item purchased at 16 January 2020");
console.log(findItemByTime("2020-01-16"));

// Solution for Number 5 (Find all items with brown color.)
const findItemByTags = (itemTag) => {
  return data.filter((item) => item["tags"].includes(itemTag));
};

console.log("\n5. Brown Items");
console.log(findItemByTags("brown"));
