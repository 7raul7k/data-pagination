let studentList = document.querySelector(".student-list");







function createCard(student){

   let studentItem = document.createElement("li");

   item.classList.add("student-item");
   item.classList.add("cf");

   
   let studentDetails = document.querySelector("div");

   studentDetails.classList.add('student-details');

   let image = document.createElement('img');

   image.classList.add("avatar");
   image.src = student.image.medium;

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

   studentDetails.appendChild(name);

   studentDetails.appendChild(email);

   studentItem.appendChild(studentDetails);

   studentItem.appendChild(joinedDetails);

   return studentItem;

}