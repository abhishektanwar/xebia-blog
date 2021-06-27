import '../../src/index.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom' 
import Resume from './Resume';
import Blogs from './Blogs';
import BlogDetail from './BlogDetail';
import CreateBlog from './CreateBlog';
import Navbar from './Navbar';
import { useState } from 'react';
function App() {
  const [isSearch,setIsSearch] = useState(false)
  const [searchedBlog,setSearchedBlog] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Navbar /> */}
          <Route exact path="/" >
            <Resume />
          </Route>
          <Route exact path="/blogs">
            <Blogs isSearch={isSearch} setIsSearch={setIsSearch} setSearchedBlog={setSearchedBlog} searchedBlog={searchedBlog} />
          </Route>
          <Route exact path="/blogs/:id">
            <BlogDetail />
          </Route>
          <Route exact path="/create-blogs">
            <CreateBlog />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
