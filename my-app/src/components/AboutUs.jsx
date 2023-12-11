import React from 'react'

function AboutUs(props) {
  return (
    <>
    <div className={`text-${props.mode === 'light' ? 'dark' : 'white'}`}>
        <h2 className="fw-bold fst-italic">About <span style={{color: 'red'}}>Code Master</span></h2>

        <p className="fs-5 fw-normal fst-italic">Code Master is an online community platform that provides resources for learning and practicing programming. It offers a variety of features, including:</p>
        <ul className="fw-normal">
            <li>Tutorials: Code Master offers a wide range of tutorials on a variety of programming topics, from beginner to advanced.</li>
            <li>Articles: Code Master also publishes articles on programming topics, such as new technologies, best practices, and career advice.</li>
            <li>Challenges: Code Master offers challenges that learners can complete to practice their programming skills.</li>
            <li>Community: Code Master has a community of learners and programmers who can help each other with questions and problems.</li>
        </ul>
        <p className="fs-5 fw-normal fst-italic"><span style={{color: 'red'}}>Code Master</span> is a free resource, but it also offers premium memberships that provide additional features, such as access to exclusive tutorials and challenges.</p>

        <p className="fs-5 fw-normal fst-italic">Code Master is a great resource for anyone who wants to learn to code, regardless of their experience level. It offers a variety of features that can help learners learn and practice programming skills, and it has a community of learners and programmers who can help each other with questions and problems.</p>
        
        <h4 className="fw-normal fst-italic">Benefits of using <span style={{color: 'red'}}>Code Master</span></h4>
        <ul className="fw-normal">
            <li>Learn at your own pace: Code Master offers a variety of learning resources, so you can learn at your own pace and focus on the topics that you are most interested in.</li>
            <li>Practice your skills: Code Master offers challenges that you can complete to practice your programming skills.</li>
            <li>Get help from the community: Code Master has a community of learners and programmers who can help you with questions and problems.</li>
            <li>Improve your job prospects: Learning to code can improve your job prospects and make you more marketable to employers.</li>
        </ul>

        <strong className="fs-5 fw-normal fst-italic">If you are interested in learning to code, I encourage you to check out <span style={{color: 'red'}}>Code Master</span>. It is a great resource for learners of all levels.</strong>
    </div>
    </>
  )
}

export default AboutUs
