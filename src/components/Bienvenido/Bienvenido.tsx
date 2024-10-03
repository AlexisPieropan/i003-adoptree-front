import React from 'react';
// import farmerImage from '../../assets/farmer.jpg'; // es la ruta de la img principal de fondo
import video from '../../assets/AdobeStock_812746937.mov';
import tituloPrincipal from '../../assets/titulo.png'; //img del titulo Portada con diseño en formato png
import adoptionImage from '../../assets/adopcion.jpg'; //img card 1
import compraImage from '../../assets/compra.jpg'; //img card 2
import disfrutaImage from '../../assets/disfruta.jpg'; //img card 3

import './Bienvenido.css'; //estilos personalizados para el componente

const Bienvenido: React.FC = () => {
  return (
    <section className=" bg-cover bg-center h-screen md:mb-20 p-[220px] 4xl:p-[440px]">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>

      {/* Filtro oscuro sobre el video */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center text-white">
        <p className="text-lg mb-5 flex">BIENVENIDO A ADOPTREE</p>
        <img
          className="w-[400px] 4xl:w-[700px]"
          src={tituloPrincipal}
          alt="titulo"
        />
        <div className="w-1/2 flex flex-col">
          <p className="text-lg 4xl:text-[30px] md:text-[18px] mb-6 anchoPersonalizado tipografiaPersonalizada w-[500px] 4xl:w-[700px]">
            Descubre cómo puedes adoptar un árbol cítrico, apoyar a productores
            locales y recibir fruta fresca en casa.
            <br />
            <br className="hidden 4xl:block" />
            <span className="4xl:mt-[15px]">¡Únete a Adoptree!</span>
          </p>
          <button
            onClick={() =>
              document
                .getElementById('como-adoptar')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="w-[220px] text-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform"
          >
            Descubre cómo
          </button>
        </div>
      </div>

      {/*SECCIÓN DE CARDS*/}
      <div className="absolute bottom-[-120px] left-0 right-0 hidden md:flex justify-center z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-[250px] 4xl:w-[300px]">
            <p className="text-orange-400 font-medium tipografiaCards 4xl:text-[35px]">
              Adopta
            </p>
            <h3 className="text-[1.15rem] font-semibold mb-4 4xl:text-[22px]">
              Naranjos en adopción
            </h3>
            <img
              src={adoptionImage}
              alt="Naranjos en adopción"
              className="h-24 w-24 mx-auto rounded-full mb-4"
            />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-[250px] 4xl:w-[300px]">
            <p className="text-orange-400 font-medium tipografiaCards 4xl:text-[35px]">
              Compra
            </p>
            <h3 className="text-[1.15rem] font-semibold mb-4 4xl:text-[22px]">
              Directo del proveedor
            </h3>
            <img
              src={compraImage}
              alt="Naranjos en adopción"
              className="h-24 w-24 mx-auto rounded-full mb-4"
            />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-[250px] 4xl:w-[300px]">
            <p className="text-orange-400 font-medium tipografiaCards 4xl:text-[35px]">
              Disfruta
            </p>
            <h3 className="text-[1.15rem] font-semibold mb-4 4xl:text-[22px]">
              Visita nuestras fincas
            </h3>
            <img
              src={disfrutaImage}
              alt="Naranjos en adopción"
              className="h-24 w-24 mx-auto rounded-full mb-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bienvenido;
