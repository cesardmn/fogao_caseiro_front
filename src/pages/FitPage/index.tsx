import React from 'react'

import './styles.css'

import Header from '../../components/Header'

import cardImg from '../../assets/img/logo_fundo.png'


function FitPage() {
  return (
    <div id="fit">

      <Header />

      <div className="top-page">
        <h1 className="title" >Refeições Fit</h1>
        <h3 className="information" >Refeição individual (embalagem de 500ml).</h3>
      </div>

      <div className="content">
        <div className="hot-cards">

          <h2>Destaques</h2>

          <div className="cards">

            <div className="card">


              <img src={cardImg} alt="" />


              <p>
                Carne louca desfiada com molho de tomate e cebola, legumes com especiarias e arroz integral.
            </p>


              <div className="price">
                <div className="sale">
                  <span>R$ </span> <span>112,90</span>
                </div>
                <div className="full">
                  <span>R$ </span> <span>1.1115,00</span>
                </div>
              </div>

            </div>

            <div className="card">


              <img src={cardImg} alt="" />


              <p>
                Carne louca desfiada com molho de tomate e cebola, legumes com especiarias e arroz integral.
              </p>


              <div className="price">
                <div className="sale">
                  <span>R$ </span> <span>112,90</span>
                </div>
                <div className="full">
                  <span>R$ </span> <span>1.1115,00</span>
                </div>
              </div>

            </div>

            <div className="card">


              <img src={cardImg} alt="" />


              <p>
                Carne louca desfiada com molho de tomate e cebola, legumes com especiarias e arroz integral.
            </p>


              <div className="price">
                <div className="sale">
                  <span>R$ </span> <span>112,90</span>
                </div>
                <div className="full">
                  <span>R$ </span> <span>1.1115,00</span>
                </div>
              </div>

            </div>

            <div className="card">


              <img src={cardImg} alt="" />


              <p>
                Carne louca desfiada com molho de tomate e cebola, legumes com especiarias e arroz integral.
            </p>


              <div className="price">
                <div className="sale">
                  <span>R$ </span> <span>112,90</span>
                </div>
                <div className="full">
                  <span>R$ </span> <span>1.1115,00</span>
                </div>
              </div>

            </div>

          </div>




        </div>

        <div className="list-cards">

          <div className="horizon-card">

            <img src={cardImg} alt="" />


            <div className="right">
              <p>
                Carne louca desfiada com molho de tomate e cebola, legumes com especiarias e arroz integral.
            </p>


              <div className="price">
                <div className="sale">
                  <span>R$ </span> <span>112,90</span>
                </div>
                <div className="full">
                  <span>R$ </span> <span>1.1115,00</span>
                </div>
              </div>

            </div>

          </div>

          <div className="horizon-card">

            <img src={cardImg} alt="" />


            <div className="right">
              <p>
                Carne louca desfiada com molho de tomate e cebola, legumes com especiarias e arroz integral.
              </p>


              <div className="price">
                <div className="sale">
                  <span>R$ </span> <span>112,90</span>
                </div>
                <div className="full">
                  <span>R$ </span> <span>1.1115,00</span>
                </div>
              </div>

            </div>

          </div>

          <div className="horizon-card">

            <img src={cardImg} alt="" />


            <div className="right">
              <p>
                Carne louca desfiada com molho de tomate e cebola, legumes com especiarias e arroz integral.
</p>


              <div className="price">
                <div className="sale">
                  <span>R$ </span> <span>112,90</span>
                </div>
                <div className="full">
                  <span>R$ </span> <span>1.1115,00</span>
                </div>
              </div>

            </div>

          </div>          <div className="horizon-card">

            <img src={cardImg} alt="" />


            <div className="right">
              <p>
                Carne louca desfiada com molho de tomate e cebola, legumes com especiarias e arroz integral.
</p>


              <div className="price">
                <div className="sale">
                  <span>R$ </span> <span>112,90</span>
                </div>
                <div className="full">
                  <span>R$ </span> <span>1.1115,00</span>
                </div>
              </div>

            </div>

          </div>          <div className="horizon-card">

            <img src={cardImg} alt="" />


            <div className="right">
              <p>
                Carne louca desfiada com molho de tomate e cebola, legumes com especiarias e arroz integral.
</p>


              <div className="price">
                <div className="sale">
                  <span>R$ </span> <span>112,90</span>
                </div>
                <div className="full">
                  <span>R$ </span> <span>1.1115,00</span>
                </div>
              </div>

            </div>

          </div>



        </div>
      </div>


    </div>
  )
}

export default FitPage
