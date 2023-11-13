import React ,{useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/LazyLoadImage/Img";
 
  const HeroBanner = () => {
  const [background , setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url }= useSelector((state) => state.home);

  const {data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    if (data && data.results && data.results.length > 0) {
      const bg = url.backdrop +data?.results?.[Math.floor(Math.random() * data.results.length)]?. backdrop_path;
      setBackground(bg);
    }
  }, [data]);


  const searchQueryHandler =(event) =>{
    if(event.key ==="Enter"&& query.length > 0){
      navigate(`/search/${query}`);
    } 
   };
  return (
    <div className ="heroBanner">
      { !loading && <div className="backdrop-img">
        <Img src ={background}/>
      </div>}
      <ContentWrapper>

        <div className ="heroBannerContent">
          <span className ="title">
            welcome
          </span>

          <div className="searchInput">
            <input type="text" placeholder ="search for a movie ar tv show..."
            onChange={(e)=> setQuery(e.target.value)}
             onKeyUp={searchQueryHandler}/>
            <button>search</button>
          </div>

        </div>
     
      </ContentWrapper>
      </div>
  )
}

export default HeroBanner
