import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types'; // ES6
import { fetchArticles } from '../actions';
import ArticlesContainer from '../components/articles/ArticlesContainer';
import ArticleItem from '../components/articles/ArticleItem';
import BaseButtonComponent from '../components/common/BaseButtonComponent';

const LEFT_FOCAL = 1;
const RIGHT_FOCAL = 2;

const head = () => {
  return (
    <Helmet key={Math.random()}>
      <title>Ejercicio La Nación</title>
      <meta property="og:title" content="Front End La Nación Ejercicio" />
      <meta
        name="description"
        content="Lo último, noticias de último momento, artículos, notas, entrevistas"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="" />
    </Helmet>
  );
};

const HomePage = (props) => {
  const [expandedFocal, setExpandedFocal] = useState(null);
  const [items, setItems] = useState([]);
  // eslint-disable-next-line no-shadow
  const focalToggle = (formName, expandedFocal, setExpandedFocal) => {
    const focalToActivate = expandedFocal === formName ? null : formName;
    setExpandedFocal(focalToActivate);
  };
  const focalButtonsClickHandler = (e) => {
    const focalId = Number(e.target.id);
    focalToggle(focalId, expandedFocal, setExpandedFocal);
    handleClick();
  };
  const getRandomArticle = () => {
    const randomArticle = props.articles[Math.floor(Math.random() * props.articles.length)];
    return (
      <ArticleItem
        blueTitle={randomArticle.blueTitle}
        title={randomArticle.title}
        subhead={randomArticle.subhead}
        img={randomArticle.img}
        author={randomArticle.author}
        note={randomArticle.note}
      />
    );
  };
  const addArticle = () => {
    setItems((prevItems) => [...prevItems, getRandomArticle()]);
  };
  let articlesQty;
  const articlesQtyInput = React.createRef();
  const handleClick = () => {
    articlesQty = articlesQtyInput.current.value;
    for (let i = 0; i < articlesQty; i++) {
      addArticle();
    }
    if (articlesQty === '') {
      articlesQty = 5;
      for (let k = 0; k < articlesQty; k++) {
        addArticle();
      }
    }
  };
  return (
    <main>
      {head()}
      <section>
        <div className={`input-container ${expandedFocal !== null ? 'hide' : ''}`}>
          <label htmlFor="articlesQty">
            Indique cantidad de artículos a crear (si no ingresa valor, se crearán artículos
            random)
          </label>
          <input
            type="number"
            id="articlesQty"
            ref={articlesQtyInput}
            pattern="[0-9]*"
            placeholder=" Ej: 2, 5, etc."
          />
          <br />
          <BaseButtonComponent
            onClickHandler={focalButtonsClickHandler}
            type="submit"
            className="left-focal-btn"
            id={LEFT_FOCAL}
            buttonText="Focal Izquierdo"
          />
          <BaseButtonComponent
            onClickHandler={focalButtonsClickHandler}
            type="submit"
            className="right-focal-btn"
            id={RIGHT_FOCAL}
            buttonText="Focal Derecho"
          />
        </div>
      </section>
      <ArticlesContainer articles={items} expandedFocal={expandedFocal} size={articlesQty} />
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

const loadData = (store) => {
  return store.dispatch(fetchArticles());
};

HomePage.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.any),
};

HomePage.defaultProps = {
  articles: [],
};

export default {
  component: connect(mapStateToProps, { fetchArticles })(HomePage),
  loadData,
};
