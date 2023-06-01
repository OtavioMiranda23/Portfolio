import { CardPortfolio, Container } from "./styles";
import { useFetch } from "../../Hook/useFetch";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CardSkills } from "../../ContentHabilidades/ContentHabilidadesDev/styles";

interface IPortfolio {
  ref: React.MutableRefObject<null>
}

const ProjetosDev = (Props: IPortfolio) => {
  // const { data: repositories, isFetching } =
  // useFetch<Repository[]>("/users/OtavioMiranda23/repos");
  return (
    // <div>
    //     {isFetching && <p>Carregando...</p>}
    //     {repositories?.map(repository => {
    //         return (
    //             <a href={repository.url}>{repository.full_name}</a>
    //         )
    //     })}
    // </div>

    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <CardPortfolio>Slide 1</CardPortfolio>
      </SwiperSlide>
      <SwiperSlide>
        <CardPortfolio>Slide 2</CardPortfolio>
      </SwiperSlide>
      <SwiperSlide>
        <CardPortfolio>Slide 3</CardPortfolio>
      </SwiperSlide>
      <SwiperSlide>
        <CardPortfolio>Slide 4</CardPortfolio>
      </SwiperSlide>
      <SwiperSlide>
        <CardPortfolio>Slide 5</CardPortfolio>
      </SwiperSlide>
      <SwiperSlide>
        <CardPortfolio>Slide 6</CardPortfolio>
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default ProjetosDev;
