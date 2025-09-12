const Animal = function({tipo, tamanho, espelhamento}) {
    return (
        <i className={`fa-solid fa-${tipo} fa-${tamanho}x fa-flip-${espelhamento}`}></i>
    )
}

export default Animal