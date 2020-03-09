// function myFunction() {
// //     let text = document.getElementById("check").value;
// //     let newText = text.replace(/foo/g, '<b>bar</b>');
// //     newText = newText.replace(/foo/g,"bar");
// //     newText = newText.replace(/foo/g,"bar");
// //     document.getElementById("check").value = newText;
// //     console.log(newText);
// // }

function myFunction() {
    let text = document.getElementById("input").value = replace;
    let replace = [""];
    document.getElementById("check").value = newText;
    console.log(newText);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn_submit').addEventListener('click', myFunction);
});
