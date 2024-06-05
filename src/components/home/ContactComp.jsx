const ContactComp = () =>{
    return(
        <>
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <h1>Kontak Kami</h1>
                <div className="content">
                    <div className="left-side">
                        <div className="address details">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="text-one">Alamat</div>
                            <div className="text-one"><a href="https://goo.gl/maps/9x18coXGCmSscKec6" target="_blank">Jl. Kemang, Pasir Putih, Kecamatan. Sawangan, Kota Depok, Jawa Barat 16519</a></div>
                            <div className="text-two"></div>
                        </div>
                        <div className="phone details">
                            <i className="fas fa-phone-alt"></i>
                            <div className="text-one">Telepon</div>
                            <div className="text-one"><a href="https://wa.me/+6281770914129" target="_blank">+62817-7091-4129</a></div>
                            <div className="text-two"></div>
                        </div>
                        <div className="email details">
                            <i className="fas fa-envelope"></i>
                            <div className="text-one">Email</div>
                            <div className="text-one"><a href="mailto:nybo.officiall@gmail.com" target="_blank">nybo.officiall@gmail.com</a></div>
                            <div className="text-two"></div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Kirimkan pesan kepada kami</div>
                        {/* <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. it's my pleasure to help you.</p> */}
                        <form action="https://formspree.io/f/mvoebvrd" method="POST">
                            <div className="input-box">
                                <input type="text" name="name" placeholder="Masukan Nama Anda"/>
                            </div>
                            <div className="input-box">
                                <input type="email" name="email" placeholder="Masukan Email Anda"/>
                            </div>
                            <div className="input-box message-box">
                                <textarea placeholder="Tulis Pesan" name="message"></textarea>
                            </div>
                            <div className="button">
                                <input type="submit" value={"Kirim"}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>       
    )
}

export default ContactComp