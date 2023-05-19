import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./cardstyle.css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper";

const NP = () => {
    document.title = "Nos projet";
    const params = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        className: 'my-swiper-navigation'
    };

    return (
        <>
            <div>
                <hr></hr>
                <h2 style={{ color: "#fff", margin: "-5px", marginLeft: "70px" }}>Site Web</h2>
                <hr></hr>
                <div>
                    <Swiper
                        {...params}
                        pagination={{
                            clickable: true,
                        }}

                        navigation
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 50,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 100,
                            },
                        }}
                        modules={[Navigation, Pagination]}
                    >
                        <SwiperSlide>
                            <a href='https://localub.com/' target='blank'>
                                <div className="card-container">
                                    <div className="card">
                                        <div className="img-content">
                                            <img src="./cardimg/localub.png" alt='' />
                                        </div>
                                        <div className="content" style={{ color: "#fff" }}>
                                            <p>
                                                Entreprise nationale d'énergie,
                                                elle fournit des carburants et des
                                                lubrifiants au niveau national. Outre
                                                les différentes fournitures opérationnelles
                                                de carburant et d'huile, elle est spécialisée dans
                                                la vente, l'entretien et la réparation d'équipements
                                                de stations-service.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href='https://premiumautogarage.com/' target='blank'>
                                <div className="card-container">
                                    <div className="card">
                                        <div className="img-content">
                                            <img src='./cardimg/premium-auto-garage.png' alt='' />
                                        </div>
                                        <div className="content">
                                            <p>
                                                Premium Garage Auto est un spécialiste de la réparation automobile,
                                                notamment des pneus, des systèmes d’échappement, des freins,
                                                de l’entretien des voitures, de la tolerie et la peinture.
                                                Nous disposons également des derniers équipements de diagnostic
                                                qui nous permettent d’entretenir et de réparer toutes les marques
                                                de véhicules.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href='https://www.royalgolfagadir.com/' target='blank'>
                                <div className="card-container">
                                    <div className="card">
                                        <div className="img-content">
                                            <img src='./cardimg/Royal-Golf-Agadir.png' alt='' />
                                        </div>
                                        <div className="content">
                                            <p className="heading">Card Hover</p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipii
                                                voluptas ten mollitia pariatur odit, ab
                                                minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                                necessitatibus dignissimos molestias.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div>
                <hr></hr>
                <h2 style={{ color: "#fff", margin: "-5px", marginLeft: "70px" }}>Application</h2>
                <hr></hr>
                <div>
                    <Swiper
                        {...params}
                        pagination={{
                            clickable: true,
                        }}

                        navigation
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 50,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 100,
                            },
                        }}
                        modules={[Navigation, Pagination]}
                    >
                        <SwiperSlide>
                            <div className="card-container">
                                <div className="card">
                                    <div className="img-content">
                                        <h1>Application vignette</h1>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipii
                                            voluptas ten mollitia pariatur odit, ab
                                            minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                            necessitatibus dignissimos molestias.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-container">
                                <div className="card">
                                    <div className="img-content">
                                        <h1>Application journnée pompiste</h1>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipii
                                            voluptas ten mollitia pariatur odit, ab
                                            minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                            necessitatibus dignissimos molestias.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-container">
                                <div className="card">
                                    <div className="img-content">
                                        <h1>App shop</h1>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipii
                                            voluptas ten mollitia pariatur odit, ab
                                            minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                            necessitatibus dignissimos molestias.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-container">
                                <div className="card">
                                    <div className="img-content">
                                        <h1>App pointeuse</h1>
                                    </div>
                                    <div className="content">

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipii
                                            voluptas ten mollitia pariatur odit, ab
                                            minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                            necessitatibus dignissimos molestias.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-container">
                                <div className="card">
                                    <div className="img-content">
                                        <h1>App cafe</h1>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipii
                                            voluptas ten mollitia pariatur odit, ab
                                            minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                            necessitatibus dignissimos molestias.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default NP;
