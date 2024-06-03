import "./ListaOpciones.css"
const ListaOpciones = (props) => {

    /* Método map -> arreglo.map( (equipo, index)=>{
        return <option></option>

    } ) */

    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value)
    }


    return <div className="ListaOpciones">
        <label>Equipos</label>
        <select
            value={props.valor}
            onChange={manejarCambio}>
            <option
                value=""
                disabled
                defaultValue=""
                hidden>
                Selccionar equipo
            </option>
            {props.equipo.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones