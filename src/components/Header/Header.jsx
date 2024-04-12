import react from "react";
import  './Header.css';
function Header(){


    function openModal(){
        document.querySelector('.modal').style.display = 'flex'
    }



    return(
        <>
        <header>
            <h1>logo</h1>

            <div className="nav">
                <a href="">Главная</a>
                <a href="">Каталог</a>
                <a href="">О нас</a>
            </div>

            <div onClick={openModal} className="open-modal">
                открыть модалку
            </div>
        </header>
        </>
    )
}

export default Header