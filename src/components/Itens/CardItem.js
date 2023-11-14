import "./CardItem.css"
function CardItem(props) {
    var descricao = props.descricao.map((item,i)=> <p key={i} >{item}</p>)
    return (
        <div key={props.id} className="content b my-2">
            <div className="c-image">
                <img src={props.imagem} alt="" />
            </div>
            <div className="t-n-p my-2">
                <div className="header">
                    <span className="title">{props.titulo}</span>
                    <span className="price">{props.valor}</span>
                </div>
                <div className="des my-3 ">
                    {descricao}
                </div>
            </div>
        </div>
    );
}

export default CardItem;
