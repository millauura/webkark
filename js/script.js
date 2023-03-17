let mode = 'white'
const subElements = []
document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body')
    subElements.push(body)

})
function showHide(element_id) {
  //Если элемент с id-шником element_id существует
  if (document.getElementById(element_id)) {
    //Записываем ссылку на элемент в переменную obj
    var obj = document.getElementById(element_id);
    //Если css-свойство display не block, то:
    if (obj.style.display != "block") {
      obj.style.display = "block"; //Показываем элемент
    } else obj.style.display = "none"; //Скрываем элемент
  }
  //Если элемент с id-шником element_id не найден, то выводим сообщение
  else alert("Элемент с id: " + element_id + " не найден!");
}

function changeColor() {
    if (mode === 'white') {
        mode = 'black'
    } else {
        mode = 'white'
    }
    subElements.forEach((el) => {
        el.style.background = mode === 'white' ? '#fff' : 'rgba(16,15,15,0.73)'
    })
}

const container = document.querySelector(".iop"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

  //   js code to show/hide password and change icon
      pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
          pwFields.forEach(pwField =>{
            if(pwField.type ==="password"){
              pwField.type = "text";

              pwShowHide.forEach(icon =>{
                icon.classList.replace("uil-eye-slash", "uil-eye");
              })
            }else{
              pwField.type = "password";

              pwShowHide.forEach(icon =>{
                icon.classList.replace("uil-eye", "uil-eye-slash");
              })
            }
          })
        })
      })

      // js code to appear signup and login form
      signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
      });
      login.addEventListener("click", ( )=>{
        container.classList.remove("active");
      });