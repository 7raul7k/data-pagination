

function attachHomePage(){

    let studentList = document.querySelector(".student-list");
    
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
    image.src = student.picture.medium;
 
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
 
    joinedDetails.appendChild(date);
 
    studentDetails.appendChild(image);
 
    studentDetails.appendChild(studentName);
 
    studentDetails.appendChild(email);
 
    studentItem.appendChild(studentDetails);
 
    studentItem.appendChild(joinedDetails);
 
 
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
    let studentList = document.querySelector('.student-list');
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
            attachCardsonPage(studentList, pageItems);

           
        });
    });

   
 
}

function attachCardsonPage(studentList,pageItems){

    studentList.innerHTML = ""

    for(let i = 0 ; i < pageItems.length ; i++){

        let card = createCard(pageItems[i]);

        studentList.appendChild(card);
    }
}

function attachFirstPage() {
    let arr = document.querySelector('.student-list');

    pageItems = pagination(data,0);


    arr.innerHTML = "";

    for(let i = 0; i < pageItems.length; i++) {
        let card = createCard(pageItems[i]);
        arr.appendChild(card);
    }
}


