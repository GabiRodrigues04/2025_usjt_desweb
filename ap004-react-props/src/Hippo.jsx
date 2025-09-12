const Hippo = ({tamanho, espelhamento}) => {
    return (
        <i className={`fa-solid fa-hippo fa-${tamanho}x fa-flip-${espelhamento}`} />
    )
}

export default Hippo