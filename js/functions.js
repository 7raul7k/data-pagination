
let studentList = document.querySelector('.student-list');


studentList.addEventListener('click', (e) => {
    let target = e.target.parentNode;
    if (e.target.matches('.editCard')) {
        editCard(target);
    } else if (e.target.matches('.removeCard')) {
        target.remove();
    }
});

function attachHomePage(){

 
    
    studentList.innerHTML="";
 
 
   data.forEach((element)=>{

    let card = createCard(element);

    studentList.appendChild(card);
   })
    
 }
 
 function setupPages(itemsPerPage){
    let linkList = document.querySelector('.link-list');
 
    let totalPages = Math.ceil(data.length / itemsPerPage);
 
 
    for(let i = 1 ; i <= totalPages ;i++){
 
       let li = createButton();
 
       let btn = li.querySelector('button');
       if(i === 1){
          btn.classList.add('active');
       }
 
       btn.textContent = i;
 
 
       linkList.appendChild(li);
     
    }
 }
 
 function createCard(student){
 
    let studentItem = document.createElement("li");
 
    studentItem.classList.add("student-item");
    studentItem.classList.add("cf");
 
    let studentDetails = document.createElement("div");
 
    studentDetails.className = "student-details";
 
    let image = document.createElement('img');
 
    image.classList.add("avatar");
    image.setAttribute('src',student.picture.medium);
 
    image.alt= "Profile Picture";
 
    let studentName = document.createElement('h3');
 
    studentName.textContent = student.name.first + " " + student.name.last;
 
    let email = document.createElement('span');
 
    email.classList.add('email');
 
    email.textContent = student.email;
 
    let joinedDetails = document.createElement('div');
 
    joinedDetails.classList.add('joined-details');
 
    let date = document.createElement('span');
 
    date.textContent = "Joined " + student.registered.date;

   

    let editButton = document.createElement('button');

    editButton.textContent='Edit ';

    editButton.style.background = 'lightblue';

    editButton.classList.add('editCard')

    editButton.style.width='94%'

    let removeButton = document.createElement('button');

    removeButton.textContent='Remove ';

    removeButton.style.background = 'lightblue';

    removeButton.classList.add('removeCard');

    removeButton.style.width='94%'

  


 
    joinedDetails.appendChild(date);
 
    studentDetails.appendChild(image);
 
    studentDetails.appendChild(studentName);
 
    studentDetails.appendChild(email);
 
    studentItem.appendChild(studentDetails);
 
    studentItem.appendChild(joinedDetails);
 
    studentItem.appendChild(editButton);

    studentItem.appendChild(removeButton);
    
 
    return studentItem;
 }
 
 function createButton(){
 
    let li = document.createElement('li');
    let button = document.createElement('button');
 
    button.type = 'button';
 
    li.appendChild(button);
 
    return li;
 }
 
 function pagination(arr,pagina){
 
    let rez=[];
 
    let start =  pagina  * 9;
 
    let stop  = start + 9;
 
    for(let i=start;i<stop;i++){
 
 
       rez.push(arr[i]);
    }
    return rez;
 }

 function setupPagination() {

    let linkList = document.querySelector('.link-list');
    let pages = linkList.querySelectorAll('button');

    studentList.innerHTML = "";

    pages.forEach((button) => {
        button.classList.remove('active');
    });

  

    pages.forEach((page,index)=>{

          
      

        page.addEventListener('click',()=>{

            pages.forEach((button) => {
                button.classList.remove('active');
            });
        
         
            page.classList.add('active');
            let pageItems = pagination(data, index);
            attachCardsonPage(pageItems);

           
        });
    });

   
 
}

function attachCardsonPage(pageItems){

    studentList.innerHTML = "";

    for(let item of pageItems){

        let card = createCard(item);

        studentList.appendChild(card);
    }
}

function attachFirstPage() {
    let arr = document.querySelector('.student-list');

    pageItems = pagination(data,0);


    arr.innerHTML = "";

    for(let item of pageItems) {
        let card = createCard(item);
        arr.appendChild(card);
    }
}

function findStudents(){
let input=document.querySelector("#search");

let button= document.querySelector('button')



input.addEventListener('click',()=>{
    let arr=data.filter((el)=>el.name.first.toLowerCase().includes(input.value) ||
el.name.first.toUpperCase().includes(input.value));


attachCardsonPage(arr);
})



}

function createSearchBar(){

    let searchLabel = document.createElement('label');

    searchLabel.classList = 'student-search';

    let inputSearch = document.createElement('input');

    inputSearch.id = 'search';

    inputSearch.placeholder='Search by name...';

    let button = document.createElement('button');

    button.type = 'button';
    
    let image = document.createElement('img');

    image.src = 'img/icn-search.svg';
    image.alt= 'Search icon';

    button.appendChild(image);

    searchLabel.appendChild(inputSearch);
    searchLabel.appendChild(button);

    let head = document.querySelector(".header");

    head.appendChild(searchLabel);
}

function editCard(target){
    let studentName = target.querySelector('h3');
    let email = target.querySelector('.email');
    let editButton = target.querySelector('.editCard');

    if(editButton.textContent === 'Edit '){
        editButton.textContent = 'Save';

        let inputName = document.createElement('input');
        inputName.classList.add('inputName');
        inputName.value = studentName.textContent;
        studentName.textContent = '';
        studentName.appendChild(inputName);
        
        let inputEmail = document.createElement('input');
        inputEmail.classList.add('inputEmail');
        inputEmail.value = email.textContent;
        email.textContent = '';
        email.appendChild(inputEmail);
        
    } else if(editButton.textContent === 'Save'){
        editButton.textContent = 'Edit ';

        let newName = studentName.querySelector('input').value;
        let newEmail = email.querySelector('input').value;
        
        studentName.textContent = newName;
        email.textContent = newEmail;
    }
}



