import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination"
const  PageSlides = ({data}) => {
    return ( 
<Swiper modules={[Pagination]} spaceBetween={0}
                    slidesPerView={1} pagination={{ clickable: true }} onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')} >
                    {
                        data.map(
                            (data, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <article key={i}>
                                            <h5>{data.name}</h5>
                                            <img className="avatar" src={data.img} alt={` ${data.name}`} />
                                            <p>{data.text}</p>
                                        </article>
                                    </SwiperSlide>
                                )
                            }
                        )
                    }
                </Swiper>
     )
}
 
export default PageSlides;