window.addEventListener('DOMContentLoaded', async () => {
    const selectTag = document.getElementById('conference');

    const url = 'http://localhost:8000/api/conferences/';
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();

        for (let conference of data.conferences) {
            const option = document.createElement('option');
            option.value = conference.href;
            option.innerHTML = conference.name;
            selectTag.appendChild(option);
        }

        // Here, add the 'd-none' class to the loading icon
        const loading = document.getElementById('loading-conference-spinner');
        loading.classList.add("d-none")

        // Here, remove the 'd-none' class from the select tag
        selectTag.classList.remove("d-none")
    }

    // Submit Attendee
    const formTag = document.getElementById('create-attendee-form');
    formTag.addEventListener('submit', async event => {
        event.preventDefault();
        const formData = new FormData(formTag);
        const json = JSON.stringify(Object.fromEntries(formData));
        console.log("::::::", json)

        const attendeeUrl = 'http://localhost:8001/api/attendees/';
        const fetchConfig = {
            method: "post",
            body: json,
            headers: {
                'Content-type': 'application/json',
            },
        };
        const response = await fetch(attendeeUrl, fetchConfig);
        if (response.ok) {
            // formTag.reset();
            // const newAttendee = await response.json();
            formTag.classList.add("d-none");
            const successDiv = document.getElementById("success-message");
            successDiv.classList.remove("d-none");
        };
    });
});
