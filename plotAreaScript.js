const imageBox = document.getElementById("plotAreaImage");

imageBox.addEventListener("mousemove", (e) => {

    const rect = plotAreaImage.getBoundingClientRect();

    // Mouse position
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Center position
    const centerX = rect.width / 20;
    const centerY = rect.height / 20;

    // Rotation
    const rotateY = (x - centerX) / 5;
    const rotateX = (centerY - y) / 5;

    plotAreaImage.style.transform =
        `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.05)`;
});

plotAreaImage.addEventListener("mouseleave", () => {
    imageBox.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
});

// copy element button ============================================

let areCopyBtn = document.getElementById("copyBtn");
let areThisCopyTextElement = document.querySelector(".formulaItwm p").innerText;
areCopyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(areThisCopyTextElement);
    copyBtn.classList.replace("fa-clone", "fa-check");

    setTimeout(() => {
        copyBtn.classList.replace("fa-check", "fa-clone");
    }, 2000);
});

// ============================== copy eleemnt button end =================================
function calculateQuestion() {

    let areFirstInput_grp = Number(document.getElementById("frontInput").value);
    let areSecondInput_grp = Number(document.getElementById("backInput").value);
    let areThirdInput_grp = Number(document.getElementById("leftInput").value);
    let areFourthInput_grp = Number(document.getElementById("rightInput").value);

    let areAnswerResult_Print = document.getElementById("answer_result");

    // Area = ((Front + Back) / 2) × ((Left + Right) / 2)
    let areArea = ((areFirstInput_grp + areSecondInput_grp) / 2) *
        ((areThirdInput_grp + areFourthInput_grp) / 2);

    areAnswerResult_Print.innerHTML = areArea;
    return 0;
};
// let areFirstInput_grp = (document.getElementById("frontInput"));
// let areSecondInput_grp = (document.getElementById("backInput"));
// let areThirdInput_grp = (document.getElementById("leftInput"));
// let areFourthInput_grp = (document.getElementById("rightInput"));

// let arebackTextInput = document.getElementById("plotAraInputText_back");
// let arefrontTextInput = document.getElementById("plotAraInputText_fornt");
// let areleftTextInput = document.getElementById("plotAraInputText_left");
// let arerightTextInput = document.getElementById("plotAraInputText_right");

//  areFirstInput_grp.addEventListener("input", function () {
//     let value = areFirstInput_grp.value;

//     let breakText = value.match(/.{1,4}/g)?.join("<br>") || "";

//     arefrontTextInput.innerHTML = "Front = " + breakText;
// });
//         areSecondInput_grp.addEventListener("input",function(){
//         arebackTextInput.textContent = "back = " + areSecondInput_grp.value
//     });
        
// ...existing code...

const themeBtn = document.querySelector(".themeBtn");
const themeIcon = themeBtn.querySelector("i");

const applyTheme = (isLight) => {
    document.body.classList.toggle("light-theme", isLight);
    themeIcon.classList.toggle("fa-sun", !isLight);
    themeIcon.classList.toggle("fa-moon", isLight);
    localStorage.setItem("plotTheme", isLight ? "light" : "dark");
};

const savedTheme = localStorage.getItem("plotTheme");
applyTheme(savedTheme === "light");

themeBtn.addEventListener("click", () => {
    const isLight = !document.body.classList.contains("light-theme");
    applyTheme(isLight);
});

// ...existing code...