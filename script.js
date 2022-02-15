let showing = false;

function showAnswer(number) {
    console.log(showing);
    if (showing == true) {
        let answers = document.querySelectorAll('.answer');
        console.log(answers);
        console.log(answers[0]);
        console.log(answers[1]);
        console.log(answers[2]);
        console.log(answers[3]);
        console.log(answers[4]);
        
        for (let i = 0; i < 5;i++) {
            if (answers[i].classList.contains('.displayBlock') == true) {
                answers[i].classList.remove('.displayBlock');
            }
        }
        showing = false;
    }
    let query = `#aswr${number}`;
    document.querySelector(query).classList.toggle('displayBlock');
    if (showing == false) {
        showing = true;
    }
    else {
        showing = false;
    }
}