import React, { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import { PiListHeartFill } from "react-icons/pi";
import { MdSkipNext } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import "./VideoPlayer.css";

const Player = () => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const skipNextTooltipRef = useRef(null);
  const [showControls, setShowControls] = useState(true);
  const [state, setState] = useState({
    data: null,
    episodeUrl: null,
    id: null,
    parsedUrls: [],
    selectedSeason: null,
    view: "season",
    url: null,
    showEpisodeList: false,
    currentEpisodeId: null,
    nextEpisode: null,
    movieTitle: "",
  });

  // Helper to find the next episode
  const findNextEpisode = (currentId) => {
    if (!state.parsedUrls.length) return null;

    const currentSeason = state.selectedSeason || state.parsedUrls[0];
    const currentEpisodeIndex = currentSeason.episodes.findIndex(
      (episode) => episode.id === currentId
    );

    return currentSeason.episodes[currentEpisodeIndex + 1] || null;
  };

  // Function to handle skipping to the next episode
  const skipToNextEpisode = () => {
    setState((prev) => {
      if (!prev.currentEpisodeId) return prev;

      const currentSeason = prev.selectedSeason || prev.parsedUrls[0];
      const currentEpisodeIndex = currentSeason.episodes.findIndex(
        (episode) => episode.id === prev.currentEpisodeId
      );

      const nextEpisode = currentSeason.episodes[currentEpisodeIndex + 1];
      if (!nextEpisode) return prev; // No next episode available

      const urlPath = window.location.pathname;
      const pathSegments = urlPath.split("/");
      pathSegments[pathSegments.length - 1] = nextEpisode.id;
      const newUrl = pathSegments.join("/");

      window.history.pushState({}, "", newUrl);

      if (videoRef.current) {
        videoRef.current.src = nextEpisode.url;
        videoRef.current.load();
        videoRef.current.play();
      }

      const upcomingEpisode = currentSeason.episodes[currentEpisodeIndex + 2] || null;

      return {
        ...prev,
        episodeUrl: nextEpisode.url,
        currentEpisodeId: nextEpisode.id,
        nextEpisode: upcomingEpisode,
      };
    });
  };

  // Function to handle episode selection
  const onEpisodeSelect = (episode) => {
    const urlPath = window.location.pathname;
    const pathSegments = urlPath.split("/");
    pathSegments[pathSegments.length - 1] = episode.id;
    const newUrl = pathSegments.join("/");

    window.history.pushState({}, "", newUrl);

    const currentSeason = state.selectedSeason || state.parsedUrls[0];
    const currentEpisodeIndex = currentSeason.episodes.findIndex(
      (ep) => ep.id === episode.id
    );
    const nextEpisode = currentSeason.episodes[currentEpisodeIndex + 1] || null;

    setState((prev) => ({
      ...prev,
      url: episode.url,
      episodeUrl: episode.url,
      currentEpisodeId: episode.id,
      showEpisodeList: false,
      nextEpisode: nextEpisode,
    }));

    if (videoRef.current) {
      videoRef.current.src = episode.url;
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  // Fetch and parse data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlPath = window.location.pathname;
        const pathSegments = urlPath.split("/");

        const seriesId = pathSegments[pathSegments.length - 2];
        const episodeId = pathSegments[pathSegments.length - 1];

        let response;

        if (urlPath.startsWith("/tvshow")) {
          response = await fetch(
            `https://dashboard.ucqire.com/api/by-id-series?id=${seriesId}`
          );
        } else if (urlPath.startsWith("/movie")) {
          response = await fetch(
            `https://dashboard.ucqire.com/api/by-id-movie?id=${episodeId}`
          );
        }

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }

        const result = await response.json();
        const fetchedData = result[0];

        let episodeUrl = null;
        let urlsData = [];

        if (urlPath.startsWith("/tvshow")) {
          urlsData =
            typeof fetchedData.urls === "string"
              ? JSON.parse(fetchedData.urls)
              : fetchedData.urls;

          if (Array.isArray(urlsData)) {
            episodeUrl =
              urlsData
                .flatMap((season) => season.episodes)
                .find((episode) => episode.id === parseInt(episodeId))?.url ||
              null;
          }
        } else if (urlPath.startsWith("/movie")) {
          episodeUrl = fetchedData.url;
        }

        console.log(fetchedData);

        setState((prev) => ({
          ...prev,
          url: fetchedData.url,
          data: fetchedData,
          id: seriesId,
          parsedUrls: urlsData,
          episodeUrl,
          currentEpisodeId: parseInt(episodeId),
          nextEpisode: findNextEpisode(parseInt(episodeId)),
          movieTitle: fetchedData.title_eng || "Untitled",
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Initialize player and add custom controls
  useEffect(() => {
    if (!state.data) return;

    playerRef.current = new Plyr(videoRef.current, {
      controls: [
        "play-large",
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "captions",
        "settings",
        "pip",
        "airplay",
        "fullscreen",
      ],
      tooltips: { controls: true },
    });

    // Listen for Plyr control events to show/hide navigation
    playerRef.current.on('controlshidden', () => setShowControls(false));
    playerRef.current.on('controlsshown', () => setShowControls(true));

    if (window.location.pathname.startsWith("/tvshow")) {
      addCustomControlButton("Heart", PiListHeartFill, () => {
        setState((prev) => {
          const selectedSeason =
            prev.parsedUrls.find((season) =>
              season.episodes.some(
                (episode) => episode.id === prev.currentEpisodeId
              )
            ) || prev.parsedUrls[0];

          return {
            ...prev,
            selectedSeason,
            view: "episodes",
            showEpisodeList: !prev.showEpisodeList,
          };
        });
      });
      addCustomControlButton("Skip Next", MdSkipNext, skipToNextEpisode);
    }

    return () => playerRef.current?.destroy();
  }, [state.data]);

  // Update the tooltip content when `currentEpisodeId` changes
  useEffect(() => {
    if (skipNextTooltipRef.current) {
      const nextEpisode = findNextEpisode(state.currentEpisodeId);
      skipNextTooltipRef.current.textContent = nextEpisode
        ? nextEpisode.title
        : "No next episode";
    }
  }, [state.currentEpisodeId, state.parsedUrls]);

  // Helper to add custom control buttons
  const addCustomControlButton = (label, Icon, onClick) => {
    const controlsContainer = document.querySelector(".plyr__controls");
    if (!controlsContainer) return;

    const button = document.createElement("button");
    button.className = `plyr__control custom-${label.toLowerCase()}-button`;
    button.setAttribute("aria-label", label);
    button.innerHTML = ReactDOMServer.renderToString(
      <Icon style={{ width: "28px", height: "28px" }} />
    );
    button.onclick = onClick;

    if (label === "Skip Next") {
      const tooltip = document.createElement("div");
      tooltip.className = "custom-skip-next-tooltip";
      skipNextTooltipRef.current = tooltip;
      button.appendChild(tooltip);

      button.onmouseenter = () => {
        tooltip.style.opacity = "1";
      };
      button.onmouseleave = () => {
        tooltip.style.opacity = "0";
      };
    }

    const volumeControl = controlsContainer.querySelector(".plyr__volume");
    controlsContainer.insertBefore(button, volumeControl);
  };

  return (
    <div className="video-player">
      {/* Back icon and movie title with dynamic hiding */}
      <div className={`top-navigation ${showControls ? '' : 'hidden'}`}>
        <FaArrowLeft
          style={{
            color: 'white',
            cursor: 'pointer',
            fontSize: '24px',
          }}
          onClick={() => window.location.href = "/"}
        />
        <span style={{ color: 'white', marginLeft: '10px', fontSize: '18px' }}>
          {state.movieTitle}
        </span>
      </div>

      <video ref={videoRef} className="plyr-react plyr" controls>
        <source src={state.url || state.episodeUrl} type="video/mp4" />
        {!state.url && !state.episodeUrl && <p>Loading video...</p>}
      </video>

      {/* Render episode list */}
      {state.showEpisodeList && (
        <div className="episode-modal">
          {state.view === "season" ? (
            <SeasonList
              seasons={state.parsedUrls}
              onSeasonSelect={(season) =>
                setState({ ...state, selectedSeason: season, view: "episodes" })
              }
            />
          ) : (
            <EpisodeList
              season={state.selectedSeason}
              onBack={() => setState({ ...state, view: "season" })}
              onEpisodeSelect={onEpisodeSelect}
              currentEpisodeId={state.currentEpisodeId}
            />
          )}
        </div>
      )}
    </div>
  );
};

// Season list component
const SeasonList = ({ seasons, onSeasonSelect }) => (
  <div className="season-list">
    <p>Select a Season</p>
    <ul>
      {seasons.map((season, index) => (
        <li key={index} onClick={() => onSeasonSelect(season)}>
          Season {season.season_title}
        </li>
      ))}
    </ul>
  </div>
);

// Episode list component with selection functionality
const EpisodeList = ({ season, onBack, onEpisodeSelect, currentEpisodeId }) => (
  <div className="episode-list">
    <button onClick={onBack}>Back</button>
    <h3>Season {season.season_title}</h3>
    <ul>
      {season.episodes.map((episode) => (
        <li
          key={episode.id}
          onClick={() => onEpisodeSelect(episode)}
          className={episode.id === currentEpisodeId ? "active-episode" : ""}
        >
          {episode.title}
        </li>
      ))}
    </ul>
  </div>
);

export default Player;
