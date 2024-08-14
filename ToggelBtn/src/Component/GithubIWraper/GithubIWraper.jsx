import search from "../../assets/Images/search.svg"
import Oval from "../../assets/Images/Oval.png"
import Location from "../../assets/Images/Location.svg"
import link from "../../assets/Images/link.svg"
import Twitter from "../../assets/Images/Twitter.svg"
import office from "../../assets/Images/office.svg"
import "./GithubIWraper.css";

function GithubIWraper() {
  return (
    <>
      <div id="container">
        <div className="search">
          <div className="Text">
            <img src={search} />
            <input type="text" placeholder="Search GitHub username…" />
          </div>
          <div className="searchbtn"> search </div>
        </div>
        <div className="githubinfo">
          <div className="userinfo">
            <div className="personalinfo">
              <div>
                <img src={Oval} />
              </div>
              <div className="usertext">
                <h1>The Octocat</h1>
                <span>@octocat</span>
              </div>
            </div>
            <div className="Joined"><label>Joined 25 Jan 2011</label></div>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Donec odio. Quisque volutpat mattis eros.</p>
          </div>
          <div className="watchesinfo">
            <div className="Repos">
              <label>Repos</label>
              <span>8</span>
            </div>
            <div className="Followers">
              <label>Followers</label>
              <span>3938</span>
            </div>
            <div className="Following">
              <label>Following</label>
              <span>9</span>
            </div>
          </div>
          <div id="sociallinks">
            <div className="Topsocial">
              <div className="location">
                <img src={Location} />
                <label>San Francisco</label>
              </div>
              <div className="Twitter">
                <img src={Twitter} />
                <label>Not Available</label>
              </div>
            </div>
            <div className="bottomsocial">
              <div className="blog">
                <img src={link} />
                <label> <a href="https://github.blog" >https://github.blog</a></label>
              </div>
              <div className="office">
                <img src={office} />
                <label> @github</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GithubIWraper;