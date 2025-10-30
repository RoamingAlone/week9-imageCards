function ImageCard({ url, title, description, author, datetime }) {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    margin: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  };

  const imgStyle = {
    width: '100%',
    borderRadius: '10px',
  };

  return (
    <div style={cardStyle}>
      <img src={url} alt={title} style={imgStyle} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Author:</strong> {author}</p>
      <p><em>{datetime}</em></p>
    </div>
  );
}

export default ImageCard;
