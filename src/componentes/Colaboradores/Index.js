import "./Colaborador.css"
import { IoMdCloseCircle } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";



const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props



    return <div className="colaborador">
        <IoMdCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt="Roni Esteban" />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav === true ? <FaHeart color="#F06060" onClick={() => like(id)} /> : <FaRegHeart onClick={() => like(id)} />}
        </div>

    </div>
}

export default Colaborador 