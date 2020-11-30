# hexo-tag-viz

Use [Vis.js](https://github.com/mdaines/viz.js) to render [GraphViz](http://www.graphviz.org/) dot format graphs.

# Usage
1. Install
    ```bash
    npm install https://github.com/rjyblog/hexo-tag-viz.git
    ```
2. Code block with `viz` or `dot` notation will be rendered by [Vis.js](https://github.com/mdaines/viz.js).
    <div style="border:1px dotted black; background-color: #F2F3F4; padding: 5px;">
        &#96;&#96;&#96; viz <br>
        digraph { <br>
            A -> {B; C; D} <br>
        } <br>
        &#96;&#96;&#96;
    </div>
    or
    <div style="border:1px dotted black; background-color: #F2F3F4; padding: 5px;">
        {% viz %}<br>
        digraph { <br>
            A -> {B; C; D} <br>
        } <br>
        {% endviz %}
    </div>

    You can choose different engines by specifying `engine=xxx`. Engine `circo`, `dot`, `neato`, `osage`, or `twopi` are supported. Default engine is `dot`.
    <div style="border:1px dotted black; background-color: #F2F3F4; padding: 5px;">
        &#96;&#96;&#96; viz engine=neato<br>
        digraph { <br>
            A -> {B; C; D} <br>
        } <br>
        &#96;&#96;&#96;
    </div>
