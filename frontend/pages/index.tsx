import Image from 'next/image'
import PageHeading from '../components/PageHeading'

export default function Home() {
  return (
    <div className="flex flex-col m-auto laptop:max-w-[60%] py-2">
      {/* flex flex-col gap-6 m-auto */}
      <PageHeading>NFT Paper</PageHeading>
      <h2 className="text-center pb-3 font-extrabold text-2xl text-blue-500">This is a prototype for the NFT Paper</h2>
      <div className="flex justify-center	">
        <Image src="/assets/images/nft.jpg" width={800} height={533} alt="Picture of the author"></Image>
      </div>
    </div>
  )
}
