import FeatureCard from "./FeatureCard";
import "../../features.css";

const features = [
  {
    description: "Displays your most listened songs and artists.",
    colors: ["#FF6B6B", "#FF2E2E"],
    title: ["Top Songs", " & Artists"],
  },
  {
    description: "Analyzes music to determine your mood.",
    colors: ["#DA22FF", "#9733EE"],
    title: ["Mood", " Analysis"],
  },
  {
    description: "Lists top artists and songs by popularity.",
    colors: ["#00B8B8", "#003D99"],
    title: ["Popularity", " Insights"],
  },
  {
    description: "Provides analysis of track attributes.",
    colors: ["#42E3A1", "#00B0FF"],
    title: ["Track", " Attributes"],
  },
  {
    description: "Retrieves listening history by date.",
    colors: ["#00C9FF", "#00E88C"],
    title: ["History", " Lookup"],
  },
  {
    description: "Converts liked songs to a playlist.",
    colors: ["#FFAE33", "#FF6A00"],
    title: ["Liked", " to Playlist"],
  },
  {
    description: "Creates playlists by genre, language, or mood.",
    colors: ["#1DB954", "#00E6A1"],
    title: ["Genre/Mood", " Playlists"],
  },
  {
    description: "Playlists with top 3 songs from top 10 artists.",
    colors: ["#FFD400", "#FF8F00"],
    title: ["Top Songs", " by Top Artists"],
  },
  {
    description: "Create playlists by choosing between song pairs.",
    colors: ["#00FF57", "#FF2D92"],
    title: ["Draft", " Playlist"],
  },
  {
    description: "Sorts playlists by language, genre, or mood.",
    colors: ["#B79CFF", "#9D70FF"],
    title: ["Playlist", " Sorting"],
  },
  {
    description: "Automatically updates playlists with new tracks.",
    colors: ["#DC143C", "#FF5733"],
    title: ["Auto-Refresh", " Playlists"],
  },
  {
    description: "Allows collaborative playlist creation and voting.",
    colors: ["#B8156D", "#EC1E32"],
    title: ["Collaborative", " Playlist"],
  },
  {
    description: "Offers seamless playback across devices.",
    colors: ["#FF6B6B", "#FF5733"],
    title: ["Media", " Player"],
  },
];

export default function GridFeatures() {
  return (
    <div className="features-grid">
      <div className="container">
        <h1 className="title">Insights & Analytics</h1>
        <div className="features-cards">
          {features.slice(0, 5).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <h1 className="title right">Playlist Creation</h1>
        <div className="features-cards">
          {features.slice(5, 11).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <h1 className="title">Collaboration</h1>
        <div className="features-cards">
          {features.slice(11, 12).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <h1 className="title right">Media Playback</h1>
        <div className="features-cards">
          {features.slice(12).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
