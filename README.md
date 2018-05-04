#How to use

Clone this repo and then in command line type:

* `npm install` or `yarn` - install all dependencies
* `gulp` - run dev-server and let magic happen

--

## List of Gulp tasks

To run separate task type in command line `gulp [task_name]`.

### Main tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`default`          | will start all tasks required by project in dev mode: initial build, watch files, run server with livereload
`babel`       | watch js files in src/js/*, es6 transform in es2015
`sasa`        | watch scss files in src/scss/*, scss  transform in css
`browsersync` | watch changes js, css, html files and reload page

### Other tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`sass` 	         | compile .sass/.scss to .css. We also use [postcss](https://github.com/postcss/postcss) for [autoprefixer](https://github.com/postcss/autoprefixer) and [Lost](https://github.com/peterramsing/lost), so feel free to include other awesome postcss [plugins](https://github.com/postcss/postcss#plugins) when needed
`babel`            | compile [https://babeljs.io/)
`browsersync`      | run dev-server powered by [BrowserSync](https://www.browsersync.io/)


_This is a full list of tasks, that we use in our projects, but not all of them should be available in current project. For example, we only use one template engine out of these three [`jade`, `nunjucks`, `swig`]. All available tasks are placed in a folder `./gulp/tasks` as separate *.js files. Usually, file name = task name._






