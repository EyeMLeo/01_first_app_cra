import './App.css';

// react componentas

function Logo() {
  return(
    <div className="container">
      <div className="logo"><h2>LOGO</h2></div>
    </div>
  )
  }

function Header() {
return(
  <div className="hero">
    <div className="container">
      <Nav />
    </div>
  </div>
)
}

function Nav(){
  return(
    <nav>
    <ul>
      <li>Home</li>
      <li>Product</li>
      <li>Company</li>
      <li>Contact</li>
    </ul>
  </nav>
  )
}

function Hero() {
  return(
    <header>
      <div className="container">
        <h2>hero IMG</h2>
      </div>
    </header>
  )
  }

  function Main() {
    return(
      <main>
        <div className="container">
          <MainArticle />
          <MainArticle />
          <MainArticle />
        </div>
      </main>
    )
    }

    function MainArticle() {
      return(
        <section>
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure, voluptates tempore qui doloremque accusamus magnam aut error nemo nostrum!</p>
        </section>
      )
      }


    function Footer() {
      return(
        <footer>
          <div className="container">
            <section>
              <h2>Content</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae voluptate ab minima nemo sit, reprehenderit porro voluptatibus tempora inventore fuga ea accusantium dolor a quia, vel perspiciatis! Minima, velit repellat.</p>
              <h3>Content</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolorem iste facere doloremque alias dolore, rerum consequuntur amet dicta sint nam exercitationem iure autem fugiat quas recusandae non suscipit rem excepturi mollitia facilis, reiciendis culpa asperiores. Deleniti molestias numquam quo.</p>
            </section>
            <div className="footerNavigation">
              <h3>Navigation</h3>
              <Nav />
            </div>
          </div>
        </footer>
      )
      }


function App() {

  return (
    <div className='App'>

       {/* <Logo /> */}
        <Logo />

      {/* <Header /> */}
      <Header />


      {/* <Hero /> */}
      <Hero />

      {/* <Main /> */}
      <Main />

      {/* <Footer /> */}
      <Footer />

    </div>
  );
}

export default App;