import React, { Component } from "react";
import { Link } from "react-router-dom";
import Authentication from "./Authentication";

class HeaderComponent extends Component {
  render() {

    let logged = Authentication.isUserLoggedIn();
    let username = Authentication.getLoggedUser();
    return (
      <div className="header">
        <div className="container">
          <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-success">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  CG
                </a>
                
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      {logged && <a class="nav-link active" aria-current="page" href={`/welcome/${username}`}>
                        Home
                      </a>}
                    </li>
                    <li class="nav-item">
                      {logged && <a class="nav-link" href="/users">
                        Users
                      </a>}
                    </li>
                  </ul>

                  <ul class="navbar-nav justify-content-end">
                    <li class="nav-item">
                      {!logged && <a class="nav-link active" aria-current="page" href="/login">
                        Login
                      </a>}
                    </li>
                    <li class="nav-item">
                      {logged &&<a class="nav-link" onClick={() => Authentication.removeUser()} href="/logout">
                        Logout
                      </a>}
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </div>
    );
  }
}



export default HeaderComponent;
