const loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", (e)=>{
    e.preventDefault
    let data = JSON.parse(localStorage.getItem("data"))
    console.log(data)
    if (data == null) {
        alert("Chưa có thông tin đăng kí, vui lòng đăng kí")
    } else {
        for (let i=0; i < data.length; i ++)
        {
            if (data[i].username== username && data[i].password == password){
                alert("Đăng nhập thành công");
                return;
            }
        }
        alert("Username hoặc password không đúng")
    } 

})