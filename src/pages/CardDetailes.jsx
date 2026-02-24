import img3 from "../assets/img/img3.png";

export default function CardDetailes() {
    return (
        <section classNameName='container'>
            <div className="promo-page">
                <h2 className="page-title">“Araz” və “akart”dan əla fürsət!</h2>

                <div className="promo-banner">
                    <img src={img3} alt="Araz akart kampaniya" />
                </div>

                <div className="promo-text">
                    <p>
                        “Araz” supermarketlər şəbəkəsində etdiyiniz alış-verişlər zamanı
                        ödənişi “akart” ilə həyata keçirərək 2% keşbek qazanmaq imkanı əldə edirsiniz.
                    </p>
                    <p>
                        Gündəlik alış-verişlərinizi “Araz”dan “akart” ilə daha sərfəli edin.
                    </p>
                </div>

                <div className="share">
                    <span>Sosial şəbəkədə paylaş</span>
                    <div className="icons">
                        <button>f</button>
                        <button>X</button>
                        <button>in</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
