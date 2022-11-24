
const HiddenSection = ({hidden}) => {
    return ( 
        <section style={{display: `${hidden ? "flex" :"none"}`}} className="hidden-section">
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Community</a></li>
        </section>
     )
}
 
export default HiddenSection;