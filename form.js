function Calculate(){
    var name = document.getElementById("Name").value;
    var music = document.getElementsByClassName("hobbies")[0].checked;
    var sports = document.getElementsByClassName("hobbies")[1].checked;

    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;


    if((name==null || name=="Undefined" || name.length==0) )
    {
        console.log("Hi");
        var element = document.getElementById("alert");
        element.style.display="block";
        element.classList.add("alert-danger");
        element.innerHTML ="<h3> Wrong</h3>"
        return false;
    }
    else
    {
        console.log("Hi 2nd one");
        var element = document.getElementById("alert");
        element.style.display="block";
        element.classList.remove("alert-danger");
        element.classList.add("alert-success");
        element.innerHTML ="<h3> Great Work</h3>"
        return false;
       
    }

    


}