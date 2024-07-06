//alert("Welcome")

var a = document.querySelector(".home")
update.addEventListener("click", function (event) {
    event.preventDefault()
    
    var div = document.createElement("div")

    div.innerHTML = `<table id="bye"><tr>
    <th>Name</th>
    <th>Age</th>
    <th>Gender</th>
    <th>Course</th>
    <th>E-mail</th>
    <th>Action</th>
</tr><tr><td>${box1.value}</td><td>${box2.value}</td>
    <td>${box3.value}</td><td>${box5.value}</td><td>${box6.value}</td><td><button onclick="erase()">Delete</button></td></tr></table>`
    a.append(div)
})

function erase() {var e = document.getElementById("bye")
    e.remove() }