import express from "express";

const app = express();

app.get("/api/userData", (req, res) => {

    const response = [
        {"login": "azaadmottan",},
        {"id": 153497984,},
        {"node_id": "U_kgDOCSYxgA",},
        {"avatar_url": "https://avatars.githubusercontent.com/u/153497984?v=4",},
        {"gravatar_id": "",},
        {"url": "https://api.github.com/users/azaadmottan",},
        {"html_url": "https://github.com/azaadmottan",},
        {"followers_url": "https://api.github.com/users/azaadmottan/followers",},
        {"following_url": "https://api.github.com/users/azaadmottan/following{/other_user}",},
        {"gists_url": "https://api.github.com/users/azaadmottan/gists{/gist_id}",},
        {"starred_url": "https://api.github.com/users/azaadmottan/starred{/owner}{/repo}",},
        {"subscriptions_url": "https://api.github.com/users/azaadmottan/subscriptions",},
        {"organizations_url": "https://api.github.com/users/azaadmottan/orgs",},
        {"repos_url": "https://api.github.com/users/azaadmottan/repos",},
        {"events_url": "https://api.github.com/users/azaadmottan/events{/privacy}",},
        {"received_events_url": "https://api.github.com/users/azaadmottan/received_events",},
        {"type": "User",},
        {"site_admin": false,},
        {"name": null,},
        {"company": null,},
        {"blog": "",},
        {"location": null,},
        {"email": null,},
        {"hireable": null,},
        {"bio": null,},
        {"twitter_username": null,},
        {"public_repos": 0,},
        {"public_gists": 0,},
        {"followers": 0,},
        {"following": 1},
        {"created_at": "2023-12-11T09:07:55Z",},
        {"updated_at": "2023-12-11T09:07:55Z"},
    ]

    setTimeout(() => {
        
        res.send(response);
    }, 4000);
});

const PORT = 8080 || 3000;

app.listen(PORT, () => {

    console.log(`App is listen on port: ${PORT}\nAddress: http://localhost:${PORT}`);
})