import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// Components
import CustomNavbar from "./components/navbar";
import HeroContainer from "./containers/hero-container";


class App extends React.Component {
    render() {

        let navLinks = [
            {
                name: "Portfolio",
                link: "http://google.com"
            },
            {
                name: "About",
                link: "http://ebaumsworld.com"
            },
            {
                name: "Contact",
                link: "http://reddit.com"
            }
        ];
        let heroes = [
            {
                name: "Thor",
                messages: [
                    "You’re big. I’ve fought bigger.",
                    "You people are so petty, and tiny.",
                    "You should know that when you betray me, I will kill you.",
                    "Your ancestors called it magic and you call it science. Well, I come from a place where they’re one in the same thing."
                ],
                imagelink: "http://i2.download.fd.pchome.net/t_960x600/g1/M00/0F/19/oYYBAFVZmxaIWWvEAAg5zXqLzN8AACfPAEBGb8ACDnl457.jpg"
            },
            {
                name: "Hulk",
                messages: [
                    "Hulk... SMASH!",
                    "Puny human!",
                    "HULK IS NOT AFRAID...HULK IS STRONGEST ONE THERE IS!!! ",
                    "Hulk smash and bash!!!"
                ],
                imagelink: "https://i.ytimg.com/vi/hQMtZL7y18U/maxresdefault.jpg"
            },
            {
                name: "Batman",
                messages: [
                    "It's not who I am underneath, but what I do that defines me",
                    "Everything's impossible until somebody does it.",
                    "Sometimes it's only madness that makes us what we are.",
                    "Our greatest glory is not in never falling, but in rising every time we fall",
                    "All men have limits. They learn what they are and learn not to exceed them. I ignore mine.",
                    "Superman’s not brave. You can’t be brave if you’re indestructible. It’s every day people, like you and me, that are brave, knowing we could easily be defeated, but still continue forward."
                ],
                imagelink: "http://img.cinemablend.com/cb/d/3/1/d/6/9/d31d696881fbf9fe0e9800a6af80de6d2de696babcfa2790f5b8d585da18d0af.jpg"
            },
            {
                name: "Wonder Woman",
                messages: [
                    "You are stronger than you believe. You have greater powers than you know.",
                    "It's about what you believe. And I believe in love. Only love will truly save the world.",
                    "Who you are is more difficult when the truth has been revealed. I learnt this the hard way, a long, long time ago.",
                    "I will fight for those who cannot fight for themselves."
                ],
                imagelink: "http://screenrant.com/wp-content/uploads/2017/06/Wonder-Woman-Movie-Sexism-Feminism.jpg"
            },
            {
                name: "Spiderman",
                messages: [
                    "Whatever life holds in store for me, I will never forget these words: ‘With great power comes great responsibility.’ This is my gift, my curse. Who am I? I’m Spider-Man.",
                    "Go web! Fly! Up, up and away web! Shazaam! Go! Go! Go web, go! …Tally ho!",
                    "I’m back! I’m back!… My back. My back….",
                    "No man can win every battle, but no man should fall without a struggle!"
                ],
                imagelink: "https://pmcvariety.files.wordpress.com/2014/04/08-spider-man-2002.jpg?w=670&h=377&crop=1"
            },
            {
                name: "Iron Man",
                messages: [
                    "I told you, I don't want to join your super-secret boy band.",
                    "Well, performance issues, it's not uncommon. One out of five...",
                    "Heroes are made by the paths they choose, not the powers they are graced with.",
                    "I am, Iron Man."
                ],
                imagelink: "https://www.sideshowtoy.com/photo.php?sku=902708"
            },
            {
                name: "Dr. Manhattan",
                messages: [
                    "You're my only remaining link to the world.",
                    "I feel fear, for the last time. ",
                    "A live body and a dead body contain the same number of particles. Structurally there's no discernible difference.",
                    "Life and Death are unquantifiable abstracts. Why should I be concerned?"
                ],
                imagelink: "http://1.bp.blogspot.com/-nPg7p0SsNeE/TgkJBWUZfXI/AAAAAAAAAgc/EiZpW6GllMs/s1600/dr-manhattan.jpg"
            },
            {
                name: "Wolverine",
                messages: [
                    "You might remember that 'annoyed' is my natural state.",
                    "Haven't met anybody who's invulnerable to a well-planted elbow in the groin",
                    "I'm the best there is at what I do but what I do best isn't very nice.",
                    "Sometimes, when you cage the beast, the beast gets angry."
                ],
                imagelink: "http://uproxx.files.wordpress.com/2016/02/hugh-jackman-wolverine.jpg?quality=100&w=650"
            }
        ];

        return (
            <div>
                <CustomNavbar brand="Super Hero" links={navLinks}/>

                <div className="container-fluid heroDisplay">
                    <div className="row">
                        <HeroContainer data={heroes}/>
                    </div>
                </div>

            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));