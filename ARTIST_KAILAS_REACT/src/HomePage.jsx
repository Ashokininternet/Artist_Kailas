import React from "react"
import { gridData } from "./data"
import './HomePage.css'
function HomePage() {
    return (
        <>
            <header>
                <div class="page-header">
                    <h1 class="h1_1">Kailas S.R Art Corner</h1>
                    <h5>ART GALLERY</h5>
                </div>

            </header>

            <main className="Kai_grid1">
                {gridData.map((data) => (
                    <article key={data.id} className="art-piece">
                        <img className="art-img" src={data.img} alt={data.name} />
                        <div className="art-details">
                            <p className="art-name">Name: {data.name}</p>
                        </div>
                    </article>
                ))}
            </main>

            <footer>
                <hr />
            </footer>
        </>
    )
}
export default HomePage;
