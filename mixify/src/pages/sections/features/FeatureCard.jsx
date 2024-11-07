export default function FeatureCard(feature) {
  return (
    <div className="feature-card">
      <div
        className="cover"
        style={{
          background: `linear-gradient(${feature.colors[0]}, ${feature.colors[1]})`,
        }}
      >
        <div className="content">
          <div className="title-1">{feature.title[0]}</div>
          <div className="line"></div>
          <div className="title-2">{feature.title[1]}</div>
        </div>
      </div>
      <div className="description">{feature.description}</div>
    </div>
  );
}
