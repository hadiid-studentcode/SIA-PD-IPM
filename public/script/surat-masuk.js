function createdData() {

  const form  = document.getElementById('form');
  const no = document.getElementById("nosurat").value;
  const perihal = document.getElementById("perihal").value;

  const dari = document.getElementById("suratdari").value;

  const sifat = document.getElementById("sifatsurat").value;

  const tanggal = document.getElementById("tanggal").value;

  const penerima = document.getElementById("penerima").value;

  const lampiran = document.getElementById("lampiran").value;

  const keterangan = document.getElementById('keterangan').value;

  const foto = document.getElementById("fotosurat").value;
   const fotosurat = foto.substring(12);

  const date = new Date();




  form.addEventListener("submit", function (event) {
    event.preventDefault();

     fetch("https://sheetdb.io/api/v1/ardrqd97wdth7", {
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
             Dari: dari,
             Sifat: sifat,
             Tanggal: tanggal,
             Penerima: penerima,
             Lampiran: lampiran,
             Keterangan: keterangan,
             Foto: fotosurat,
             Timestamp: date,
           },
         ],
       }),
     })
       .then((response) => response.json())
       .then((data) => console.log(data));


   

    


      

   return alert("Surat Masuk Berhasil Ditambahkan !");
  })


  document.location.reload(true);
  


}







