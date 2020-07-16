import React, { Component } from 'react';
import Link from 'next/link';
import { getAllPosts } from '../../api/modules/blog';
import Moment from 'react-moment';
import { withTranslation } from 'react-i18next';

const POST_PER_PAGE = 10;

export class BlogGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
      totalPost: 0,
      totalPage: 0,
      currentPage: 1,
    };
  }

  async componentDidMount() {
    await this.goToPage(this.state.currentPage);
  }

  async goToPage(page) {
    try {
      this.setState({ currentPage: page });
      const response = await getAllPosts(POST_PER_PAGE, page);
      this.setState({
        isLoaded: true,
        posts: response.data,
        totalPost: response.headers['x-wp-total'],
        totalPage: response.headers['x-wp-totalpages'],
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error,
      });
    }
  }

  goToPreviousPage() {
    let { currentPage } = this.state;
    if (currentPage > 1) {
      this.goToPage(currentPage - 1);
      this.setState({ currentPage: currentPage - 1 });
    }
  }

  goToNextPage() {
    let { currentPage, totalPage } = this.state;
    if (currentPage < totalPage) {
      this.goToPage(currentPage + 1);
      this.setState({ currentPage: currentPage + 1 });
    }
  }

  generatePosts(posts) {
    return posts.map((post) => (
      <div className="col-lg-4 col-md-6" key={post.id}>
        <div className="single-blog-post">
          <div className="blog-image">
            <Link href="/blog-details">
              <a>
                <img src={post.featured_img_url} alt="image" />
              </a>
            </Link>

            {post.tags.length > 0 && (
              <div className="post-tag">
                <Link href="#">
                  <a>{post.tags[0]?.tag_name}</a>
                </Link>
              </div>
            )}
          </div>

          <div className="blog-post-content">
            <span className="date">
              <Moment format="DD/MM/YYYY">{new Date(post.date)}</Moment>
            </span>
            <h3>
              <Link href="/blog-details">
                <a
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                ></a>
              </Link>
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: `${post.excerpt.rendered.substr(0, 80)}...`,
              }}
            ></p>

            <Link href="/blog-details">
              <a className="read-more-btn">
                {this.props.t('blog.readMore')}{' '}
                <i className="icofont-double-right"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    ));
  }

  generatePaginationArea() {
    return (
      <div className="col-lg-12 col-md-12">
        <div className="pagination-area">
          <a
            className="prev page-numbers"
            onClick={() => this.goToPreviousPage()}
          >
            <i className="fas fa-angle-double-left"></i>
          </a>
          {this.generatePaginator()}
          <a className="next page-numbers" onClick={() => this.goToNextPage()}>
            <i className="fas fa-angle-double-right"></i>
          </a>
        </div>
      </div>
    );
  }

  generatePaginator() {
    let { totalPage, currentPage } = this.state;
    let items = [];
    for (let i = 1; i <= totalPage; i++) {
      let className = 'page-numbers';
      if (currentPage === i) {
        className += ' current';
      }
      items.push(
        <span className={className} key={i} onClick={() => this.goToPage(i)}>
          {i}
        </span>
      );
    }
    return items;
  }

  render() {
    const { error, isLoaded, posts } = this.state;
    let blogBody;
    if (error) {
      blogBody = <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      blogBody = <div>Loading...</div>;
    } else {
      blogBody = [this.generatePosts(posts), this.generatePaginationArea()];
    }
    return (
      <section className="news-area ptb-60">
        <div className="container">
          <div className="row">{blogBody}</div>
        </div>
      </section>
    );
  }
}

export default withTranslation()(BlogGrid);
