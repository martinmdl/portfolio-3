import { useContext, useState } from "react";
import { LangContext, LangContextType } from "../contexts/LangContext";
import { getLanguage } from "../Translation";
import { Card } from "../components/Card";
import { Modal } from "../components/Modal";
import './Page.css';
import './01_Work.css';

export function Work() {

    const { isSpanish } = useContext<LangContextType | null>(LangContext)!;

    const currentLanguage = getLanguage(isSpanish);

    const [activeModal, setActiveModal] = useState(false);

    function handleModalToggle() {
        setActiveModal(!activeModal)
    }


    return (
        <main className="main">

                <section className="info-frame">

                    <article className="alert-title">
                        <div className="icon-static"></div>
                        <div className="icon-shadow"></div>
                        <h2>Open to work</h2>
                    </article>

                    <span>Estudiante avanzado UNSAM</span><br/>
                    <span>Hybrid</span><br/>
                    <span>martinmdl42@gmail.com</span><br/>
                    <span>Español nativo, ingles avanzado</span>

                </section>

                <section className="lower-main">

                    {activeModal && <Modal onClose={handleModalToggle} />}

                    {currentLanguage.workCards.map(item =>
                        <button className="card-button" onClick={handleModalToggle}>
                            <Card key={item.id} title={item.title} description={item.description} image={item.image} />
                        </button>
                    )}

                </section>


        </main>
    )
}