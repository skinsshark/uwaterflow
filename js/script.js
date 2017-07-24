(function ($) {
  //find all course titles as defined in the DOM
  const list_of_courses = document.querySelectorAll('table tbody tr td[align=left] b');
  //regex to group 1: course code, 2: other commitments to the course
  const reg = /<a name=".*"><\/a>([A-Z]* \d{3}[A-Z]?)( .*)/;

  for (var i = 0; i < list_of_courses.length; i++) {
    $(list_of_courses[i]).addClass('outflow'); //add class for styling

    const course = reg.exec(list_of_courses[i].innerHTML)[1];
    const desc = reg.exec(list_of_courses[i].innerHTML)[2];
    const course_link = course.replace(/\s/g, '').toLowerCase();

    //add link
    list_of_courses[i].innerHTML = `<a href="https://uwflow.com/course/${course_link}" target="_blank">${course}</a>` + desc;
  }
})(jQuery);
