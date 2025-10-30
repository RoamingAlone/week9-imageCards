import ImageCard from './ImageCard';

function App() {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '20px',
    justifyItems: 'center',
  };

  const images = [
    {
      url: 'https://picsum.photos/300/200?1',
      title: 'Morning Dew',
      description: 'A serene morning scene.',
      author: 'Jane Smith',
      datetime: '2025-10-20',
    },
    {
      url: 'https://picsum.photos/300/200?2',
      title: 'Urban Light',
      description: 'City lights at dusk.',
      author: 'John Doe',
      datetime: '2025-10-21',
    },
    {
      url: 'https://picsum.photos/300/200?3',
      title: 'Ocean Breeze',
      description: 'Waves hitting the shore.',
      author: 'Lisa Ray',
      datetime: '2025-10-22',
    },
    {
      url: 'https://picsum.photos/300/200?4',
      title: 'Autumn Path',
      description: 'Leaves covering the forest trail.',
      author: 'Mark Lee',
      datetime: '2025-10-23',
    },
    {
      url: 'https://picsum.photos/300/200?5',
      title: 'Night Sky',
      description: 'Stars above the mountain.',
      author: 'Emily Chen',
      datetime: '2025-10-24',
    },
    {
      url: 'https://picsum.photos/300/200?6',
      title: 'Golden Hour',
      description: 'Sunset over the valley.',
      author: 'Alex Park',
      datetime: '2025-10-25',
    },
  ];

  return (
    <div style={containerStyle}>
      {images.map((img, index) => (
        <ImageCard
          key={index}
          url={img.url}
          title={img.title}
          description={img.description}
          author={img.author}
          datetime={img.datetime}
        />
      ))}
    </div>
  );
}

export default App;
