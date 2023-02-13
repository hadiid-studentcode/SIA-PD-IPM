function simpansurat() {
  const form = document.getElementById("form");
  const nosurat = document.getElementById("nosurat");
  const perihal = document.getElementById("perihal");
  const suratdari = document.getElementById("suratdari");
  const sifatsurat = document.getElementById("sifatsurat");
  const tanggal = document.getElementById("tanggal");
  const penerima = document.getElementById("penerima");
  const lampiran = document.getElementById("lampiran");
  const fotosurat = document.getElementById("fotosurat");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      Jenis : "Masuk",
      No: nosurat.value,
      Perihal: perihal.value,
      Dari: suratdari.value,
      Sifat: sifatsurat.value,
      Tanggal: tanggal.value,
      Penerima: penerima.value,
      Lampiran: lampiran.value,
      Foto: fotosurat.value,
    };

    console.log(data);

    // Add one line to the sheet
    fetch(
      "https://sheet.best/api/sheets/d51b5e7f-f88d-4bd5-899c-061f4ac49225",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        console.log(data);
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
  });

 

 


    return window.location.href = '/surat-masuk.html';
}

const d = new Date();

console.log(d)