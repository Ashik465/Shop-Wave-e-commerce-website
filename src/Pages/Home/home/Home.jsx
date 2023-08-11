import { Feature } from "../feature/Feature";
import Header from "../header/Header";
import Products from "../products/Products";


const Home = () => {
    return (
        <>
           <Header></Header>
           <Products></Products>
           <Feature></Feature>
        </>
    );
};

export default Home;