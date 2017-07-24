(function ($) {
  const list_of_courses = document.querySelectorAll('table tbody tr td[align=left] b');
  const reg = /<a name=".*"><\/a>([A-Z]* \d{3}[A-Z]?)( .*)/;

  for (var i = 0; i < list_of_courses.length; i++) {
    $(list_of_courses[i]).addClass('outflow');

    const course = reg.exec(list_of_courses[i].innerHTML)[1];
    const desc = reg.exec(list_of_courses[i].innerHTML)[2];
    const course_link = course.replace(/\s/g, '').toLowerCase();
    list_of_courses[i].innerHTML = `<a href="https://uwflow.com/course/${course_link}" target="_blank">${course}</a>` + desc;
  }
})(jQuery);
