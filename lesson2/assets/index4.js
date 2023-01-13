//Thêm tên và số điện thoại
let btnAdd = document.querySelector('#add')
let namePeople = document.querySelector('#name')
let phonePeople = document.querySelector('#phone')
let information = getInformationFromLocal()  //Lấy thông tin đã lưu từ local
rederInformation(information) //render ra màn hình
btnAdd.addEventListener('click', function(){
    if(!namePeople.value){
        alert('Vui lòng nhập thông tin')
        return false
    }
    else if(!phonePeople.value){
        alert('Vui lòng nhập thông tin')
        return false
    }
    let information = getInformationFromLocal() //Kiểm tra xem local có thông tin không nếu không trả về mảng rỗng, nếu có convert về mảng
    information.push({name: namePeople.value, number: phonePeople.value }),   //nhap ten và số điện thoại
    namePeople.value=''  //reset sau khi add 
    phonePeople.value=''   //reset sau khi add 
    localStorage.setItem('information',JSON.stringify(information)) //Lưu vào local và convert sang dạng string
    rederInformation(information) //render ra khi add 
})

function rederInformation(information = []){
    let infor = '<ul>';
    information.forEach((i)=>{
        infor +=
         `<div id="result">
        <p>${i.name}</p>
        <p>${i.number}</p>
        </div>
         `
    });
    infor += '</ul>'
    document.querySelector('#results').innerHTML = infor
}
 function getInformationFromLocal(){
    return localStorage.getItem('information') ? JSON.parse(localStorage.getItem('information')):[]
 }

 //Tìm tên trùng
 let btnSearch = document.querySelector('#find')
 btnSearch.addEventListener('click',function(){
    let valueSearchInput = document.getElementById("search").value;   //nhap giá trị search
    let list = information
    let kq =[]
    if (valueSearchInput){
        for(let i = 0; i < list.length; i++){
            document.getElementById('resultsSearch').style.display = "block";
            document.getElementById('results').style.display = "none";
            let inforSearch = list[i].name.includes(valueSearchInput) ? list[i] : null
            if(inforSearch){
                kq.push(inforSearch)} //push kết quả search vào kq
            //render lại 
            let inforSea = '<ul>';
            kq.forEach((i)=>{
                inforSea +=
                 `<div id="resultSearch">
                <p>${i.name}</p>
                <p>${i.number}</p>
                </div>
                 `
            });
            infor += '</ul>'
            document.querySelector('#resultsSearch').innerHTML = inforSea
            }
        }
    else{
        document.getElementById('resultsSearch').style.display = "none";
        document.getElementById('results').style.display = "block";
    }
 })
 //Xóa trùng
// let btnClear = document.querySelectorAll('#clear')
// btnClear.addEventListener('click',function(){
//     let information = getInformationFromLocal()
//     let list = information
//     if(information){
//         for (let i = 0; i < list.length; i++){
            
//         }
//     }
// })






