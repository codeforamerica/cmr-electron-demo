const spawn = require('child_process').spawn;

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

    console.log(selectedCountyCode)

    populateSuccessMessage(filePath, selectedCountyCode)
    console.log(process.resourcesPath +'/gogen')
    let goProcess = spawn(process.resourcesPath +'/gogen',['--input-doj='+filePath, '--outputs="~/Downloads"', '--county="'+selectedCountyCode+'"'])

    goProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    goProcess.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });

    goProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });

}

document.getElementById("county").onchange = function (e) {
    confirmSelectedCounty(e.target.selectedOptions[0].text)
    showScreen2()
}

document.getElementById("doj-file-form").onsubmit = function (e) {
    handleFileSelection(e)
    showScreen3()
}