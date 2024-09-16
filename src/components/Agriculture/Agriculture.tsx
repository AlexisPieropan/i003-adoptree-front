import CheckIcon from '../../assets/CheckIcon.svg'
import FruitIcon from '../../assets/FruitsIcon.svg'
import PlantIcon from '../../assets/PlantsIcon.svg'
import imgAdopcion from '../../assets/imgAdopcion.png'
import imgFincas from '../../assets/imgFincas.png'
import imgNaranjas from '../../assets/imgNaranjas.png'
import imgProveedor from '../../assets/imgProveedor.png'
import './Agriculture.css';


const Agriculture: React.FC = () => {
  return (
    <div className='absolute flex-col items-center'>
      <section className='flex justify-center relative bottom-[5em]'>
        <div className='w-[200px] h-[150px] rounded-lg bg-white mr-4 flex flex-col justify-center items-center shadow-2xl'>
          <span className='text-[#FF9900] Typography'>Adopta</span>
          <p className='text-[#1F1E17]'>Naranjos en adopción</p>
          <img className='w-[90px] rounded-lg' src={imgAdopcion}/>
        </div>
        <div className='w-[200px] h-[150px] rounded-lg bg-white mr-4 flex flex-col justify-center items-center shadow-2xl'>
          <span className='text-[#FF9900] Typography'>Compra</span>
          <p className='text-[#1F1E17]'>Directo del proveedor</p>
          <img className='w-[90px] rounded-lg' src={imgProveedor} />
        </div>
        <div className='w-[200px] h-[150px] rounded-lg bg-white mr-4 flex flex-col justify-center items-center shadow-2xl'>
          <span className='text-[#FF9900] Typography'>Disfruta</span>
          <p className='text-[#1F1E17]'>Visita nuestras fincas</p>
          <img className='w-[90px] rounded-lg' src={imgFincas}/>
        </div>
      </section>
      <section className='flex py-8 mb-[10em] max-lg:flex-col max-lg:items-center'>
        <section className='w-[50%] mr-4 flex flex-col justify-center items-center'>
        <img className='w-[500px]' src={imgNaranjas}/>
        </section>
        <section className='w-[50%] max-lg:w-[100%] max-lg:ml-16 max-lg:mt-16'>
        <span className='text-[#FF9900] text-[20px] Typography'>Crowdfarming</span>
        <h2 className='text-[#1F1E17] text-5xl font-bold w-[60%] mb-8 max-lg:w-[100%]'>La agricultura del siglo XXI</h2>
        <h3 className='text-[#4BAF47] text-xl font-bold mb-4'>Ecológica y sostenible</h3>
        <p className='text-[#878680] w-[75%] mb-4 max-lg:w-[90%] max-lg:mb-8'>Las adopciones de árboles nos permiten cultivar nuestros campos de forma ecológica y regenerativa. Decimos "regenerative" porque buscamos que nuestras prácticas agrícolas no solo mantengan, sino que mejoren nuestros ecosistemas: los suelos, los insectos, la energía que usamos y el agua que empleamos.</p>
        <div className='mb-4 flex items-center max-lg:mb-8'>
          <div className='flex items-center w-[30%]'>
          <img className='w-[64px]' src={FruitIcon}/>
          <p className='text-[#1F1E17] text-lg font-bold'>Compra fruta fresca</p>
          </div>
          <div className='flex items-center w-[30%]'>
          <img className='w-[64px]' src={PlantIcon}/>
          <p className='text-[#1F1E17] text-lg font-bold'>No usamos agrotóxicos</p>
          </div>
        </div>
        <div className='mb-4 max-lg:mb-8'>
          <div className='flex'>
            <img className='w-[16px] mr-4' src={CheckIcon}/>
            <p className='text-[#1F1E17] font-semibold'>Cultivamos de forma ecológica para mejorar nuestros sistemas.</p>
          </div>
          <div className='flex'>
            <img className='w-[16px] mr-4' src={CheckIcon}/>
            <p className='text-[#1F1E17] font-semibold'>Regeneramos el suelo, cuidamos los insectos y optimizamos el use de agua y energía.</p>
          </div>
        </div>
        <button className='bg-[#4BAF47] text-white w-[196px] h-[60px] border-none hover:bg-[#3B8838]'>Descubre más</button>
        </section>
      </section>
    </div>
  );
};

export default Agriculture;