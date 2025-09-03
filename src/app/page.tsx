import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Banner/>
      <div className="px-15 py-12">
        <div id="sobre">
          <p>Sobre mim</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illum totam cupiditate exercitationem, adipisci optio ad numquam rem iste quibusdam odio in perferendis expedita quasi molestiae deleniti neque accusantium omnis.</p>
        </div>
      </div>
    </div>
  );
}
