import { render } from '@czechitas/render';
import '../global.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';


const allDrinks = await fetch('http://localhost:4001/api/drinks')
const drinksData = await allDrinks.json()

console.log(drinksData)

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinksData.data} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

const navBtn = document.querySelector(".nav-btn")
const navRoll = document.querySelector(".rollout-nav")

navBtn.addEventListener("click", () => {
  navRoll.classList.toggle("nav-closed")
})

navRoll.addEventListener("click", (event) => {
  if(event.target.matches("a")) {
    navRoll.classList.add("nav-closed")
  }
})
