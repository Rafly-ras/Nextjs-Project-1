import Image from "next/image";
import DataImage from '@/public/data';
import HeroInfo from "@/components/HeroInfo";

export default function Home() {
  return (
    <>
      {/* Title*/}
      <div className="py-20">
        <h1 className="sm:text-6xl/tight text-5xl/tight sm:text-center text-left">
          Tingkatkan Gaya Hidup Anda <br /> Bersama Kami
        </h1>
      </div>
      {/* Title*/}

      {/* Hero Image*/}
      <div className="max-w-5xl mx-auto relative">
        <Image src={DataImage.Hero} alt="Hero Image" priority/>

        <HeroInfo />
      </div>
      {/* Hero Image*/}

      {/* Layanan */}
      <div>
        <div>
          <i className="ri-money-dollar-circle-fill"></i>
          <p>Memberikan Harga Terbaik</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur, 
            odio quibusdam a repellendus velit?</p>
        </div>
      </div>
      {/* Layanan */}
    </>
  );
}
