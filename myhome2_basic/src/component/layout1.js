import { Outlet } from "react-router-dom";

function Layout1() {
    return (
        <div>
            {/* 화면상단에 고정할것  Outlet태그에 컴포넌트출력 */ }
            <nav>
                <ul><li>메뉴1</li></ul>
            </nav>

            <Outlet/>{/* 컴포넌트가 출력되는 위치*/}

           <footer>
            저작권에 나한테 있음 
            </footer>          
        </div>
    );
}

export default Layout1;