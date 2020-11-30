const Viz = require('viz.js');
const { Module, render } = require('viz.js/full.render.js');

const reg = /(\s*)(```) *(viz|dot) *(engine=\w*|) *\n?([\s\S]+?)\s*(\2)(\n+|$)/g;

function ignore(data) {
  let source = data.source;
  let ext = source.substring(source.lastIndexOf('.')).toLowerCase();
  return ['.js', '.css', '.html', '.htm'].indexOf(ext) > -1;
}

function renderVizTag(args, content) {
  // console.info("get viz arg=" + args);
  // console.info("get viz content=" + content);
  var userEngine = "dot";
  if (args.length > 0) {
    var params=args[0].split("=");
    if (params.length == 2) {
      userEngine = params[1];
    }
  }

  let viz = new Viz({ Module, render });
  return viz.renderString(content, {engine:userEngine});
}

hexo.extend.tag.register('viz', (args, content) => {
  return renderVizTag(args, content);
},{
  async: true,
  ends: true
}
);

hexo.extend.tag.register('dot', (args, content) => {
  return renderVizTag(args, content);
},{
  async: true,
  ends: true
}
);

hexo.extend.filter.register('before_post_render', (data) => {
  if (!ignore(data)) {
      data.content = data.content
          .replace(reg, (raw, start, startQuote, lang, engine, content, endQuote, end) => {
              return start + '{% viz ' + engine + '%}' + content + '{% endviz %}' + end;
          });
  }
}, 9);
