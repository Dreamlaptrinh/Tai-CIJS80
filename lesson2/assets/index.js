//Bài 1
//C1
let input = "abcdef"
console.log(input)
let arr = [...input];  // chuyển string thành mảng
arr.reverse(); // đảo ngược
let output = arr.join('') // ghép thành string
console.log(output);
//C2
function reverse(input) {
  var output = '';
  for (var i = input.length - 1; i >= 0; i--){
    output += input[i];}
    console.log(output)  // Đầu ra
}
reverse("abcdef")  // Giá trị đầu vào








