
import './index.css'

import { Drink } from '../Drink'

export const Menu = ({ drinks }) => {
    return (
        <section id="menu" className="menu">
        <div className="container">
          <h2>Naše nabídka</h2>
          <p className="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
          </p>
          <div className="drinks-list">
            {drinks.map((drink) => (
                <Drink 
                key={drink.id}
                id={drink.id}
                name={drink.name}
                ordered={false}
                image={`http://localhost:4001${drink.image}`}
                layers={drink.layers}
            />
            ))}
          </div>

          <div className="order-detail">
            <a href="/order.html">Detail objednávky</a>
          </div>
        </div>
      </section>
    )
}