import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link as Anchor } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../fonts/fonts.css'

export default function Index() {
const navigate=useNavigate()
const [nombre, setNombre]=useState()
const [correo, setCorreo]=useState()
const [mensaje, setMensaje]=useState()
const [menu, setMenu]=useState(false)
const inputNombre=useRef()
const inputCorreo=useRef()
const inputMensaje=useRef()

const captureNombre=()=>{
setNombre(inputNombre.current.value)
}
const captureCorreo=()=>{
  setCorreo(inputCorreo.current.value)
  }
  const captureMensaje=()=>{
    setMensaje(inputMensaje.current.value)
  }
const openMenu=()=>{
setMenu(true)
document.body.style.overflow = 'hidden'; 
}
const closeMenu=()=>{
setMenu(false)
document.body.style.overflow = 'auto'
}
async function enviar(){
try {
if(!nombre || !correo || !mensaje){
alert('Complete los campos para enviar su consulta.')
}else{
  const encodedMessage = encodeURIComponent(`${mensaje}\n\nDatos del cliente:\nNombre: ${nombre}\nCorreo electrónico: ${correo}`);
  
  const whatsappUrl = `https://api.whatsapp.com/send?phone=541124001758&text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}
} catch (error) {
  console.log(error);
}
}
const navigateSobreNosotros=()=>{
closeMenu()
const scrollTop = window.innerHeight * 1.15; // 20% de la altura de la ventana
  window.scrollTo({
    top: scrollTop,
    behavior: 'smooth' 
  });
}
const navigateServicios=()=>{
  closeMenu()
  const scrollTop = window.innerHeight * 2.56; // 20% de la altura de la ventana
    window.scrollTo({
      top: scrollTop,
      behavior: 'smooth' 
    });
  }
  const navigateContacto=()=>{
    closeMenu()
    const scrollTop = window.innerHeight * 0.18; // 20% de la altura de la ventana
      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth' 
      });
    }
  return (
    <>
      {/* Navbar */}
      <div className="w-full  z-50 flex px-[2rem] lg:gap-4 lg:px-[2rem] 2xl:px-[5rem] h-[15%] lg:h-[17%] py-[1rem] bg-[black] items-center justify-between">
        <Anchor to="/" className=" w-[45%] lg:w-[12%]">
          <img
            className="w-full"
            src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/freelance%2FLogo%20Luxor%20Horizontal.png?alt=media&token=b40f25bc-786c-4b8c-87b5-0c2071c1f27f"
            alt="Logo"
          />
        </Anchor>
        <div className="w-[88%] hidden montserrat 2xl:gap-[5rem] lg:gap-7 lg:flex items-center text-[1.1rem] text-[#EA570E] font-bold justify-end">
          <Anchor to="/">Inicio</Anchor>
          <Anchor onClick={navigateSobreNosotros}>Sobre nosotros</Anchor>
          <Anchor onClick={navigateServicios}>Nuestros servicios</Anchor>
          <Anchor onClick={navigateContacto}>Contáctanos</Anchor>
          <div className="border-solid border-[2px] border-[white] rounded-[10px] flex justify-center items-center py-[1rem] px-[1rem]">
          <a target="_blank" href="https://wa.link/p8yp5z">+54 9 11 2400-1758</a>
        </div>
        </div>
        <div className="lg:hidden flex px-[0.5rem] py-[0.5rem] rounded-[10px] border-white border-solid border-[2px]">
          <button onClick={openMenu} className="">
          <svg class="w-8 h-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
          </svg>
          </button>
        </div>
      </div>

      {/* Body */}
      <div className='w-full h-auto pt-[2rem] lg:pt-[2rem] 2xl:pt-[2rem] pb-[2rem] items-center bg-contain flex bg-[url("https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/freelance%2FPatrones%20(4).png?alt=media&token=b6f4ed8e-13fd-4759-a309-56c53c124f3d")] flex-col'>
        {/* Sección 1 - Contáctanos */}
        <div className="lg:w-[80%] w-[90%] items-center  h-auto  bg-[#f4f4f4] flex flex-col ">
          <div className="w-full h-[25vh]  lg:h-[30vh] lg:px-0   bg-cover flex items-center justify-center relative bg-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tienda-elgestormx.appspot.com/o/fondo-terminos-y-condiciones.jpg?alt=media&token=5fe4dec4-aefd-4ad6-8797-af8e9d86307b')]">
            <div className="bg-[#F59111] absolute lg:w-auto w-[80%]  text-white font-bold lg:text-[1.5rem] text-center py-[1rem]  px-[1rem]">
              <p className="montserrat">Dejá tu consulta o pedí un presupuesto</p>
            </div>
          </div>
          <div className="w-[80%] px-[1rem] py-[4rem]">
            <form>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label font-semibold">
                  Nombre completo:
                </label>
                <input
                  ref={inputNombre}
                  onChange={captureNombre}
                  type="text"
                  className="form-control"
                  id="fullName"
                  aria-describedby="nameHelp"
                  placeholder="Escribe tu nombre"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label font-semibold">
                  Correo electrónico:
                </label>
                <input
                  ref={inputCorreo}
                  onChange={captureCorreo}
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Tu correo electrónico para contactarte"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label font-semibold">
                  Mensaje:
                </label>
                <textarea
                  ref={inputMensaje}
                  onChange={captureMensaje}
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Escribe tu consulta aquí ..."
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button onClick={enviar} type="submit" className="px-[1rem] py-[0.5rem] rounded-[5px] text-white font-semibold bg-[#F59111]">
                  Enviar consulta
                </button>
              </div>
            </form>
          </div>
          <div className='w-full h-[25vh] lg:h-[30vh] bg-cover bg-center items-center flex justify-center relative bg-[url("https://vidriosyespejosmanizales.com/images/310529-vidrios-los-angeles-banner.jpg")]'>
            <div className="bg-[#F59111] absolute lg:w-auto w-[80%]   text-white font-bold text-center lg:text-[1.5rem] py-[1rem] px-[1rem]">
              <p className="montserrat">Lo que nos distingue en el mercado</p>
            </div>
          </div>
          <div className="w-full flex lg:flex-row flex-col lg:gap-0 gap-4 bg-white py-[2rem] lg:py-[5rem] px-[1rem]">
            <div class=" gap-2 flex items-center flex-col w-full lg:w-[25%] px-[1.5rem]">
              <svg
                class="w-10 h-10 text-[black]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                  clip-rule="evenodd"
                />
              </svg>
              <h6 class="card-subtitle mb-2 text-center text-[black]">
                Material de Alta Calidad
              </h6>
              <p class="card-text text-center">
                Nos especializamos en ofrecer material de calidad en nuestros
                trabajos.
              </p>
            </div>
            <div class=" gap-2 flex items-center flex-col w-full lg:w-[25%] px-[1.5rem]">
              <svg
                class="w-10 h-10 text-[black]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667"
                />
              </svg>
              <h6 class="card-subtitle text-center mb-2 text-[black]">
                Precios Competitivos
              </h6>
              <p class="card-text text-center">
                Obtén el mejor presupuesto del mercado.
              </p>
            </div>

            <div class=" gap-2 flex items-center flex-col w-full lg:w-[25%] px-[1.5rem]">
              <svg
                class="w-10 h-10 text-[black]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                  clip-rule="evenodd"
                />
              </svg>

              <h6 class="card-subtitle text-center mb-2 text-[black]">
                Entrega responsable
              </h6>
              <p class="card-text text-center">
                Coordinamos la entrega y garantizamos nuestra puntualidad para
                un servicio más satisfactorio.
              </p>
            </div>

            <div class=" gap-2 flex items-center flex-col w-full lg:w-[25%] px-[1.5rem]">
              <svg
                class="w-10 h-10 text-[black]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
                  clip-rule="evenodd"
                />
              </svg>

              <h6 class="card-subtitle mb-2 text-center text-[black]">
                Asesoría Profesional
              </h6>
              <p class="card-text text-center">
                Nuestro equipo está aquí para ayudarte a elegir lo que realmente
                necesitas.
              </p>
            </div>
          </div>
          <div className='w-full h-[25vh] lg:h-[30vh] bg-cover flex items-center justify-center relative bg-[url("https://bitool.co/assets/imagesTarjetasPersonales/6545/605bfa5410aa665b9eea6e1cc6bb9f0cd2a47751a186f.jpg")]'>
            <div className="bg-[#F59111] absolute lg:w-auto w-[80%]  text-white font-bold text-center lg:text-[1.5rem] py-[1rem] px-[1rem]">
              <p className="montserrat">Nuestros servicios</p>
            </div>
          </div>
          <div className="w-full flex lg:flex-row flex-col">
            <div className="lg:w-[50%] w-full justify-center flex flex-col py-[2rem] gap-4 px-[1rem] lg:px-[2rem]">
              <p className="lg:text-[1.5rem] text-[1.3rem] font-semibold montserrat">Nos especializamos en la instalación de:</p>
              <div className="flex flex-col gap-2 text-[1rem]">
                  <p>📌 Mamparas</p>
                  <p>📌 Ventanas</p>
                  <p>📌 Ventanales</p>
                  <p>📌 Persianas</p>
                  <p>📌 Puertas</p>
                  <p>📌 Mosquiteros</p>
                  <p>📌 Puertas corredizas</p>
                  <p>📌 Cortinas roller y mucho más...</p>
                  
              </div>
            </div>
          <div className="lg:w-[50%] w-full lg:px-[4rem] px-[1rem] py-[1rem] lg:py-[2rem]">
          <Carousel  showStatus={false} showArrows={true} className=' bg-[white] w-full' showThumbs={false} autoPlay infiniteLoop>
        <img className='w-full ' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/fotos%20de%20paginas%20freelance%2FCortina%20(1).png?alt=media&token=94b36bd3-b7c3-4728-abff-e32cf5004652" />
        <img className='w-full ' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/fotos%20de%20paginas%20freelance%2FCortina%20(5).png?alt=media&token=81260df7-ca41-4bf8-ae48-d60d181d2aad" />
        <img className='w-full ' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/fotos%20de%20paginas%20freelance%2FMampara%20(5).png?alt=media&token=a36fdc00-5fb0-44e0-8204-dde776c75c2b" />
        <img className='w-full ' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/fotos%20de%20paginas%20freelance%2FMampara%20(9).png?alt=media&token=6ef16efd-ef0d-4e4a-9e44-b068d1f93178" />
        <img className='w-full ' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/fotos%20de%20paginas%20freelance%2FPersiana%20(1).png?alt=media&token=2eb97020-a793-4e86-a3ba-63babdb401f9" />
        <img className='w-full ' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/fotos%20de%20paginas%20freelance%2FPersiana%20(5).png?alt=media&token=f8ad8e73-98ea-4268-bf8a-76b6b5570b8a" />
        <img className='w-full ' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/fotos%20de%20paginas%20freelance%2FPuerta%20(1).png?alt=media&token=c1cec28a-bf5b-4e85-990d-05023b542394" />
        <img className='w-full ' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/fotos%20de%20paginas%20freelance%2FPuerta%20(4).png?alt=media&token=6c1427aa-7565-4599-b2a1-404128302267" />
        <img className='w-full ' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/fotos%20de%20paginas%20freelance%2FVentanal%20(7).png?alt=media&token=1ed24c98-c788-431a-91fa-bb9a2e00b587" />
        <img className='w-full ' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/fotos%20de%20paginas%20freelance%2FVentanal%20(8).png?alt=media&token=20cf8628-1dd9-4a7e-bf6d-b3ee284ac1de" />
        </Carousel>
          </div>
          </div>
        </div>

        {/* Sección 2 - Nuestros servicios */}
      </div>
      {/* whatsapp flotante */}
      <div className="fixed items-end bottom-[5%] gap-2 hidden lg:flex z-0 right-[0%]">
        <p className="text-black py-[0.3rem] text-[1.1rem] px-[0.5rem] bg-[white] font-semibold rounded-[10px]">Chateá con nosotros</p>
        <a href="https://wa.me/+541124001758">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="90"
            height="90"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fff"
              d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
            ></path>
            <path
              fill="#fff"
              d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
            ></path>
            <path
              fill="#cfd8dc"
              d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
            ></path>
            <path
              fill="#40c351"
              d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
            ></path>
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      {/* FOOTER */}
      <div className="bg-[black] w-full z-50  gap-4 flex flex-col justify-between ">
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-2 text-center justify-between lg:px-[4rem] py-[2rem] items-center">
          <img
            className="w-[9rem]"
            src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/freelance%2FLogo%20Luxor_A%2002.png?alt=media&token=1b8e0915-6872-47ab-a029-f57edfbdff8e"
            alt="Logo"
          />
      <div className="flex flex-col gap-2 items-center justify-center text-white">
            <div className="flex flex-col ">
              <p className="text-[1.2rem] underline">Días y horarios de atención</p>
              <p>Lun-vier 9hrs-17hrs</p>
              <p>Sab 10hrs-14hrs</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[1.2rem] underline">Dirección</p>
              <a target="_blank" className="flex gap-1 items-center" href="https://g.co/kgs/cGx96zf"><svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
</svg>

              <p>Av. Córdoba 4318-CABA</p></a>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center text-white">
            <p className="text-[1.2rem]">Visitá nuestras redes sociales</p>
            <div className="flex gap-2">
              <div className="flex flex-col items-center gap-2">
              <a target="_blank" href="https://www.facebook.com/profile.php?id=61557169453941&mibextid=ZbWKwL">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
              </a>
              <p className="text-white text-[0.8rem] underline">Aberturas Luxor</p>
              </div>
              <div className="flex flex-col items-center gap-2">
              <a target="_blank" href="https://www.instagram.com/aberturas.luxor?igsh=cTRndGd2cmV3ODEx">
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                  cx="19.38"
                  cy="42.035"
                  r="44.899"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fd5"></stop>
                  <stop offset=".328" stop-color="#ff543f"></stop>
                  <stop offset=".348" stop-color="#fc5245"></stop>
                  <stop offset=".504" stop-color="#e64771"></stop>
                  <stop offset=".643" stop-color="#d53e91"></stop>
                  <stop offset=".761" stop-color="#cc39a4"></stop>
                  <stop offset=".841" stop-color="#c837ab"></stop>
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                  cx="11.786"
                  cy="5.54"
                  r="29.813"
                  gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#4168c9"></stop>
                  <stop
                    offset=".999"
                    stop-color="#4168c9"
                    stop-opacity="0"
                  ></stop>
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <path
                  fill="#fff"
                  d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                ></path>
                <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                <path
                  fill="#fff"
                  d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                ></path>
              </svg>
              </a>
              <p className="text-white text-[0.8rem] underline">@aberturas.luxor</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:flex-row flex-col text-white  bg-[#343434] py-[0.5rem] justify-center gap-2 flex">
          <p className="lg:flex hidden">Diseñado por</p>
          <a className="lg:flex hidden" href="">Saeta design®</a>
          <p className="lg:flex hidden">-</p>
          <p className="lg:flex hidden">todos los derechos reservados 2024</p>
          <div className="lg:hidden flex gap-2 justify-center text-center">
          <p className="">Diseñado por</p>
          <a className="underline" href="https://wa.me/541130026676">Saeta design®</a>
          </div>
          <div className="lg:hidden flex  justify-center text-center">
          <p className="">todos los derechos reservados 2024</p>
          </div>
        </div>
      </div>
      {/* ESTO ES EL MENU */}
      {menu === true && (
       <div className="z-50 flex flex-col absolute  top-0 right-0 bg-[black] w-[80%] h-[180vh]">
          <div className="w-full flex py-[2rem] justify-end px-[1rem]">
          <button onClick={closeMenu}>
          <svg class="w-8 h-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
          </svg>
          </button>
        </div>
          <div className="flex flex-col px-[1rem] justify-end text-end gap-4 text-white text-[1.1rem]">
            <a href="/" className="flex text-end gap-2 items-center justify-end">
            <p>Inicio</p>
            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>
</svg>

            </a>
            <a onClick={navigateSobreNosotros} className="flex text-end gap-2 items-center justify-end">
              <p>Sobre Nosotros</p>
              <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
                </svg>
            </a>
            <a onClick={navigateServicios} className="flex text-end gap-2 items-center justify-end">
              <p>Nuestros Servicios</p>
                <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z" clip-rule="evenodd"/>
                </svg>
            </a>
            <a onClick={navigateContacto} className="flex text-end gap-2 items-center justify-end">
              <p>Contáctanos</p>
            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
              </svg>
            </a>
            <a href="https://wa.me/+541124001758" className="flex text-end gap-2 items-center justify-end">
            <p>Chateá con nosotros </p>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fff"
              d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
            ></path>
            <path
              fill="#fff"
              d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
            ></path>
            <path
              fill="#cfd8dc"
              d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
            ></path>
            <path
              fill="#40c351"
              d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
            ></path>
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
              clip-rule="evenodd"
            ></path>
          </svg>
              
            </a>
          </div>
        </div>
       
      )}
    </>
  );
}
