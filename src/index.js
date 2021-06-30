/**
 * const,let
 */
// var val1 = "val変数";
// console.log(val1);

// var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// var変数は再宣言可能
// val1 = "var変数を再宣言可能";
// console.log(val1);

//  let val2 = "let変数";
//  console.log(val2);

//  val2 = "let変数は上書き可能";
//  console.log(val2);

//  const val3 = "const変数";
//  console.log(val3);

//  const変数は上書き不可
//  const変数を再宣言不可

//  constで定義したオブジェクトはプロパティの変更が可能";
//  const val4 = {
//    name: "tomoyo",
//    age: "45"};
//    val4.name = "ともよ"
//    val4.address = "川島町"
//  console.log(val4);

//  constで定義した配列はプロパティの変更が可能";
// const val5 = ["dog", "cat"];
// val5[0] = "bard";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
//const name = "tomoyo";
// const age = 45;
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const nameArr = ["シンデレラ", "おやゆび姫", "ベル"];
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const nameArr = ["yuya", "tomoyo", "yui"];
// const newNameArr = nameArr.map((name) => {
//   if (name === "yui") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件　?条件がtrueの時：falseの時
// const val1 = 1 < 0 ? `trueです`:`falseです`;
// console.log(val1);

// const num = 1300;
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
//console.log(formattedNum);

const CheckSum = (num1, num2) => {
  return num1 + num2 > 100 ? `100を超えています!!` : `許容範囲内です。`;
};
console.log(CheckSum(50, 51));
