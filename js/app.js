(() => {
  const Header = props => {
    const DOM = React.DOM;
    return DOM.header(null, DOM.h1(null, props.titulo),
      DOM.p(null, props.parrafo));
  };

 /*  const Header = props => {
    return React.createElement('header', null,
      React.createElement('h1', null, props.titulo),
      React.createElement('p', null, props.parrafo));
  }; */

  ReactDOM.render(
    Header({
      titulo: 'Getting Started',
      parrafo: 'Descripción'
    }),
    document.getElementById('header')
  );
})();

(() => {
  const Article = props => {
    const DOM = React.DOM;
    
    return DOM.article({ key: props.id },
      DOM.h3(null, props.titulo),
      DOM.p(null, props.parrafo),
      DOM.hr(null));
  };

  /* const Article = props => {
    return React.createElement('article', { key: props.id },
      React.createElement('h3', null, props.titulo),
      React.createElement('p', null, props.parrafo),
      React.createElement('hr'));
  }; */

  const Section = props => {
    const DOM = React.DOM;
    const title = DOM.h2(null, props.title);
    const options = {
      style: style = {
        width: '70%',
        float: 'left'
      },
      id: 'main'
    };

    const articles = props.articles.map(element => Article(element));

    return DOM.section(options, title, articles);
  };

  /* const Section = props => {
    const title = React.createElement('h2', null, props.title);
    const options = {
      style: {
        width: '70%',
        float: 'left'
      },
      id: 'main'
    };

    const articles = props.articles.map(element => Article(element));

    return React.createElement('section', options, title, articles);
  }; */

  const obj = {
    title: 'Main Section',
    articles: [
      {
        id: 'qwe',
        titulo: 'Titulo 1',
        parrafo: 'Descripcion 1'
      },
      {
        id: 'qwer',
        titulo: 'Titulo 2',
        parrafo: 'Descripcion 2'
      },
      {
        id: 'qwet',
        titulo: 'Titulo 3',
        parrafo: 'Descripcion 3'
      },
    ]
  };

  ReactDOM.render(
    Section(obj),
    document.getElementById('section')
  );
})();

(() => {
  const Aside = props => {
    const DOM = React.DOM;
    const title = DOM.h4(null, props.title);
    options = {
      style: {
        width: '25%',
        float: 'right'
      }
    };

    const links = props.links.map((element, index) => DOM.li({key: index}, DOM.a({href: '#'}, element)));

    return DOM.aside(options, title, DOM.ul(null, links));
  };

  /* const Aside = props => {
    const title = React.createElement('h4', null, props.title);
    options = {
      style: {
        width: '25%',
        float: 'right'
      }
    };

    const links = props.links.map((element, index) => {
      return React.createElement(
        'li',
        {key: index},
        React.createElement('a', {href: '#'}, element));
    });

    return React.createElement('aside', options, 
      title, React.createElement('ul', null, links));
  }; */

  const obj = {
    title: 'Links',
    links: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5']
  };

  ReactDOM.render(
    Aside(obj),
    document.getElementById('aside')
  );
})();
