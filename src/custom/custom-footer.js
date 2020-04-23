class FooTer extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `

            <!-- CSS Footer-->
            <style> 
            .bg-custom {
                background-image  : url('./img/footer.jpg');
                background-size   : cover;
                padding-left      : 20px;
                color             : #fff;
            }
            .pt-4 {
                margin-top        : -30px;
            }
            h3 {
                padding-top       : 100px;
            }
            .bg-bottom {
                background-color  : rgb(22, 22, 22);
            }
            </style>

            <!-- Footer -->
            <section id="info">
            <div class="bg-custom mt-5 pt-30 pt-60 pb-5">
        
                <div class="row">
                <!-- Profile Usaha -->
                <div class="col-md-4 col-lg-3 mx-auto mt-3">
                    <h3 class="text-uppercase mb-4 font-weight-bold"> Profil Usaha </h3>
                    <p class="pt-4">Sebuah usaha kecil ini dikekola personal oleh <br> dua bersudara, kakak beradik.<br> 
                        Sang kakak yang memiliki skill di dunia IT dan <br> Sang adik yang berbakat di dunia tekstil.<br>
                        <br><i class='fas fa-laptop-house' style='font-size:30px;color:whitesmoke'></i> Hari kerja kami setiap hari <br> Senin - Minggu pukul 09.00 - 17.00 WIB</p>
                    </div>
                        
                <!-- Follow Us -->
                <hr class="w-100 clearfix d-md-none">
                <div class="col-md-2 col-lg-2 mx-auto mt-3">
                    <h3 class="text-uppercase mb-4 font-weight-bold"> Follow Us </h3>
                    <a href="#!"><i class="fab fa-whatsapp" style="font-size:45px;color:orangered"></i>&nbsp; &nbsp; &nbsp;</a> 
                    <a href="#!"><i class="fab fa-facebook-f" style="font-size:45px;color:orangered"></i>&nbsp; &nbsp; &nbsp;</a>  
                    <a href="#!"><i class="fab fa-instagram" style="font-size:45px;color:orangered"></i>&nbsp;</a> <br> <br>
                    <a href="#!"> &nbsp; &nbsp; <i class="far fa-envelope" style="font-size:48px;color:orangered"></i>&nbsp; &nbsp; &nbsp;</a>
                    <a href="#!"> <i class="fab fa-youtube" style="font-size:48px;color:orangered"></i></a>
                </div>
        
                <!-- Alamats -->
                <hr class="w-100 clearfix d-md-none">
                <div class="col-md-4 col-lg-3 mx-auto mt-3">
                    <h3 class="text-uppercase mb-4 font-weight-bold">Alamat</h3>
                    <p class="pt-4"><i class="fas fa-home mr-3" style="font-size:30px;color:whitesmoke"></i> Jl. Ikan Piranha Malang</p>
                
                    <!--Google map-->
                    <div id="map-container-google-9" class="z-depth-1-half map-container-5" style="height: 150px">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7903.2795793423875!2d112.6340995!3d-7.9326373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629eb507897a3%3A0x6a02d8dc56fc4faa!2sMusholla%20Nurul%20Islam!5e0!3m2!1sen!2sid!4v1587043936584!5m2!1sen!2sid" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
                    
                </div>
            </div>
            
            <!--Copyright-->
            <div class="row bg-bottom">
                <div class="col-md-12">
                <p class="text-center mb-2">©Helphy Copyright 2020</p>
                </div>
            </div>
            </section>`
    }    
}

customElements.define("custom-footer", FooTer);      