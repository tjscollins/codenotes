import React from "react"

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {

    componentDidMount() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', 'UA-121664712-1');
    }
    
    render() {
        let css
        if (process.env.NODE_ENV === `production`) {
            css = (<style
                id="gatsby-inlined-css"
                dangerouslySetInnerHTML={{ __html: stylesStr }}
                />
            )
        }
        return (
            <html {...this.props.htmlAttributes}>
                <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                {this.props.headComponents}
                {css}
                <script type="text/javascript" async
                    src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML">
                </script>
                </head>
                <body {...this.props.bodyAttributes}>
                {this.props.preBodyComponents}
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: this.props.body }}
                />
                {this.props.postBodyComponents}
                <script 
                    defer 
                    src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"
                ></script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-121664712-1"></script>
                </body>
            </html>
        )
    }
}

