import HomePage from "./Pages/Home";
import BlogsPage from "./Pages/Blogs";
import BlogPage from "./Pages/Blog";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from "./Pages/Groups/NavBar";


function App() {
  return (
    <>
        <Router>
            <NavBar/>
            <div style={{margin: 20}}>
                <Switch>
                    <Route exact from='/'>
                        <HomePage/>
                    </Route>

                    <Route exact path='/blogs'>
                        <BlogsPage/>
                    </Route>

                    <Route exact path='/about'>
                        <AboutPage/>
                    </Route>

                    <Route exact path='/contact'>
                        <ContactPage/>
                    </Route>

                    <Route path='/blog/:id'>
                        <BlogPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    </>
  );
}

export default App;
