import About from "./sections/home/AboutHome.jsx"
import CTA from "./sections/home/CTA.jsx"
import FeaturesHome from "./sections/home/FeaturesHome.jsx"
import GetStarted from "./sections/home/GetStarted.jsx"

export default function Home(){
    
    return (
    <>
        <FeaturesHome/>
        <GetStarted/>
        <About/>
        <CTA/>
    </>);
}