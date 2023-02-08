import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { Character as CharacterType } from "../Characters/Characters";

const getAllCharacters = async (id: string) => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  return data;
};

const Character = () => {
  const { id } = useParams<{ id: string }>(); //!!!!!!!!!!
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<CharacterType>(
    ["oneCharacters", id],
    () => getAllCharacters(id!)
  ); // !!!!!!

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (!data) {
    navigate("/");
    return null;
  }

  const { name, image, gender, species, status } = data;

  return (
    <div className="character">
      <img className="oneImg" src={image} alt="" width={300} />
      
        <div>
          <h1 className="character__h1">Name: {name}</h1>
          <h1 className="character__h1">Gender: {gender}</h1>
          <h1 className="character__h1">Species: {species}</h1>
        </div>
        <div className="character__wrapper">
        <div
          className={
            "myClass " +
            (status === "Alive"
              ? "circle-green"
              : status === "Dead"
              ? "circle-red"
              : "circle-orange")
          }
        ></div>
        <div>
          <h1 className="character__h1 ">Statues: {status}</h1>
        </div>
      </div>
    </div>
  );
};

export default Character;
