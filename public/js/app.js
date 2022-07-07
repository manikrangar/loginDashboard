function addProd(userId){

    // alert("this is alert");
    let url="/dashboard/"+userId+"/addproduct";
    window.location.href = url;
}

function logout()
{
    window.localStorage.removeItem('currentUserEmail');
    window.localStorage.removeItem('currentUserPassword');
    
}