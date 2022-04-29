
import Banner from './Component/Banner';
import Products from './Component/Allproduct';
import ShoesSection from './Component/ShoesSection';
import Shipping from './Component/Shipping';
import News from './Component/News';
import Feature from './Component/Feature';
import Newsletter from './Component/Newsletter';
import Highlights from './Component/Highlights';

export default function Home(){
    return(
        <>
        <Banner />
        <Highlights />
        <Products />
        <ShoesSection />
        <Shipping />
        <News />
        <Feature />
        <Newsletter />
        </>
    )
}