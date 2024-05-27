import './App.css'
import Header from './components/Header'
import MyCard from './components/MyCard';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from './assets/imgs/img1.jpg';
import img2 from './assets/imgs/img2.jpg';
import img3 from './assets/imgs/img3.jpg';
import img4 from './assets/imgs/img4.jpg';

function App() {
  const pets = [
    {
      image: img1,
      title: "Bartolo",
      description: "Lleno de energía y listo para jugar. ¡Dale a  Bartolo el hogar amoroso que se merece!",
      genres: [
        { text: "Musky", color: "success" }, 0
      ],
    },
    {
      image: img2,
      title: "Messi",
      description: "Es juguetón, amigable y se lleva con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!",
      genres: [
        { text: "Bobtail", color: "primary" }, 0
      ],
    },
    {
      image: img3,
      title: "Gohan",
      description: "Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional",
      genres: [
        { text: "Shar Pei", color: "danger" }, 0
      ],
    },
    {
      image: img4,
      title: "Princesa",
      description: "Es una compañera leal y cariñosa que adora los mimos y los abrazos.¡Ayuda a Princesa a encontrar un final feliz!",
      genres: [
        { text: "Beagle", color: "warning" }, 0
      ],
    },
  ];

  return (
    <>
      <Header title="Adopta un perrrito" />
      <div className="container mt-3 mb-3">
        <div className="row">
          {pets.map((pet, index) => (
            <div className="col-md-3" key={index}>
              <MyCard {...pet} />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
