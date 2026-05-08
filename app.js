/* ================================
   FEATURED COURSES (HOME PAGE)
================================ */

// Enhanced Featured Courses
const featuredCourses = [
  {
    title: "Full Stack Web Development (MERN)",
    img: "images/fullstack.jpg",
    rating: "4.8",
    learners: "18,420",
    badge: "Bestseller",
    progress: 72
  },
  {
    title: "Data Structures & Algorithms",
    img: "images/dsa.jpg",
    rating: "4.7",
    learners: "12,300",
    badge: "Featured",
    progress: 45
  },
  {
    title: "UI/UX Design for Developers",
    img: "images/ui.jpg",
    rating: "4.9",
    learners: "9,870",
    badge: "Trending",
    progress: 30
  },
  {
    title: "Cloud & DevOps Fundamentals",
    img: "images/devops.jpg",
    rating: "4.6",
    learners: "7,540",
    badge: "New",
    progress: 15
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector(".featured-courses .course-list");
  if (!list) return;

  list.innerHTML = "";

  featuredCourses.forEach(course => {
    list.innerHTML += `
      <div class="featured-card">
        <div class="card-image">
          <img src="${course.img}?auto=format&fit=crop&w=500&q=80" alt="${course.title}">
          <span class="course-badge">${course.badge}</span>

          <div class="card-overlay">
            <button onclick="location.href='course.html'">▶ Start Learning</button>
          </div>
        </div>

        <div class="course-content">
          <h3>${course.title}</h3>

          <div class="course-meta">
            ⭐ ${course.rating}
            <span>• ${course.learners} learners</span>
          </div>

          <div class="progress-bar">
            <div class="progress-fill" style="width:${course.progress}%"></div>
          </div>
          <span class="progress-label">${course.progress}% completed</span>
        </div>
      </div>
    `;
  });
});



// COURSES
const courses = [
  { title:"Full Stack Web Development (MERN)", img:"images/fullstack.jpg"},
  { title:"Data Structures & Algorithms", img:"images/dsa.jpg"},
  { title:"UI/UX Design for Developers", img:"images/ui.jpg"},
  { title:"Cloud & DevOps Fundamentals", img:"images/devops.jpg"}
];

// RENDER COURSES ON INDEX
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("courseList");
  const dashboardList = document.querySelector(".dashboard-list");
  if(list){
    list.innerHTML="";
    courses.forEach(course=>{
      list.innerHTML+=`
        <div class="course-card">
          <img src="${course.img}" alt="${course.title}">
          <div class="course-content">
            <h3>${course.title}</h3>
            <p>Industry-level training with hands-on projects</p>
            <button onclick="location.href='course.html'">Start Learning</button>
          </div>
        </div>
      `;
    });
  }

  // Dashboard cards
  if(dashboardList){
    dashboardList.innerHTML="";
    courses.forEach((course,i)=>{
      const progress=[60,25,0,0][i]; // Example progress
      dashboardList.innerHTML+=`
        <div class="course-card">
          <img src="${course.img}" alt="${course.title}">
          <div class="course-content">
            <h3>${course.title}</h3>
            <div class="progress-mini"><div style="width:${progress}%"></div></div>
            <span class="progress-text">${progress}% completed</span>
            <button onclick="location.href='course.html'">Resume Course</button>
          </div>
        </div>
      `;
    });
  }
});

// VIDEO LOADER
function loadVideo(file, el){
  const video=document.getElementById("videoPlayer");
  if(!video) return;
  video.src=`videos/${file}`;
  video.load();
  video.play();
  document.querySelectorAll("#lessonList li").forEach(li=>li.classList.remove("active"));
  el.classList.add("active");
}

// AVATAR UPLOAD
function updateAvatar(event){
  const file = event.target.files[0];
  if(!file) return;
  const reader=new FileReader();
  reader.onload=()=>{ document.getElementById("profileAvatar").src=reader.result; };
  reader.readAsDataURL(file);
}

// SIMPLE TOAST
function showToast(msg){
  alert(msg); // Can replace with custom toast later
}
function openTab(tabName) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  document.querySelector(`[onclick="openTab('${tabName}')"]`).classList.add('active');
  document.getElementById(tabName).classList.add('active');
}

function saveProfile() {
  const name = document.getElementById("inputName").value;
  const role = document.getElementById("inputRole").value;

  document.getElementById("profileName").innerText = name;
  document.getElementById("profileRole").innerText = role;

  showToast("Profile updated successfully!");
}

// DASHBOARD OVERALL PROGRESS
document.addEventListener("DOMContentLoaded", () => {
  const progressCircle = document.getElementById("overallProgress");
  const percentText = document.getElementById("overallPercent");

  if (!progressCircle) return;

  // Example: calculate from courses
  const courseProgress = [60, 25, 10, 0];
  const avg =
    Math.round(courseProgress.reduce((a,b)=>a+b,0) / courseProgress.length);

  const circumference = 339;
  const offset = circumference - (avg / 100) * circumference;

  progressCircle.style.strokeDashoffset = offset;
  percentText.innerText = `${avg}%`;
});
// WEEKLY ACTIVITY ANIMATION
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".activity-chart .bar");

  bars.forEach(bar => {
    const hours = bar.dataset.hours;
    const height = Math.min((hours / 4) * 100, 100); // 4 hrs max
    bar.querySelector("span").style.height = height + "%";
  });
});


