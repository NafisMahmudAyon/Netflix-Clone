import Billboard from "@/components/Billboard";
import Navbar from "@/components/Navbar";
import Video from "@/components/Video";


export default function Home() {
  return (
    <>
      {/* <h1 className="m-10 text-2xl text-green-500">Netflix Clone</h1> */}
      <Navbar />
      <Billboard />
      <Video />
    </>
  )
}
