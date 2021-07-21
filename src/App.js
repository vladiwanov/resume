import Header from './components/Header';
import Footer from './components/Footer';
// import Test from './components/Test';
import Body from './components/Body';

function App() {
  const headerStyle = {
    backgroundColor: '#636363',
  };
  return (
    <>
      <section style={headerStyle} className={`section ${'header'}`}>
        <div className={`container`}>
          {/* <Test /> */}
          <Header />
        </div>
      </section>
      <section className={'section'}>
        <div className={'container'}>
          <Body />
          <Footer />
        </div>
      </section>
    </>
  );
}
export default App;
