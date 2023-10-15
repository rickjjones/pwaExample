// Create the form and the form contrl
const newRangeFromE1 = document.getElementsByTagName("form")[0];
const startDateInputE1 = document.getElementsByTagName("start-name");
const endDateInputE1 = document.getElementsByTagName("end-date");


// Listen to form submission.
newRangeFromE1.addEventListener("submit", (event) => {

    // Prevent the form from submitting to the server
    // since everything is client-side.

    event.preventDefault();

    // Get the start and end date from the form.
    const startDate = startDateInputE1.value;
    const endDate = endDateInputE1.value;

    // Check if the dates are invalid
    if (checkDatesInvalid(startDate, endDate)){
       // Check that the end date is after start date and neither is null. 
       if (!startDate || !endDate || startDate > endDate){
        // To make the validation robust we could:
            // 1. add error messaging based on error type
            // 2. Alert assistive technology users about the error
            // 3. move focus to the error location
            // instead, for now, we clear the dates if either 
            // or both are invalid
            newRangeFromE1.reset();
            // as dates are invalid, we return true
        return true;
       }
        // else
        //  the dates are invalid, exit.
        return false;
    }

    // Store the new range in our client-side storage.
    storeNewRange(startDate, endDate);

    // Refresh the UI
    renderPastRanges();

    // Reset the form.
    newRangeFromE1.reset();

});