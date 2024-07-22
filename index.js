var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event

form.addEventListener('submit',addItem);

// DELETE EVENT
itemList.addEventListener('click',removeItem);
//Filter event
filter.addEventListener('keyup', filterItem);

//Add Item
function addItem(e){
    e.preventDefault();


//Get input value
var newItem = document.getElementById('item').value;

//Create new li elemt
var li = document.createElement('li');

//Add class
li.className = 'list-group-item';
// console.log(li);

// ADD TEXT NODE WITH INPUT VALUE
li.appendChild(document.createTextNode(newItem));

//CREATE DEL BUTTON ELEMET
var deleteBtn = document.createElement('button');

//ADD CLASSES TO DEL BUTTON
deleteBtn.className = 'btn btn-danger btn-sm float-end delete';

// append text node
deleteBtn.appendChild(document.createTextNode('X'))

// apend button to li
li.appendChild(deleteBtn);

//Append

itemList.appendChild(li);
}

// REMOVE item 
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items

function filterItem(e){
 // convert text to lowercase
 var text = e.target.value.toLowerCase();
 // get lis
 var items = itemList.getElementsByTagName('li');
 //convert to an array
 Array.from(items).forEach(function(item){
   var itemName = item.firstChild.textContent;
   if(itemName.toLowerCase().indexOf(text) != -1){
    item.style.display ='block';
   }else{
    item.style.display ='none';
   }

 })
}