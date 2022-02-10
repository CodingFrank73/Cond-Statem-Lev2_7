
let inputID = document.getElementById("mylist");
let out1;
let out2;
let out3;
let out4;
let erg;

function showtxt() {

    let numInputID = Number(inputID.value);

    console.log(numInputID);

    switch (true) {
        case (numInputID == 0):

            out1 = `<b>Brief und Postkarte</b> <br>`;
            out2 = `<b>L: 10 - 23, 5 cm </b> <br>`;
            out3 = `<b>B: 7 - 12, 5 cm </b> <br>`;
            out4 = `<b>H: bis 1 cm</b> <br>`;

            erg = `${out1} ${out2} ${out3} ${out4}`;
            break;

        case (numInputID == 1):
            out1 = `<b>DHL Paket 2 kg</b> <br>`;
            out2 = `<b>bis 60 x 30 x 15 cm</b> <br>`;
            erg = `${out1} ${out2}`;
            break;

        case (numInputID == 2):
            out1 = `<b>DHL Paket 5 kg</b> <br>`;
            out2 = `<b>bis 120 x 60 x 60 cm</b> <br>`;
            erg = `${out1} ${out2}`;
            break;

        case (numInputID == 3):
            out1 = `<b>DHL Paket 10 kg</b> <br>`;
            out2 = `<b>bis 120 x 60 x 60 cm</b> <br>`;
            erg = `${out1} ${out2}`;
            break;

        default:
            out1 = `<b>Extra große Größe</b>`;
            erg = `${out1}`;
            break;
    }

    document.getElementById("masse").innerHTML = erg;

}