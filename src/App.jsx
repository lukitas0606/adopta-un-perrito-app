import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React from 'react';
import Header from './Header';
import Cards from './Cards';
import Footer from './Footer';

function App() {
  const title = "Adopta un perrito";

  return (
    <div>
      <Header title={title} />
      <div className='card-container'>
      <Cards
        imageSrc="/src/assets/img/perro1.jpg"
        imageAlt="Imagen 1"
        title="Wilson"
        description="Lleno de energia y listo para jugar. ¡Dale a Wilson el hogar amoroso que se merece!"
        tagBackgroundColor="primary"
        tagText="cocker spaniel"
      />

      <Cards
        imageSrc="/src/assets/img/perro2.jpg"
        imageAlt="Imagen 2"
        title="Tyson"
        description="Es jugueton, amigable y se lleva bien con niños y otros animales. ¡Haz de Tyson parte de tu familia hoy mismo!"
        tagBackgroundColor="primary"
        tagText="Bulldog Ingles"
      />

      <Cards
        imageSrc="/src/assets/img/perro3.jpg"
        imageAlt="Imagen 3"
        title="Marley"
        description="Un perro de tamaño mediano con un corazon gigante, Hazte amigo de Marley y experimenta un amor incondicional."
        tagBackgroundColor="primary"
        tagText="labrador retriever"
      />

      <Cards
        imageSrc="/src/assets/img/perro4.jpg"
        imageAlt="Imagen 4"
        title="Calcetin"
        description="Es un compañero leal y cariñoso que adora los mimos y los abrazos. ¡Ayuda a Calcetin a encontrar su final feliz."
        tagBackgroundColor="primary"
        tagText="Maltés"
      />
      </div>
      <Footer />
    </div>
  );
}

export default App;