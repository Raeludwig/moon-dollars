// Get the template and compile it
var template = Handlebars.compile($('#questions-template').html());

// Render the template and add it to the page
$('body').append(template());

// Add event listeners to the "Next" buttons
$('.next-btn').on('click', function() {
  // Hide the current question and show the next question
  var nextQuestion = $(this).data('next');
  $(this).closest('.question').hide();
  $(nextQuestion).show();
});

// Add event listener to the "Submit" button
$('.submit-btn').on('click', function() {
  // Collect the answers to the questions
  var answer1 = $('#answer1').is(':checked');
  var answer2 = $('#answer2').is(':checked');
  var answer3 = $('#answer3').is(':checked');
  var answer4 = $('#answer4').is(':checked');

  // Submit the form data to the server
  submitForm(answer1, answer2, answer3, answer4);
});
