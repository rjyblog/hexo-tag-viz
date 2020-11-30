const Viz = require('viz.js');
const { Module, render } = require('viz.js/full.render.js');

const reg = /(\s*)(```) *(viz|dot) *\n?([\s\S]+?)\s*(\2)(\n+|$)/g;

function ignore(data) {
  let source = data.source;
  let ext = source.substring(source.lastIndexOf('.')).toLowerCase();
  return ['.js', '.css', '.html', '.htm'].indexOf(ext) > -1;
}

hexo.extend.tag.register('viz', (args, content) => {
  // console.info("get viz tag " + content);
  let viz = new Viz({ Module, render });
  return viz.renderString(content);
},{
  async: true,
  ends: true
}
);

hexo.extend.filter.register('before_post_render', (data) => {
  if (!ignore(data)) {
      data.content = data.content
          .replace(reg, (raw, start, startQuote, lang, content, endQuote, end) => {
              return start + '{% viz %}' + content + '{% endviz %}' + end;
          });
  }
}, 9);
