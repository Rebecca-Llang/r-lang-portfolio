const Video = () => {
  return (
    <video
      controls
      controlsList="nodownload"
      poster="/images/donatemate-poster.png"
      preload="metadata"
      className="w-full"
      aria-label="DonateMate project showcase video"
      title="DonateMate - Project Showcase Video"
    >
      <source src="/videos/DonateMate-Showcase.mp4" type="video/mp4" />
      <p>
        Your browser does not support the video tag. You can{' '}
        <a
          href="https://donatemate.pushed.nz"
          target="_blank"
          rel="noopener noreferrer"
        >
          visit the live DonateMate application
        </a>{' '}
        instead.
      </p>
    </video>
  );
};

export { Video };
