function showForm() {
    var formTalk = document.getElementById("form_talk")
    if (formTalk.getAttribute("class").match("hidden")) {
        formTalk.setAttribute("class", formTalk.getAttribute("class").replace("hidden", ""))
        document.getElementById("success_message_container").remove()
    }

    var formTalkContainer
    formTalkContainer = document.getElementById("form_talk_container")
    formTalkContainer.removeAttribute("class")
}

function closeForm() {
    var formTalkContainer
    formTalkContainer = document.getElementById("form_talk_container")
    formTalkContainer.setAttribute("class", "hidden")
}

function sendForm() {
    var name = document.getElementById("inputName")
    var email = document.getElementById("inputEmail")
    var phone = document.getElementById("inputPhone")
    if (name.value == "" || email.value == "" || phone.value == "") {
        return
    }

    var messageContainer = document.createElement("div")
    messageContainer.setAttribute("id", "success_message_container")
    var p = document.createElement("p")


    var textNode = document.createTextNode("Hi " + name.value)
    p.appendChild(textNode)
    p.appendChild(document.createElement("br"))
    p.appendChild(document.createElement("br"))
    var textNode = document.createTextNode("Thank you for your message!")
    p.appendChild(textNode)
    p.appendChild(document.createElement("br"))
    p.appendChild(document.createElement("br"))

    var textNode = document.createTextNode("We will call you back on your phone number " + phone.value + " or write you a mesage to your email " + email.value)
    p.appendChild(textNode)

    messageContainer.setAttribute("class", "m-5")
    messageContainer.appendChild(p)
        // hide form with fields
    var formTalk = document.getElementById("form_talk")
    var oldClassValue = formTalk.getAttribute("class")
    var newClassValue = oldClassValue + " hidden"
    formTalk.setAttribute("class", newClassValue)

    var formBackground = document.getElementById("form_background")
    formBackground.appendChild(messageContainer)
}