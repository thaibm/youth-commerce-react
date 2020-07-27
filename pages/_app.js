import '../assets/styles/bootstrap.min.css';
import '../assets/styles/fontawesome.min.css';
import '../assets/styles/animate.min.css';
import '../assets/styles/slick.css';
import '../assets/styles/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../assets/styles/style.scss';
import '../assets/styles/responsive.scss';

import '../lang/i18n';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/store';
import { DefaultSeo } from 'next-seo';
import GoTop from '../components/Shared/GoTop';

export default withRedux(initStore)(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {},
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;

      return (
        <React.Fragment>
          <DefaultSeo
            title="Youth Commerce"
            description="Youth Commerce - React Next eCommerce Templates. This has been built with React, Next.js, Express.js, and ES6+"
            openGraph={{
              type: 'website',
              locale: 'en_IE',
              url: 'https://hangorderphapnhat.000webhostapp.com/',
              site_name: 'Youth Commerce',
            }}
          />
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
          <GoTop scrollStepInPx="50" delayInMs="10.50" />
        </React.Fragment>
      );
    }
  }
);
