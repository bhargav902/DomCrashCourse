//console.dir(document);

//console.log(document.title);
//document.title=489;
/*console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);*/
//console.log(document.all[10]);
//document.all[10].textContent='hello';

//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);
//console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent='hello';
//headerTitle.innerText='good bye';
//headerTitle.innerHTML='<h3>hello</h3>';
//headerTitle.style.borderBottom  ='solid 3px #000 ';
//var header= document.getElementById('main-header');
//header.style.borderBottom='solid 4px #000000';

/*var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[1].textContent='hello2';
items[0].style.fontWeight='bold';
for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='#f4f4f4';
}*/
/*var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[2]);
li[1].textContent='hello2';
li[0].style.fontWeight='bold';
for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor='yellow';
}*/

/*var header = document.querySelector('#main-header');

header.style.borderBottom='solid 4px #333333';

var input = document.querySelector('input');
input.value='hello';
var submit=document.querySelector('input[type="submit"]');
submit.value='send'

var item=document.querySelectorAll('.list-group-item');
//item.style.color='red';

for(var i=0;i<item.length;i++){
    item[i].style.color='red';
}*/


//var itemList= document.querySelector('#items');
/*console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='green';
console.log(itemList.parentNode.parantNode);*/

/*console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='green';
console.log(itemList.parentElement.parentElement);*/


/*console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='red';


console.log(itemList.firstElementChild);
itemList.firstElementChild.style.backgroundColor='green';*/
/*console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='red'*/


/*var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='helloid'

newDiv.setAttribute('title', 'helloDiv');

var newDivText= document.createTextNode('hai this is bhargav');

newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');


console.log(newDiv);

newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);*/

//var buttom =document.getElementById('button').addEventListener('click',buttonclick);

//function buttonclick(e){
    //e.preventDfault();

   // console.log('button Clicked');
   //document.getElementById('header-title').textContent='bhargav';
   //document.querySelector('#main').style.backgroundColor='red';

   //console.log(e)

   /*console.log(e.target);
   console.log(e.target.id);
   console.log(e.target.classList);
   var output=document.getElementById('output');
   output.innerHTML='<h3>'+e.target.id+'</h3>';

   console.log(e.type);*/
//console.log(e.clientX);
//console.log(e.clientY);
//console.log(e.offsetY);
//console.log(e.altKey);
//console.log(e.ctrlKey);

//}


//var button=document.getElementById('button');
//var box=document.getElementById('box');

//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);


//box.addEventListener("mouseleave", runEvent);
//box.addEventListener("mouseover", runEvent);
//box.addEventListener("mousemove", runEvent);
//var itemInput=document.querySelector('input[type="text"]');
//var form=document.querySelector('form');

//itemInput.addEventListener('input', runEvent);
//form.addEventListener('submit', runEvent)

//function runEvent(e){
  //  e.preventDefault();
   // console.log('event type:'+e.type);
    //console.log(e.target.value);
   // document.getElementById('output')
    //.innerHTML='<h3>'+e.target.value+'</h3>'

    //output.innerHTML='<h3>mouseX:'+e.offsetX+'</h3><h3>mouse : '+e.offsetY+'</h3>'
   // document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
//}
var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');
form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem);

filter.addEventListener('keyUp',filterItem);

function addItem(e){
    e.preventDefault();

    //console.log(1);
    
    var newItem=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    //console.log(li)

    li.appendChild(document.createTextNode(newItem));

    var delete1=document.createElement('button');
    delete1.className='btn btn-danger bgt-sm float-right delete';
    delete1.appendChild(document.createTextNode('X'));
    li.appendChild(delete1);
    

    itemList.appendChild(li);
    

}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }


}

function filterItem(e){
    var text=e.target.value.textUpperCase();
var items=itemList.getElementsByTagName('li');
Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display='block';

    }else{
        item.style.display='none';

    }
});

}




























