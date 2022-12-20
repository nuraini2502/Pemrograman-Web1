document.querySelectorAll("#option a").forEach((a) => {
    // Jika nanti di klik maka akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    });
})

function computerChoice(element){
    // Pilihan user
    let pilihanUser = element.target.innerText;

    // Menangkap element result dengan queryselector
    let pilihanKomputer = document.querySelector("#result");

    // Membuat pilihan untuk komputer menggunakan array 
    let choices = ["Rock", "Paper", "Scissors"];

    // Pilihan random komputer 
    pilihanKomputer.innerHTML = choices[Math.round(Math.random() * 2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // Jika pilihan user == komputer (draw) 
    if(pilihanUser == pilihanKomputer){
        // alert("DRAW");
        setTimeout(() => alert("DRAW"), 800);
    }

    // Jika pilihan user menang 
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        setTimeout(() => alert("USER WIN"), 800);
    } else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        setTimeout(() => alert("USER WIN"), 800);
    } else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        setTimeout(() => alert("USER WIN"), 800);
    }

    // Jika pilihan Komputer menang
    if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        setTimeout(() => alert("KOMPUTER WIN"), 800);
    } else if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        setTimeout(() => alert("KOMPUTER WIN"), 800);
    } else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        setTimeout(() => alert("KOMPUTER WIN"), 800);
    }

}