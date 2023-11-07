import { Html , useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="font-[14px] text-[#cdcdcd] font-weigth-900 mt-9">{progress.toFixed(2)}</p>
    </Html>
  )
}

export default Loader