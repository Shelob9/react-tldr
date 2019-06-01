(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return E});var a=n(5),o=n.n(a),r=n(10),s=n.n(r),c=n(11),m=n.n(c),p=n(12),i=n.n(p),l=n(13),d=n.n(l),h=n(14),u=n.n(h),g=n(0),D=n.n(g),T=n(4),E=function(e){function t(e){var n;return s()(this,t),(n=i()(this,d()(t).call(this,e))).layout=null,n}return u()(t,e),m()(t,[{key:"render",value:function(){var e=this.props,t=e.components;o()(e,["components"]);return D.a.createElement(T.MDXTag,{name:"wrapper",components:t},D.a.createElement(T.MDXTag,{name:"h1",components:t,props:{id:"react-context---tldr"}},"React Context - TL;DR"),D.a.createElement(T.MDXTag,{name:"h2",components:t,props:{id:"imports"}},"Imports"),D.a.createElement(T.MDXTag,{name:"pre",components:t},D.a.createElement(T.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx"}},'//Import React and the context creator and the hooks we need.\nimport React, { useContext, useState, createContext } from "react";\n//Also React DOM\nimport ReactDOM from "react-dom";\n')),D.a.createElement(T.MDXTag,{name:"h2",components:t,props:{id:"the-context-object"}},"The Context Object"),D.a.createElement(T.MDXTag,{name:"p",components:t},"The function ",D.a.createElement(T.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"React.createContext()")," creates context objects we can use to share state between components."),D.a.createElement(T.MDXTag,{name:"pre",components:t},D.a.createElement(T.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"const DataContext = createContext({});\n")),D.a.createElement(T.MDXTag,{name:"p",components:t},"This returns a ",D.a.createElement(T.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Provider />")," and ",D.a.createElement(T.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Consumer>"),". Providers manage state, consumers subscribe to, dipsplay and change state. Providers are responsible for state, not its presentation. Consumers are responsible for the presentation and interface represented by state, they are not responsible for state. Providers provide state and buisness logic for state."),D.a.createElement(T.MDXTag,{name:"pre",components:t},D.a.createElement(T.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"const {\n  Provider,\n  Consumer\n} = DataConext;\n")),D.a.createElement(T.MDXTag,{name:"h3",components:t,props:{id:"creating-a-provider"}},"Creating A Provider"),D.a.createElement(T.MDXTag,{name:"p",components:t},'This component provides data to the app. The layout of the app is passed in with the "children" prop.'),D.a.createElement(T.MDXTag,{name:"pre",components:t},D.a.createElement(T.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx"}},'/**\n * Wraps the app in a common layout with data provided\n */\nconst Layout = props => {\n  //Manage state using useState API\n  // useReducer is likely a better choice for complex state objects\n  // SEE: https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks\n  const [data, setData] = useState({\n    title: "The Title",\n    description: "Description"\n  });\n  return (\n    <DataContext.Provider\n      value={{\n        data,\n        setData\n      }}\n    >\n      {props.children}\n    </DataContext.Provider>\n  );\n};\n\n### Consuming The Data\n> [useContext hook documentation](https://reactjs.org/docs/hooks-reference.html#usecontext)\n\n#### Displaying Data From Context\n```jsx\n/**\n * This component shows the current values\n */\nconst Display = () => {\n  //Get the current state from useContex hook\n  const { data } = useContext(DataContext);\n  return (\n    <ul>\n      <li>{data.title}</li>\n      <li>{data.description}</li>\n    </ul>\n  );\n};\n\n#### Editting Data From Context\nData and the setter for the data is passed down to the component via context.\n\n```jsx\n/**\n * This component had form fields for editting the data held in the context\n */\nconst Edit = () => {\n  //Get the current state and state updater from the useContex hook\n  const { data, setData } = useContext(DataContext);\n\n  /**\n   * Change handler\n   *\n   * Doing this merge of data here is not ideal.\n   * useReducer() or custom hook with state update functions would be better\n   */\n  const onChange = event => {\n    setData({\n      ...data,\n      [event.target.name]: event.target.value\n    });\n  };\n\n  return (\n    <div>\n      <div>\n        <label htmlFor="title">title</label>\n        <input value={data.title} onChange={onChange} id="title" name="title" />\n      </div>\n      <div>\n        <label htmlFor="description">description</label>\n        <input\n          value={data.description}\n          id="description"\n          name="description"\n          onChange={onChange}\n        />\n      </div>\n    </div>\n  );\n};\n')),D.a.createElement(T.MDXTag,{name:"h3",components:t,props:{id:"using-the-components-inside-of-provider"}},"Using The Components Inside Of Provider"),D.a.createElement(T.MDXTag,{name:"p",components:t},D.a.createElement(T.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Layout />")," provides all neccasary props to its children becuse we are using context."),D.a.createElement(T.MDXTag,{name:"pre",components:t},D.a.createElement(T.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx"}},"/**\n * Look, no props!\n */\nconst App = () => (\n  <Layout>\n    <Display />\n    <Edit />\n  </Layout>\n);\n")),D.a.createElement(T.MDXTag,{name:"h3",components:t,props:{id:"mount-app"}},"Mount app"),D.a.createElement(T.MDXTag,{name:"p",components:t},"Nothing new here."),D.a.createElement(T.MDXTag,{name:"pre",components:t},D.a.createElement(T.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx"}},'/**\n * Step 7 - Mount the app!\n */\nconst rootElement = document.getElementById("root");\nReactDOM.render(<App />, rootElement);\n')),D.a.createElement(T.MDXTag,{name:"h2",components:t,props:{id:"recommended-reading"}},"Recommended Reading"),D.a.createElement(T.MDXTag,{name:"h3",components:t,props:{id:"basic"}},"Basic"),D.a.createElement(T.MDXTag,{name:"ul",components:t},D.a.createElement(T.MDXTag,{name:"li",components:t,parentName:"ul"},D.a.createElement(T.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://daveceddia.com/usecontext-hook/"}},"https://daveceddia.com/usecontext-hook/"),D.a.createElement(T.MDXTag,{name:"ul",components:t,parentName:"li"},D.a.createElement(T.MDXTag,{name:"li",components:t,parentName:"ul"},"If you don't actually know how context works, read this post first."))),D.a.createElement(T.MDXTag,{name:"li",components:t,parentName:"ul"},D.a.createElement(T.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://reactjs.org/docs/context.html"}},"https://reactjs.org/docs/context.html"),D.a.createElement(T.MDXTag,{name:"ul",components:t,parentName:"li"},D.a.createElement(T.MDXTag,{name:"li",components:t,parentName:"ul"},"The docs"))),D.a.createElement(T.MDXTag,{name:"li",components:t,parentName:"ul"},D.a.createElement(T.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://stackoverflow.com/a/54772882/1469799"}},"https://stackoverflow.com/a/54772882/1469799"),D.a.createElement(T.MDXTag,{name:"ul",components:t,parentName:"li"},D.a.createElement(T.MDXTag,{name:"li",components:t,parentName:"ul"},"The example code here is based on this answer.")))),D.a.createElement(T.MDXTag,{name:"h3",components:t,props:{id:"less-basic"}},"Less Basic"),D.a.createElement(T.MDXTag,{name:"ul",components:t},D.a.createElement(T.MDXTag,{name:"li",components:t,parentName:"ul"},D.a.createElement(T.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://kentcdodds.com/blog/how-to-use-react-context-effectively"}},"https://kentcdodds.com/blog/how-to-use-react-context-effectively")),D.a.createElement(T.MDXTag,{name:"li",components:t,parentName:"ul"},D.a.createElement(T.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks"}},"https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks"))))}}]),t}(D.a.Component)}}]);