class NavBarEdit extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
            <!-- Navigasi Header -->
            <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
            <!-- Nav Brand -->
            <img src="./img/logo.png" alt="logo"><a href="#home" class="navbar-brand nav-link">Hel<span>phy</span></a>
                <style>
                    .navbar-brand {
                        color       : #b4b4b4 !important; 
                    }
                </style>
                <!-- Nav button responsive -->
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navigasiMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>
        
                <!-- Nav List -->
                <div class="collapse navbar-collapse" id="navigasiMenu">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html"> Beranda
                        <li class="nav-item"><a class="nav-link" href="index.html"> Layanan </a></li>
                        <li class="nav-item"><a class="nav-link" href="index.html"> Info </a></li>
                    </ul>
                </div>    
            </nav>`
}    
}

customElements.define("navbar-edit", NavBarEdit);