import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { Character as CharacterType } from "../Characters/Characters";
import { redirect } from "react-router-dom";

const getAllCharacters = async (id:string) => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  
    return data
  };
  

const Character = () => {
    const { id } = useParams <{id: string}>()   //!!!!!!!!!!
    const navigate = useNavigate();
    
    const { data, isLoading } = useQuery<CharacterType>(["oneCharacters", id],() => getAllCharacters(id!)); // !!!!!!


    if (isLoading){
        return <h1>Loading ...</h1>;
    }
    
    if (!data){    
        navigate('/')
        return null;
    }

    const {name, image} = data

  return (
    <div>
      <img src={image} alt="" width={300} />
      <h1>{name}</h1>
    </div>
  );
};

export default Character;
