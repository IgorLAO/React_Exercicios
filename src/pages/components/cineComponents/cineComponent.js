    import './cineComponent.scss'
    import React from "react"
    import ImageZoom from "react-image-zooom";

const CineComponent = (item) =>{

    return(
        <div className='table' >
                <div className='linhaLista'>
                  <span className='codigo'> <b>{item.imdbID}</b> </span>
                  <span className='title'> {item.Title} </span>
                  <span className='ano'> {item.Year}
                    <div className='imagem' >

                      <ImageZoom src={item.Poster} zoom="160" className='imag' />

                    </div>

                  </span>

                </div>

              </div>
    )
}

export default CineComponent