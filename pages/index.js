import Head from 'next/head';

const dynamicScript = `
  var s = document.createElement('script');
  s.innerHTML = "console.log('_index log')";
  document.head.appendChild(s);
`;

const Index = () => {
  return (
    <>
      <Head>
        <title>Index title</title>
        <script dangerouslySetInnerHTML={{ __html: dynamicScript }} />
        <meta name="theme-color" content="#ff6868"/>
      </Head>
      <div>Hello world</div>
    </>
  );
}

export default Index;
