
vulcanize Boilerplate-Index.html --strip-comments --inline-scripts --inline-css > boilerplate-index.vulcanize.3.html

polymer build --js-compile --js-minify --css-minify --html-minify --bundle  --entrypoint boilerplate-index.vulcanize.3.html

