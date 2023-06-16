export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="grid grid-cols-2 gap-8 bg-black">
        <div className="relative flex">
          <div className="absolute rounded-full"></div>
        </div>
        <div>
          <h3 className="text-3xl font-light text-white">
            Ajustes de Iluminação
          </h3>
        </div>
      </div>
    </div>
  )
}
