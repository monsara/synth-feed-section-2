# Feed section

Layout, add adaptive styles and some JS logic for section with user profile and feed cards

Design: https://www.figma.com/file/Vc1w97I4xEftbLDujdXwrp/swivl_test?node-id=0%3A2

GitHup Page: https://monsara.github.io/synth-feed-section/

## Browser Support

New browsers — Firefox, Chrome, Opera, Microsoft Edge and IE 11, newer versions of Android/iOS, etc.

## Used techniques

### HTML/CSS

-   Valid, semantic, cross-browser layout
-   Responsive web design
-   CSS Flexbox
-   CSS Grid
-   Desktop first
-   BEM methodology
-   Sass (mixins, variables, SCSS modules)
-   Twig templates

### JavaScript features

-   Show/hide dropdowns
-   Change dropdown position on mobile screes

## Instruments

-   Git
-   Npm
-   Node.js
-   Gulp
-   Webpack
-   Chrome DevTools
-   VS Code

## Developing

### Run site locally

Before using, make sure that Gulp and Node.js are installed on your computer

To build the site on your PC, run the following commands in the terminal:

-   Clone the repository on your computer

```shell
git clone https://github.com/monsara/synth-feed-section.git
```

-   Go to the project folder

```shell
cd synth-feed-section
```

-   Install dependencies

```shell
npm install
```

-   Run dev-server and let magic happen

```shell
gulp
```

-   Bbuild project from sources

```shell
gulp build
```

-   In the browser tab go to [http://localhost:3000](http://localhost:3000)

### For dev usage example:

    {# variable example #}
    <h1>{{title}}</h1>


    {# partial example #}
    {% include "partials/_header.twig" %}

    {# mixin example #}
    {{mixins.icon('facebook')}}


    {# data usage example #}
    	{% import "data/data.twig" as tests %}

    	{% for test in tests.list %}
    	<li>{{test.title}}</li>
    	{% endfor %}
    {# end of example #}
