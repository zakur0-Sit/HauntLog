const form = document.querySelector("#eventForm")
const formMessageText = document.querySelector(".form-message-text")

form.addEventListener("submit", async function (event) {
    event.preventDefault()

    const location = document.querySelector("#location").value;
    const text = document.querySelector("#details").value;
    const title = document.querySelector("#title").value;

    if (!location || !text || !title) {
        formMessageText.textContent = `Please complete all fields!`
        return
    }

    const isoDateString = document.querySelector("#datetime").value

    if (!isoDateString) {
        formMessageText.textContent = "Please select a date and time!"
        return
    }

    const date = new Date(isoDateString)

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    }
    const readableDate = date.toLocaleString("en-GB", options)

    const formData = {
        location: location,
        timeStamp: readableDate,
        text: text,
        title: title,
    }

    try {
        formMessageText.textContent = ""
        const response = await fetch("./api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
        if (response.ok) {
            formMessageText.innerHTML = `Your sighting was uploaded. View it <a href="./sightings.html">here</a>.`;
            form.reset()
        } else {
            formMessageText.textContent = `The server Ghosted you(!). Please try again.`
            console.error("Server Error:", response.statusText)
        }
    } catch (error) {
        formMessageText.textContent = `Serious ghouls! Please try again.`
        console.error("Error:", error)
    }
})