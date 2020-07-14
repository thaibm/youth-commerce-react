import React, { Component } from 'react';
import Link from 'next/link';
import { getAllPosts } from '../../api/modules/blog';
import Moment from 'react-moment';
import { withTranslation } from 'react-i18next';

export class BlogGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await getAllPosts();
      this.setState({
        isLoaded: true,
        posts: response.data,
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error,
      });
    }
  }

  generatePost(posts) {
    console.log(this.props.t('blog.readMore'));

    return (
      <div className="row">
        {posts.map((post) => (
          <div className="col-lg-4 col-md-6" key={post.id}>
            <div className="single-blog-post">
              <div className="blog-image">
                <Link href="/blog-details">
                  <a>
                    <img src={require('../../images/blog1.jpg')} alt="image" />
                  </a>
                </Link>

                <div className="post-tag">
                  <Link href="#">
                    <a>Technology</a>
                  </Link>
                </div>
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
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
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
        ))}

        <div className="col-lg-12 col-md-12">
          <div className="pagination-area">
            <Link href="#">
              <a className="prev page-numbers">
                <i className="fas fa-angle-double-left"></i>
              </a>
            </Link>

            <Link href="#">
              <a className="page-numbers">1</a>
            </Link>

            <span className="page-numbers current" aria-current="page">
              2
            </span>

            <Link href="#">
              <a className="page-numbers">3</a>
            </Link>

            <Link href="#">
              <a className="page-numbers">4</a>
            </Link>

            <Link href="#">
              <a className="next page-numbers">
                <i className="fas fa-angle-double-right"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { error, isLoaded, posts } = this.state;
    let blogBody;
    if (error) {
      blogBody = <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      blogBody = <div>Loading...</div>;
    } else {
      blogBody = this.generatePost(posts);
    }
    return (
      <section className="news-area ptb-60">
        <div className="container">{blogBody}</div>
      </section>
    );
  }
}

export default withTranslation()(BlogGrid);
