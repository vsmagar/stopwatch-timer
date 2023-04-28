let personalDetails = [
  ["AAA", "aaa@gmail.com"],
  ["BBB", "bbb@gmail.com"],
  ["CCC", "ccc@gmail.com"],
];

let map = () => {
  personalDetails.map((item) => {
    <h1>userName : {item[1]}</h1>
  });
};
