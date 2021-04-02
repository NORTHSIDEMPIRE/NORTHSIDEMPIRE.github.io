function transformUppercase(_val){
return _val.toUppercase();

}

let elnamaPengguna = document.getElementById("namaPengguna");
elnamaPengguna.addEventListener("keyup", function(){
    elnamaPengguna.value = transformUppercase(elnamaPengguna.value);
});

function checkPassword(){
    let elkataLaluan = document.getElementById("kataLaluan");
    let password_val = elkataLaluan.value;
    if(password_val.length > 5){
        alert("Password Check...OK!");

    } else{
        alert("Password too short");
    }
}