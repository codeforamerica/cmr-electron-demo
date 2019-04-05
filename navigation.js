function showScreen2 () {
    document.getElementById("screen-1").hidden = true
    document.getElementById("screen-2").hidden = false
}

function showScreen3 () {
    document.getElementById("screen-2").hidden = true
    document.getElementById("screen-3").hidden = false
}

function showSelectedCounty (countyName) {
    document.getElementById("selected-county").innerText = countyName
}

document.getElementById("begin").onclick = function () {
    showScreen2()
}

document.getElementById("county").onchange = function (e) {
    showSelectedCounty(e.target.selectedOptions[0].text)
    showScreen3()
}