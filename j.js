document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
            
    
    var formData = {
        "School Year Faster": document.querySelector('input[name="Question1"]:checked').value,
        "Change Into Normal Cycle": document.querySelector('input[name="Question2"]:checked').value,
        "Lack In Subjects": document.querySelector('input[name="Question3"]:checked').value,
        "Lack The Most": document.querySelector('input[name="Question4"]:checked').value,
        "Problem Encountered": document.querySelector('input[name="Question5"]:checked').value,
        "Method You Apply": document.querySelector('input[name="Question6"]:checked').value,
        "Difficulties In Studiying": document.querySelector('input[name="Question7"]:checked').value,
        "Sleep 8 Hours": document.querySelector('input[name="Question8"]:checked').value,
        "Catch Up Friday": document.querySelector('input[name="Question9"]:checked').value,
        "Any Problems": (document.getElementById("Question10").value),
        "What Solution": (document.getElementById("Question11").value),
    };

    for (var key in formData) {
        localStorage.setItem(key, formData[key]);
    }

    alert('Thank you for your participation!')

})