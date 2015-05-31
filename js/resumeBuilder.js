var bio = {
  "name": "Helen-Marie Caten",
  "role": "Web Designer",
  "contacts": {
    "mobile": "804-301-1554",
    "email": "hmcaten@gmail.com",
    "github": "HMCaten",
    "twitter": "@CatenHM",
    "location": "Midlothian, VA"
},

  "welcomeMessage": "Welcome to my interactive resume",

  "skills": [
    "living, laughing, loving",
    "parenting",
    "all things Nona"
  ],
  "bioPic":"images/HM.jpg"
};

bio.display = function() {

   var formattedName = HTMLheaderName.replace("%data%", bio.name);
   var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole).prepend(formattedName);

   var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
   var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
   var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
   var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
   var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").append(formattedMobile)
      .append(formattedEmail)
      .append(formattedGithub)
      .append(formattedTwitter)
      .append(formattedLocation);

    $("#footerContacts").append(formattedMobile)
      .append(formattedEmail)
      .append(formattedGithub)
      .append(formattedTwitter)
      .append(formattedLocation);

   var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
   var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedBioPic).append(formattedWelcomeMsg);
      if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

   var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("skills").append(formattedSkill);
  }
};

var education = {
    "schools": [
       {
      "name": "Kaplan Online University",
      "location": "Davenport, IA",
      "degree": "Bachelor's",
      "major": "Database Administration",
      "dates": "2009",
      "url": "http://www.kaplanuniversity.edu"
       }
      ],
    "onlineCourses": [
       {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": "2015",
      "url": "http://www.udacity.com"
       }
      ]
};

education.display = function() {
  education.schools.forEach(function (school) {
    $("#education").append(HTMLschoolStart);

   var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
    $(".education-entry:last").append(formattedSchoolName);

   var formattedSchoolCity = HTMLschoolLocation.replace("%data%", school.city);
    $(".education-entry:last").append(formattedSchoolCity);

   var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
    $(".education-entry:last").append(formattedSchoolDegree);

   var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);
    $(".education-entry:last").append(formattedSchoolMajor);

   var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
    $(".education-entry:last").append(formattedSchoolDates);
 }
);

   if (education.onlineCourses.length > 0) {
    $("education-entry").append(HTMLonlineClasses);
     education.onlineCourses.forEach(function (course) {
   var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
   var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
   var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);

    $(".education-entry:last")
      .append(formattedOnlineTitle)
      .append(formattedOnlineSchool)
      .append(formattedOnlineDates);
    }
   );
  }
};

var work = {
    "jobs": [
        {
      "employer": "Capital One",
      "title": "Customer Service Coordinator",
      "dates": "July 2012 - present",
      "description": "Provide excellent customer service to existing customers, Actively listen to our customers to understand cardholder needs, Perform account level research and advise customer of products that may benefit them",
      "location": "Richmond, VA"
        },
        {
      "employer": "Infineon Technologies",
      "title": "Associate",
      "dates": "2003-2004",
      "description": "Responsible for wafer fabrication within the Implant area, Monitor and perform minor maintenance tasks, specify calibration, and qualification of implant tools, Document product movement using the computerized production tracking system",
      "location": "Sandston, VA"
        }
   ]
};

work.display = function () {
   for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);


   var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
   var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
   var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

   var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

   var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

   var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

  }
};

var projects = {
    "projects": [
       {
      "title": "Udacity Project 1",
      "dates": "2015",
      "description": "This is my first project mockup at Udacity",
      "images": [
        "images/firstUdacityproject.png"
         ]
       }
     ]
};
projects.display = function () {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

   var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

   var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

   var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

   if (projects.projects[project].images.length > 0) {
    for (image in projects.projects[project].images) {
   var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
    $(".project-entry:last").append(formattedImage);
             }
        }
    }
};


   $(document).click(function (loc) {
     var x = loc.pageX;
     var y = loc.pageY;


     logClicks(x,y);
});

   function inName(name) {
     name = name.trim().split(" ");
     console.log(name);
     name[1] = name[1].toUpperCase();
     name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

  $("#main").append(internationalizeButton);
  $("#mapDiv").append(googleMap);

projects.display();
work.display();
bio.display();
education.display();
