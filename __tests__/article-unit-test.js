'use strict';
import test from 'tape';
import Article from '../lib/article';
import React from 'react';
import renderElement from './helpers/renderElement';


const component = <Article
  title='A Tilte'
   lead='This is a lead'
   meta='Written by Super User on 12 April 2012. Posted in Blog'
>
   This is an article
</Article>;


test('Article Component', nested => {


  nested.test('Renders component:',
    assert => {
      const article = renderElement(component).dom();

      const actualText = article.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expectedText = '<article title="A Tilte" class="uk-article">' +
        '<h1 class="uk-article-title">A Tilte</h1>' +
        '<p class="uk-article-meta">Written by Super User on 12 April 2012. Posted in Blog</p>' +
        '<p class="uk-article-lead">This is a lead</p>' +
        '<p>This is an article</p>' +
      '</article>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actualText, expectedText,
        'Correctly renders article component.');

      assert.end();
    });
});
