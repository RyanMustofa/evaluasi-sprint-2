var jualMobil = {
    nama: "tompel",
    merek: "avansa",
    tahun: 2017,
    iklan:function(){
        document.write(`BU , saya ${this.nama}, jual mobil ${this.merek} , tahun ${this.tahun} ,bekas`)
    }
}

console.log(jualMobil.iklan())
