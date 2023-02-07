import { useQuery } from "react-query";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const getAllCharacters = async () => {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");

  return data;
};



interface Location {
    name: string
    url: string
}

interface Origin {
    name: string
    url: string
}

export type Character = {
  created: string;
  episode: string[];
  gender: "Mail" | "Female";
  id: number;
  image: string;
  location: Location;
  name: string;
  origin: Origin
  species: string;
  status: "Alive" | "Dead" | "unknown";
  type: string;
  url: string;
};

type AllCharactersResponse = {
    info: {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null,
    },
    results: Character[]
}

const Characters = () => {
    let [searchParams, setSearchParams] = useSearchParams();

  const [nextPageLink, setNextPageLink] = useState("");
  const { data, isLoading } = useQuery<AllCharactersResponse>("allCharacters", getAllCharacters);

    console.log('nextPageLink', nextPageLink)

  if (isLoading) {
      return <h1>Loading ...</h1>;
    }
    
    if (!data) {
        throw Error("Something went wrong");
    }
    
    const {info, results: characters}  = data

     return (
        <div>
      <h1>This is Characters</h1>
      <br />
      <br />
      <button onClick={() => {
        const pageParam = info.next?.split("?")[1] || ""
        setSearchParams(pageParam)
      }}>
        Next
        </button>
      <div className="characters">
        {characters.map(({ id, image, name }) => (
            <Link to={`/character/${id}`} key={id}>
          <div>
            <img src={image} className="container__image" alt="" />
            <h4>{name}</h4>
          </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Characters;
