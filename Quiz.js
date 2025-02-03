const questBank = [
  { 
    id: 1,
    question: "What is the Capital of Bangladesh?",
    options: ["Berlin", "Dhaka", "Rajshahi", "Khulna"],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: "What is the Capital of France?",
    options: ["Berlin", "Dhaka", "Rajshahi", "Paris"],
    correctAnswer: 4,
  },
  {
    id: 3,
    question: "What is the Capital of Germany?",
    options: ["Berlin", "London", "Paris", "Rome"],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "What is the Capital of Italy?",
    options: ["Madrid", "Berlin", "Rome", "Lisbon"],
    correctAnswer: 3,
  },
  {
    id: 5,
    question: "What is the Capital of Japan?",
    options: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
    correctAnswer: 2,
  },
  {
    id: 6,
    question: "What is the Capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: 3,
  },
  {
    id: 7,
    question: "What is the Capital of Canada?",
    options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
    correctAnswer: 4,
  },
  {
    id: 8,
    question: "What is the Capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Bangalore"],
    correctAnswer: 2,
  },
  {
    id: 9,
    question: "What is the Capital of China?",
    options: ["Beijing", "Shanghai", "Hong Kong", "Guangzhou"],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: "What is the Capital of the United States?",
    options: ["New York", "Washington D.C.", "Los Angeles", "Chicago"],
    correctAnswer: 2,
  },
];
  let question=document.querySelector(".question");
  let container=document.querySelector(".container");
  let submit=document.querySelector(".submit");
  let menuSwitch=document.querySelector(".menuSwitch");
  let menuList=document.querySelector(".menu-list");
  questBank.forEach((quest,j)=>{
  let questDiv=document.createElement("div");
  questDiv.classList.add("questDiv");
  questDiv.textContent=`${j+1}.${quest.question}`;
  
  container.appendChild(questDiv);
  let optContainer=document.createElement("div");
  optContainer.classList.add("optContainer")
  quest.options.forEach((option,i)=>{
    let optDiv=document.createElement("div");
    optDiv.classList.add("optDiv");
    optDiv.textContent=`${i+1}.${option}`;
    optContainer.appendChild(optDiv);
   
    
    
    
   optDiv.addEventListener("click", (e) => {
  // Remove 'marked' class from all options
  optContainer.querySelectorAll(".optDiv").forEach((option) => {
    option.classList.remove("marked");
  });

  // Add 'marked' class to the clicked option
  e.target.classList.add("marked");
});
   
  }); 
    container.appendChild(optContainer);
  });
  
  
  submit.addEventListener("click", () => {
  let allOptions = document.querySelectorAll(".optContainer");
  
  questBank.forEach((ans, indx) => {
    let choices = allOptions[indx].querySelectorAll(".optDiv");
    
    choices.forEach((opt, optIdx) => {
      if (opt.classList.contains("marked")) {
        if (optIdx + 1 === ans.correctAnswer) {
          opt.classList.add("right");
        } else {
          opt.classList.add("wrong");
         choices[ans.correctAnswer-1].classList.add("right");
        }
      }
      else if(choices[ans.correctAnswer-1].classList.contains("optDiv")){
        choices[ans.correctAnswer-1].classList.add("notMarked");
      }
    });
  });
  document.querySelectorAll(".optDiv").forEach((opt)=>{
    opt.style.pointerEvents="none";
  })
});
 menuSwitch.addEventListener("click",()=>{
   menuList.classList.toggle("active");
 })
  
  
  
  