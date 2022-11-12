import Image from "next/image";
import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import HeaderIcon from "../components/HeaderIcon";


export default function Header() {
  return (
    <div>
        <div className="">
            <HeaderIcon Icon={HomeIcon} title="Home"/>
            <HeaderIcon Icon={UserIcon} title="Acount"/>
            <HeaderIcon Icon={PhoneIcon} title="Contant"/>
            <HeaderIcon Icon={InformationCircleIcon} title="About"/>
        </div>
        <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
            width={100}
            height={100}
        />
    </div>
  )
}
