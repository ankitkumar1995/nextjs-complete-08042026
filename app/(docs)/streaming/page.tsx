import ToolsCards from './_components/tool-cards';

const StreamingPage = () => {
  return (
    <div className='w-full min-h-screen flex justify-center  flex-col gap-24 items-center'>  
      <div>
        <h1 className='text-3xl lg:text-5xl font-bold text-center'>
          Next.js Streaming
        </h1>
      </div>
      <ToolsCards />
    </div>
  );
};

export default StreamingPage;
