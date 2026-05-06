function hesapla() {
    let kilo = document.getElementById("kilo").value;
    let boy = document.getElementById("boy").value;

    kilo = parseFloat(kilo);
    boy = parseFloat(boy);

    if (!kilo || !boy) {
        document.getElementById("sonuc").innerText = "Lütfen doldur!";
        return;
    }

    let bmi = kilo / (boy * boy);
    bmi = bmi.toFixed(2);

    let durum = "";

    if (bmi < 18.5) {
        durum = "Zayıf";
    } else if (bmi < 25) {
        durum = "Normal";
    } else if (bmi < 30) {
        durum = "Kilolu";
    } else {
        durum = "Obez";
    }

    document.getElementById("sonuc").innerText =
        "BMI: " + bmi + " (" + durum + ")";
}