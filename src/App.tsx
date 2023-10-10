/* eslint-disable @typescript-eslint/no-explicit-any */
import MasonryLayout from './masonry-layout'

function App() {
  const itemList: any[] = [
    { src: 'https://placehold.co/600x300' },
    { src: 'https://placehold.co/600x200' },
    { src: 'https://placehold.co/600x100' },
    { src: 'https://placehold.co/600x400' },
    { src: 'https://placehold.co/600x600' },
    { src: 'https://placehold.co/600x500' },
    { src: 'https://placehold.co/600x400' },
    { src: 'https://placehold.co/600x200' },
    { src: 'https://placehold.co/600x300' },
    { src: 'https://placehold.co/600x200' },
    { src: 'https://placehold.co/600x300' },
    { src: 'https://placehold.co/600x400' },
  ];

  return (
    <section className="bg-[#18181b] w-[100%] min-h-[100vh] flex items-center justify-center">
      <MasonryLayout
        itemList={itemList}
        columnLengthMd={3}
        columnLengthSm={2}
        columnLengthXs={1}
      />
    </section>
  )
}

export default App
