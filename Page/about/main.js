var months = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];
var d = new Date();
function myFunction(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var date = d.getDate()+"/"+months[d.getMonth()]+"/"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes();
    insertToFirebase(name,email,message,date);
}
function insertToFirebase(name , email , message , date){
    var firebaseRef = firebase.database().ref("app/comment");
    firebaseRef.push({
        Name : name,
        Email : email,
        Message :  message,
        Date : date
    });  
    document.getElementById("success").innerHTML = "ส่งข้อความสำเร็จ";
}

