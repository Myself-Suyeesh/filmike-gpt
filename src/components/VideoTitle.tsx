interface VideoTitleProps {
  title: string;
  plot: string;
}

const VideoTitle: React.FC<VideoTitleProps> = ({ title, plot }) => {
  return (
    <div className="pt-36 flex flex-col justify-center px-24 absolute text-white bg-linear-to-r from-black w-screen h-4/5 z-10">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/4">{plot}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl hover:bg-white/75 rounded-lg cursor-pointer">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500/50 text-white p-4 px-12 text-xl rounded-lg cursor-pointer">
          ⓘ More info
        </button>
      </div>
    </div>
  );

  //   ⓘ
};

export default VideoTitle;
