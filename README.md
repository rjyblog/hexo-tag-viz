# hexo-tag-viz

Use [Vis.js](https://github.com/mdaines/viz.js) to render [GraphViz](http://www.graphviz.org/) dot format graphs.

# Usage
1. Install
    ```bash
    npm install https://github.com/rjyblog/hexo-tag-viz.git
    ```
2. Code block with `viz` or `dot` notation will be rendered.
    <div style="border:1px dotted black; background-color: #F2F3F4; padding: 5px;">
        &#96;&#96;&#96; viz <br>
        digraph { <br>
            A -> {B; C; D} <br>
        } <br>
        &#96;&#96;&#96;
    </div>

    ```viz
    digraph {
        A -> {B; C; D}
    }
    ```
