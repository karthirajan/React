import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import {BrowserRouter as Router,Route , Routes} from 'react-router-dom';
import withNavigation from "./withNavigation";
import withParams from "./withParams";
import UserComponent from "./UserComponent";
import HeaderComponent from "./HeaderComponent";
import LogoutComponent from "./LogoutComponent";
import FooterComponent from "./FooterComponent.jsx";
import AuthenticatedRoute from "./AuthenticatedRoute";

function TodoApp(){
    const LoginComponentWithNavigation  = withNavigation(LoginComponent);
    const WelcomeComponentWithParams = withParams(WelcomeComponent);
    //const UpdateComponentWithParamsAndNavigation = withParams(withNavigation(UpdateComponent));
    const HeaderComponentWithNavigation  = withNavigation(HeaderComponent);
    const UserComponentWithNavigation  = withNavigation(UserComponent);
    return(
        
        <div className="todo">
            
            <Router>
                <HeaderComponentWithNavigation/>
                <Routes>
                  <Route path="/" element={<LoginComponentWithNavigation/>}/>
                  <Route path="/login" element={<LoginComponentWithNavigation/>}/>
                  <Route path="/welcome/:name" element={
                      <AuthenticatedRoute><WelcomeComponentWithParams/></AuthenticatedRoute>
                  
                  }/>
                  <Route path="/users" element={<AuthenticatedRoute><UserComponentWithNavigation/></AuthenticatedRoute>}/>
                  <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent/></AuthenticatedRoute>}/>
                  <Route path="*" element={<ErrorComponent/>}/>
                </Routes>
                <FooterComponent/>
            </Router>
        </div>
    )
}

function ErrorComponent(){
    return(
        <div className="error">
            404 not found
        </div>
    )
}

export default TodoApp;