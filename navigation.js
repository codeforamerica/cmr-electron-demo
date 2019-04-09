function showScreen2 () {
    document.getElementById("screen-1").hidden = true
    document.getElementById("screen-2").hidden = false
}

function showScreen3 () {
    document.getElementById("screen-2").hidden = true
    document.getElementById("screen-3").hidden = false
}

function confirmSelectedCounty (countyName) {
    document.getElementById("county-confirmation").getElementsByClassName("selected-county")[0].innerText = countyName
}

function populateSuccessMessage (filePath, countyCode) {
    document.getElementById("success-message").getElementsByClassName("selected-county")[0].innerText = countyCode
    document.getElementById("success-message").getElementsByClassName("file-path")[0].innerText = filePath
}

function handleFileSelection (e) {
    e.preventDefault()
    e.stopPropagation()
    let filePath = document.getElementById("doj-file").files[0].path
    let selectedCountyCode = document.getElementById("county").value

    populateSuccessMessage(filePath, selectedCountyCode)
}

document.getElementById("county").onchange = function (e) {
    confirmSelectedCounty(e.target.selectedOptions[0].text)
    showScreen2()
}

document.getElementById("doj-file-form").onsubmit = function (e) {
    handleFileSelection(e)
    showScreen3()
}