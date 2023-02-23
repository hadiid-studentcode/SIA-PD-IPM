function createdData() {
  const form = document.getElementById("form");
  const no = document.getElementById("nosurat").value;
  const perihal = document.getElementById("perihal").value;

  const dikirimke = document.getElementById("dikirimke").value;

  const sifat = document.getElementById("sifatsurat").value;

  const tanggal = document.getElementById("tanggal").value;

  const penerima = document.getElementById("penerima").value;

  const lampiran = document.getElementById("lampiran").value;

  const keterangan = document.getElementById("keterangan").value;


  const date = new Date();

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    fetch("https://sheetdb.io/api/v1/eyk1ykxm1o34q", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            No: no,
            Perihal: perihal,
            Dikirimke: dikirimke,
            Sifat: sifat,
            Tanggal: tanggal,
            Penerima: penerima,
            Lampiran: lampiran,
            Keterangan: keterangan,
            Timestamp: date,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    return alert("Surat Keluar Berhasil Ditambahkan !");
  });

  document.location.reload(true);
}

 fetch("https://sheetdb.io/api/v1/eyk1ykxm1o34q")
   .then((response) => response.json())
   .then((data) => {
     $(document).ready(function () {
       $("#table_id").DataTable({
         data: data,
         columns: [
           { title: "No", data: "No" },
           { title: "Perihal", data: "Perihal" },
           { title: "Dikirim ke", data: "Dikirimke" },
           { title: "Sifat", data: "Sifat" },
           { title: "Tanggal", data: "Tanggal" },
           { title: "Penerima", data: "Penerima" },
           { title: "Lampiran", data: "Lampiran" },
           { title: "Keterangan", data: "Keterangan" },
           { title: "Timestamp", data: "Timestamp" },
         ],
       });
     });
   })
   .catch((error) => console.error(error));






  





   




   
