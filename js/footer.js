'use strict';

/* * * * * * * * * * * * * * * * * * * * *
 * We will show the month and current year
 */

// Created the months strings
var month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

// New obj Date and get the month and year from the browser
var date = new Date();
var currentMonth = date.getMonth();
var currentYear = date.getFullYear();

// Format the string for display it
var space = '';
if (currentMonth < 10) {
  space = '-0';
} else {
  space = '-';
}
var attDate = currentYear + space + currentMonth;
var currentDate = currentDate = month[currentMonth] + ' ' + currentYear;

// Create the <time> element
var time = '<time class="hide-on-small-only" datatime="'+attDate+'">'+currentDate+'</time>';

var copyright = time + ' © Ulises Santana. '+
  'Made with <i class="fa fa-heart heart-icon"></i> '+
  'and <a href="http://materializecss.com/" alt="Materialize" '+
  'target="_blank">Materialize</a>.';

// Append the <time> element to the HTML
var footer = document.getElementById('copyright');
footer.innerHTML = copyright;
