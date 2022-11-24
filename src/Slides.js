const NormalSlides = ({data}) => {
    return ( 
        data.map(
            (data, i) => {
                return (
                        <article key={i}>
                            <h5>{data.name}</h5>
                            <img className="avatar" src={data.img} alt={` ${data.name}`} />
                            <p>{data.text}</p>
                        </article>
                )
            }
        )
     )
}
 
export default NormalSlides;