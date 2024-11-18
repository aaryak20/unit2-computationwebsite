function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = 'paris';  // Change this to whatever correct answer you want

    // Check if the answer is correct
    if (userAnswer === correctAnswer) {
        // Redirect to the next page if the answer is correct
        window.location.href = 'nextpage.html';  // Replace 'nextpage.html' with the actual next page URL
    } else {
        // Show an error message if the answer is incorrect
        document.getElementById('error-message').textContent = 'Incorrect answer. Please try again.';
    }
}
