import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h1 className="text-2xl font-bold">
        Boilerplate code for your Nextjs project with Tailwind CSS
      </h1>
    </Main>
  );
};

export default Index;
