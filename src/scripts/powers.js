document.querySelector("#activate-flight").addEventListener("click", function flightHandlerFunction() {
    document.getElementById("flight").classList.remove("disabled");
    document.getElementById("flight").classList.add("enabled");
})

document.querySelector("#activate-mindreading").addEventListener("click", function mindreadingHandlerFunction() {
    document.getElementById("mindreading").classList.remove("disabled");
    document.getElementById("mindreading").classList.add("enabled");
})

document.querySelector("#activate-xray").addEventListener("click", function xrayHandlerFunction() {
    document.getElementById("xray").classList.remove("disabled");
    document.getElementById("xray").classList.add("enabled");
})

// document.querySelector("#activate-all").addEventListener("click", function addPowersHandler() {
//     document.getElementById("flight").classList.remove("disabled");
//     document.getElementById("flight").classList.add("enabled");
//     document.getElementById("mindreading").classList.remove("disabled");
//     document.getElementById("mindreading").classList.add("enabled");
//     document.getElementById("xray").classList.remove("disabled");
//     document.getElementById("xray").classList.add("enabled");
// })

// document.querySelector("#deactivate-all").addEventListener("click", function removePowersHandler() {
//     document.getElementById("flight").classList.remove("enabled");
//     document.getElementById("flight").classList.add("disabled");
//     document.getElementById("mindreading").classList.remove("enabled");
//     document.getElementById("mindreading").classList.add("disabled");
//     document.getElementById("xray").classList.remove("enabled");
//     document.getElementById("xray").classList.add("disabled");
// })

const activateAll = document.querySelectorAll(".power")
const deactivateAll = document.querySelectorAll(".power")
document.querySelector("#activate-all").addEventListener("click", activation)
document.querySelector("#deactivate-all").addEventListener("click", deactivation)

function activation() {
    for (i = 0; i < activateAll.length; ++i) {
        activateAll[i].classList.remove("disabled");
        activateAll[i].classList.add("enabled");
    }
}

function deactivation() {
    for (i = 0; i < deactivateAll.length; ++i) {
        deactivateAll[i].classList.remove("enabled");
        deactivateAll[i].classList.add("disabled");
    }
}
