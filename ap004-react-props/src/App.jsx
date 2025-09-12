import Pedido from "./Pedido"
import Hippo from "./Hippo"
import Animal from "./Animal"
import Cartao from "./Cartao"

const App = () => {
    return(
        <div className="container">
            <div className="row">
                    <div className="col-12">

                        <Cartao 
                        cabecalho="Família de animais peculiar" >
                        <Hippo 
                          tamanho="4" />
                           <Hippo 
                            tamanho="3"
                            espelhamento="horizontal " />
                          <Hippo 
                            tamanho="2"
                            espelhamento="horizontal " />
                          <Hippo 
                            tamanho="2"
                            espelhamento="horizontal " />
                          <Animal
                            tipo="cat"
                            tamanho="4"/>
                          <Animal
                            tipo="cat"
                            tamanho="3"
                            espelhamento= "horizontal"/>
                          <Animal
                            tipo="cat"
                            tamanho="2"
                            espelhamento= "horizontal"/>
                          <Animal
                            tipo="cat"
                            tamanho="2"
                            espelhamento= "horizontal"/>
                        </Cartao>
                    </div>
            </div>
            <div className="row">

                <div className="col-sm-12 col-md-6 col-xl-3">
                    <Pedido 
                      data="14/09/2025"
                      icone="car"
                      titulo="Carro"
                      descricao="Porsche Amarelo"/>
                </div>

                <div className="col-sm-12 col-md-6 col-xl-3">
                    <Pedido 
                      data="12/09/2025"
                      icone="tractor"
                      titulo="Trator"
                      descricao="Trator Amarelo"/>
                </div>

                <div className="col-sm-12 col-md-6 col-xl-3">
                    <Pedido 
                    data="15/09/2025"
                    icone="house"
                    titulo="Casa"
                    descricao="Casa amarela"/>
                </div>

                <div className="col-sm-12 col-md-6 col-xl-3">
                    <Pedido 
                    data="15/09/2025"
                    icone="computer"
                    titulo="Computador"
                    descricao="Computador Amarelo"/>
                </div>

            </div>
            </div>
    )
}

export default App