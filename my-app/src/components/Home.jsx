import React from "react";


export default function Home(props) {
    return (
        <>
            <div className={`text-${props.mode === 'light' ? 'black' : 'white'}`}>
                
            <h2 className="fst-italic">Welcome to <span style={{color: 'red'}}>Code Master</span> !</h2>

            <h5 className="fw-bold fst-italic fs-4 my-3">Code Master - Your One-Stop Shop for Web Development Resources</h5>

            <p className="fs-5 fw-normal fst-italic"><span style={{color: 'red'}}>Code Master</span> is a website and online community that provides resources for learning and practicing programming. It offers a variety of features, including tutorials, articles, challenges, and a community of learners and programmers who can help each other with questions and problems.</p>

            <p className="fs-5 fw-bold fst-italic">Learn everything you need to know to become a web developer, from HTML and CSS to JavaScript and Python.</p>

            <p className="fs-5 fst-italic">Get started today with our free tutorials!</p>

            <h5>Featured Tutorials by <span style={{color: 'red'}}>Code Master</span></h5>
            <ul className="fw-normal">
                <li>HTML and CSS Crash Course</li>
                <li>JavaScript for Beginners</li>
                <li>Python for Web Development</li>
                <li>How to Build a Website with WordPress</li>
                <li>10 Tips for Becoming a Better Web Developer</li>
            </ul>

            <p className="fs-5 fw-normal fst-italic">Whether you are a beginner or an experienced programmer, Code Master has something for you. Here are just a few of the things you can do on <span style={{color: 'red'}}>Code Master</span></p>
            <ul className="fw-normal">
                <li>Learn to code from scratch: Code Master offers a variety of tutorials on a variety of programming topics, from beginner to advanced.</li>
                <li>Practice your skills: Code Master offers challenges that you can complete to practice your programming skills.</li>
                <li>Get help from the community: Code Master has a community of learners and programmers who can help you with questions and problems.</li>
                <li>Improve your job prospects: Learning to code can improve your job prospects and make you more marketable to employers.</li>
            </ul>

            <strong className="fs-5 fw-normal fst-italic">We are excited to have you join the <span style={{color: 'red'}}>Code Master</span> community! We are here to help you learn and practice programming, and to achieve your programming goals.</strong>

            </div>

        </>
    );
}
