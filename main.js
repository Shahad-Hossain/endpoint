// Function to handle the form submission and call on the API
document.getElementById('questionForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Gets the question from the input field, first const allows us to clear the input field, second const gets the raw user data to display the question later on
    const questionInput = document.getElementById('question');
    const question = questionInput.value.trim();

    if (question !== '') {
        const url = `https://shahad247.pythonanywhere.com/process_form?question=${encodeURIComponent(question)}`;

        fetch(url)
            .then(response => response.json())
            .then(responseData => {
                // **Gets the response from the return dictionary on the route**
                const answer = responseData.message;

                // NOTE: Most likely this code will have to be modified when attempting implementation into the squarespace website however this is just to showcase the API call works and displays towards the frontend 
                var userListItem = $('<li>').text("User: " + question);
                var robotListItem = $('<li>').text("Robot: " + answer);
                $('#conversation').append(userListItem, robotListItem);
            })
            // Debug, no effect on functionality
            .catch(error => {
                console.error('Error:', error);
            });
    }
    // Clears input field so user can ask another question
    questionInput.value = '';
});