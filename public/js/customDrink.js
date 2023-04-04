

// Render the template and add it to the page


// Add event listeners to the "Next" buttons
$('.nxt-btn').on('click', function() {
  // Hide the current question and show the next question
  var nextQuestion = $(this).data('next');
  $(this).closest('.question').hide();
  $(nextQuestion).show();
});

// Add event listener to the "Submit" button
$('.submit-btn').on('click', function() {
  // Collect the questions to the questions
  var question1 = $('#question1').is(':checked');
  var question2 = $('#question2').is(':checked');
  var question3 = $('#question3').is(':checked');
  var question4 = $('#question4').is(':checked');

  // Submit the form data to the server
  submitForm(question1, question2, question3, question4);
});
