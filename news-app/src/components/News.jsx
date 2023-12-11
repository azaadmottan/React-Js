import React, { Component } from 'react'
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 8
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number
    }
    
    constructor() {

        super();

        this.state = {
                articles: [],
                loading: false,
                page: 1
        }
    }


    async updatePage () {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2735b9857e8435c899e74bddbc84f79&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        // console.log(this.props.country, this.props.category, this.props.pageSize);
        // console.log(this.state.page);

        this.setState({loading: true});

        let data = await fetch (url);
        let parsedData = await data.json();

        this.setState ({

            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    async componentDidMount () {
        this.updatePage();
        // this.setState({page: this.state.page + 1});
    }

    // async componentDidMount () {

    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2735b9857e8435c899e74bddbc84f79&page=1&pageSize=${this.props.pageSize}`;

    //     // console.log(this.props.country, this.props.category, this.props.pageSize);

    //     this.setState({loading: true});

    //     let data = await fetch (url);
    //     let parsedData = await data.json();

    //     this.setState ({

    //         articles: parsedData.articles,
    //         totalResults: parsedData.totalResults,
    //         loading: false
    //     });
    // }

    handlePrevClick = async () => {

        this.setState ({ page: this.state.page - 1});
        // console.log(this.state.page)
        
        this.updatePage();
    }

    handleNextClick = async () => {
        this.setState ({page: this.state.page + 1});
        // console.log(this.state.page)
        this.updatePage();
    }

    // handlePrevClick = async () => {

    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2735b9857e8435c899e74bddbc84f79&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;

    //     this.setState({loading: true});
        
    //     let data = await fetch (url);
    //     let parsedData = await data.json();
        
    //     this.setState ({
            
    //         articles: parsedData.articles,
    //         page: this.state.page - 1,
    //         loading: false
    //     });
        
    // }
    
    // handleNextClick = async () => {
        
    //     if (!(this.state.page + 1 > parseInt(Math.ceil(this.state.totalResults/this.props.pageSize)))) {
            
            
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2735b9857e8435c899e74bddbc84f79&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

    //         // let url = "./sampleNews.json";

            
    //         this.setState({loading: true});

    //         let data = await fetch (url);
    //         let parsedData = await data.json();
            
    //         this.setState ({
                
    //             articles: parsedData.articles,
    //             page: this.state.page + 1,
    //             loading: false
    //         });
    //     }
    // }
    
    render() {
        
        return (
            <>
                <div className="container my-2 py-4 rounded" style={{backgroundColor: "#eeebf7"}}>
                    <h2 className="text-center mb-4">Todays's News Headlines</h2>
                    {this.state.loading && <Spinner />}

                    <div className="row">
                        {
                            !(this.state.loading) && this.state.articles.map((element) => {
                                return (
                                    <div className="col-md-4 mb-3" key={element.url}>
                                        <NewsItems title={element.title.slice(0, 35)} description={!element.description ? "Please Click on 'Read More' button to read the news." : element.description.slice(0, 55)} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} />

                                    </div>
                                );
                            })
                        }
                    </div>

                <div className="container mt-4 d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>

                </div>
            </>
        )
    }
}
