import haqqimizdaCarx from '../assets/img/haqqimizdaCarx.png'
import missiyamiz from '../assets/img/missiyamiz.png'
import vizyonumuz from '../assets/img/vizyonumuz.png'

export default function AboutUs() {
    return (
        <section>
            <div className="container">
                <h1 style={{fontSize: "50px", margin: '40px 0 20px 0'}}>Haqqimizda</h1>
                <div className="about-body">
                    <div className="body-left">
                        <div className="card">
                            <img src={missiyamiz} alt="" />
                            <h3>Missiyamiz</h3>
                            <p>Biz müştərilərimiz, əməkdaşlarımız, tərəfdaşlarımız və təsisçilərimizin məmnuniyyəti üçün çalışırıq.</p>
                        </div>
                        <div className="card">
                            <img src={vizyonumuz} alt="" />
                            <h3>Vizyonumuz</h3>
                            <p>Hər kəsin güvəndiyi, sevərək alış-veriş etmək və işləmək istədiyi müasir pərakəndəçi olmaq.</p>
                        </div>
                    </div>
                    <div className="body-right">
                        <img src={haqqimizdaCarx} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
