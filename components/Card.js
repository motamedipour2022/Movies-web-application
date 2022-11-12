import Image from "next/image";
import {ThumbUpIcon} from "@heroicons/react/outline";

export default function Card({result}) {
  const BASE_URL = "http://image.tmdb.org/t/p/original";   
  return (
        <div>
            <Image
             layout="responsive" src={BASE_URL + result.backdrop_path} width={200} height={100}/>
            <div>
                <p className="truncate">{result.overview}</p>
                <h2>{result.title || result.name}</h2>
                <p>
                  {result.release_date || result.first_air_date}
                  <ThumbUpIcon className="h-5" />
                  {result.voit_count}
                </p>
                
            </div>
        </div>
  )
}
