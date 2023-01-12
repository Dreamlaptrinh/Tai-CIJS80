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
        console.log(infor)
    });
    infor += '</ul>'
    document.querySelector('#results').innerHTML = infor
}
 function getInformationFromLocal(){
    return localStorage.getItem('information') ? JSON.parse(localStorage.getItem('information')):[]
 }

//  //Tìm số điện thoại trùng
//  let btnSearch = document.querySelector('search')
//  btnSearch.addEventListener('click',function(){
//     let valueSearchInput = document.getElementById("find").value
//     let inforSearch  = information.filter(value=>{
//     return value.name.toupercase().includes(valueSearchInput.toupercase())
//     })
//     rederInformation(inforSearch)
//  })






