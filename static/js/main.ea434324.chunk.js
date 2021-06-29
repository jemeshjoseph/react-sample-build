(this["webpackJsonpfirst-react-app"]=this["webpackJsonpfirst-react-app"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},29:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(19),o=c.n(a),s=(c(25),c(4)),i=c(5),h=c(7),j=c(6),l=(c(26),c.p+"static/media/logo.6ce24c58.svg"),d=(c(27),c(0)),u=function(e){Object(h.a)(c,e);var t=Object(j.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:l,className:"App-logo",alt:"logo"}),Object(d.jsx)("p",{children:"React Demo Apps"})]})}}]),c}(r.a.Component),b=c(13),O=c(2),p=function(e){Object(h.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(s.a)(this,c),(n=t.call(this,e)).handleOnChangeSearchText=function(e){console.log("On SearchBar component, searchText: ",e.target.value),n.props.onSearchTextChange(e.target.value)},n.handleCheckboxChange=function(e){console.log("On SearchBar component, checked: ",e.target.checked),n.props.onStockedCheckChange(e.target.checked)},n}return Object(i.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",id:"searchText",placeholder:"Search...",onChange:this.handleOnChangeSearchText}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"checkbox",id:"stocked",onChange:this.handleCheckboxChange}),Object(d.jsx)("label",{children:"Only show products in stock"})]})}}]),c}(r.a.Component),x=function(e){Object(h.a)(c,e);var t=Object(j.a)(c);function c(e){return Object(s.a)(this,c),t.call(this,e)}return Object(i.a)(c,[{key:"render",value:function(){return Object(d.jsx)("tr",{children:Object(d.jsx)("td",{colSpan:"2",className:"category-name",children:this.props.category})})}}]),c}(r.a.Component),f=function(e){Object(h.a)(c,e);var t=Object(j.a)(c);function c(e){return Object(s.a)(this,c),t.call(this,e)}return Object(i.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{style:{color:this.props.product.stocked?"black":"red"},children:this.props.product.name}),Object(d.jsx)("td",{children:this.props.product.price})]})}}]),c}(r.a.Component),g=function(e){Object(h.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(s.a)(this,c),(n=t.call(this,e)).state={productsList:[]},n}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("./mock-data/products.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){return e})).then((function(t){console.log(t),e.setState({productsList:t})}))}},{key:"render",value:function(){var e=this;if(!this.state.productsList.length)return Object(d.jsx)("div",{children:"No products to show"});var t=[],c=[];return this.state.productsList.forEach((function(n,r){-1!==n.name.indexOf(e.props.searchText)&&(e.props.isStocked&&!n.stocked||(-1===c.indexOf(n.category)&&(c.push(n.category),t.push(Object(d.jsx)(x,{category:n.category},n.category))),t.push(Object(d.jsx)(f,{product:n},r))))})),Object(d.jsx)("div",{children:Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Price"})]})}),Object(d.jsx)("tbody",{children:t})]})})}}]),c}(r.a.Component),k=(c(29),function(e){Object(h.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(s.a)(this,c),(n=t.call(this,e)).handleSearchTextChange=function(e){console.log("On FilterableProductTable, searchText: ",e),n.setState({searchText:e})},n.handleStockedCheckChange=function(e){console.log("On FilterableProductTable, isStocked: ",e),n.setState({isStocked:e})},n.state={searchText:"",isStocked:!1},n}return Object(i.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"filter-product-container",children:[Object(d.jsx)(p,{onSearchTextChange:this.handleSearchTextChange,onStockedCheckChange:this.handleStockedCheckChange}),Object(d.jsx)(g,{searchText:this.state.searchText,isStocked:this.state.isStocked})]})}}]),c}(r.a.Component)),v=function(e){Object(h.a)(c,e);var t=Object(j.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(d.jsx)("div",{children:"Home goes here"})}}]),c}(r.a.Component),C=function(e){Object(h.a)(c,e);var t=Object(j.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(d.jsx)(b.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/filter-product",children:"Filterable Product Table"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/hoc-example",children:"HOC Example"})})]})}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{path:"/filter-product",children:Object(d.jsx)(k,{})}),Object(d.jsx)(O.a,{path:"/hoc-example",children:Object(d.jsx)(v,{})}),Object(d.jsx)(O.a,{path:"/",children:Object(d.jsx)(v,{})})]})]})})}}]),c}(r.a.Component),m=function(e){Object(h.a)(c,e);var t=Object(j.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{}),Object(d.jsx)("main",{children:Object(d.jsx)(C,{})})]})}}]),c}(r.a.Component),y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),y()}},[[35,1,2]]]);
//# sourceMappingURL=main.ea434324.chunk.js.map