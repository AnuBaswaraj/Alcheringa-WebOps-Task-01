var selectedRow = null;

async function loadInTable(url, table){
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    const users = data.users;
    console.log(users);
    
    let tableData = " ";
    users.map((values)=>{
        tableData += `<tr>
        <td id="fullName">${values.firstName} ${values.lastName}</td>
        <td id="userName">${values.username}</td>
        <td id="email">${values.email}</td>
        <td><button class="but1" onClick="onEdit(this)">&#187 Edit</button> <button class="but2" onClick="onDelete(this)">&#187 Delete</button></td>
        </tr>`
    })
    document.getElementById("table_body").innerHTML = tableData;}

function onEdit(td){

     selectedRow = td.parentElement.parentElement;
     selectedItem= td.parentElement;
            
    selectedRow.cells[0].innerHTML=`<input id="editName" class="edit"placeholder="${selectedRow.cells[0].textContent}"> <button class="save" onClick="save(this)">save</button>`
    selectedRow.cells[1].innerHTML=`<input id="editUser" class="edit"placeholder="${selectedRow.cells[1].textContent}"> <button class="save" onClick="save(this)">save</button>`
    selectedRow.cells[2].innerHTML=`<input id="editEmail" class="edit" placeholder="${selectedRow.cells[2].textContent}"> <button class="save" onClick="save(this)">save</button>`
          
        
    }
function save(td){
 rw = td.parentElement;
 console.log(rw.firstChild.value);
 rw.innerHTML=`<p>${rw.firstChild.value}</p>`;
}


function onDelete(td){
        if (confirm('Are you sure to delete the selected record?')){
        row=td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
    }
}





 loadInTable("https://dummyjson.com/users", document.querySelector("table"));
