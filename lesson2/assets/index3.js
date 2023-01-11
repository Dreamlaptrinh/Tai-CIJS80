//Bài 3
let arrayInput = [ 1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
let count = 1; //
let m = 0; //Biến đếm số lần xuất hiện
let item;  // số xuất hiện
		for (let i=0; i<arrayInput.length; i++)  // Lọc qua các phần tử của mảng
		{
				for (let j=i; j<arrayInput.length; j++)  
				{
						if (arrayInput[i] == arrayInput[j]) 
						 m++;
						if (count<m)  
						{
						  count=m; // Lưu lại số lần xuất hiện cao nhất
						  item = arrayInput[i]; // Lưu giá trị xuất hiện nhiều nhất
						}
				}
				m=0;    //qua mỗi vòng lặp phải reset sô lần lặp lại
		}
console.log("value"+":"+item+", count"+":"+count);
           








