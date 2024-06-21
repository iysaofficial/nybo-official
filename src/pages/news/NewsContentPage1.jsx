import '../../assets/css/Header.css'
import HeaderComp from "../../components/HeaderComp"
import "../../assets/css/news/NewsContent.css"
import NewsContentComp from "../../components/news/NewsContentComp"



const NewsContentPage = () =>{
    return(
        <>
        <br />
        <br />
        <br />
        <HeaderComp header={"News Detail Page"}></HeaderComp>
        <NewsContentComp 
            header="National Youth Biology Olympiad Perdana dan International Youth Biology Olympiad ke-3 Sukses Terlaksana Secara Full Online"
            image="./assets/images/news/news1.jpg" 
            paragraf1="DEPOKPOS – Kalian sudah tahu kan bahwa IYSA kini juga menyelenggarakan event Olimpiade tingkat Nasional dan Internasional? Nah di bulan April ini, IYSA kembali menyelenggarakan Olimpiade Biology full online tingkat Internasional yaitu International Youth Biology Olympiad (IYBO) untuk yang kedua kalinya dan menggelar juga tingkat nasionalnya yang diperuntukkan bagi peserta nasional saja dengan nama National Youth Biology Olympiad (NYBO)."
            paragraf2="Event olimpiade tahun ini masih bekerja sama dengan Departemen Aktuaria ITS yang diketuai oleh Assoc Prof. Soehardjoepri, M.Si. Ada sekitar 85 tim yang mengikuti NYBO dan IYBO ini, dimana untuk peserta internasionalnya berasal dari 7 negara meliputi Indonesia, Malaysia, Kazakhstan, Thailand, Singapore, India, Turkmenistan"
            paragraf3="Seperti sebelumnya, Olimpiade Biology ini diselenggarakan dalam 2 putaran."
            paragraf4="Putaran pertama dilaksanakan pada tanggal 22 April yang dibarengi dengan upacara pembukaan, dan putaran kedua dilaksanakan pada tanggal 26 April."
            paragraf5="Peserta yang berhasil lolos ke putaran kedua memperebutkan medali emas, perak, dan perunggu. Sedangkan peserta yang belum berhasil lolos ke babak kedua mendapatkan honourable mention."
            paragraf6="Untuk pengumuman pemenang sendiri telah dilaksanakan pada tanggal 1 Mei lalu bersamaan dengan pengumuman pemenang peserta IIIEX dan OSPC yang mengikuti kompetisi online."
            paragraf7="Terima kasih kepada para peserta yang sudah mengikuti NYBO & IYBO kali ini, dan untuk kalian yang belum mengikuti Olimpiade yang diselenggarakan oleh IYSA, jangan berkecil  hati karena di bulan Juni nanti kami akan menggelar Olimpiade Kimia tingkat SMA dan Universitas untuk level nasional dan internasional."
            paragraf8="Sampai jumpa di event IYSA berikutnya!"
            paragraf9="Sumber :"
            sourceLink="https://www.depokpos.com/2024/05/national-youth-biology-olympiad-perdana-dan-international-youth-biology-olympiad-ke-3-sukses-terlaksana-secara-full-online/"
            sourceText="https://www.depokpos.com/2024/05/national-youth-biology-olympiad-perdana-dan-international-youth-biology-olympiad-ke-3-sukses-terlaksana-secara-full-online/"
        />

        
        </>
    )
}

export default NewsContentPage