import { CardPortfolio,  Link, Titulo } from "./styles";
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
import { useMainContext } from "../../../context/MainContext";
import Projeto from "../../../types/Projeto";

interface IPortfolio {
  ref: React.MutableRefObject<null>
}

const ProjetosDev = (Props: IPortfolio) => {
  const { projetos, descricao } = useMainContext();
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
    <>
      <Titulo>Projetcs</Titulo>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {projetos.map((item: Projeto)=> {
        return (
          <SwiperSlide>
          <Link 
          href={item.url}
          target="_blank"
          >
            <CardPortfolio>
              {item.nome}
            </CardPortfolio>
          </Link>
      </SwiperSlide>
        )
      })}
      
      ...
    </Swiper>
    </>
  );
};

export default ProjetosDev;
