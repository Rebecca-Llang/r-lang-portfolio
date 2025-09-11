const Video = () => {
  return (
    <video
      controls
      controlsList="nodownload"
      poster="/images/donatemate-poster.png"
      preload="metadata"
      className="w-full rounded-lg shadow-lg"
    >
      <source
        src="/videos/2024-Dev-Academy-Showcase-DonateMate.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export { Video };
