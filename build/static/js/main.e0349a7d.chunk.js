(this.webpackJsonpfogao_caseiro_front=this.webpackJsonpfogao_caseiro_front||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.654fde33.png"},,,,function(e,t,a){e.exports=a.p+"static/media/logo_fundo.d50e05c2.png"},,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(80)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(30),r=a.n(c),m=(a(39),a(40),a(9)),i=a(2),o=a(3),s=(a(41),a(11)),u=a.n(s);a(42);var E=function(){return l.a.createElement("div",{className:"hero"},l.a.createElement("img",{src:u.a,alt:""}),l.a.createElement("h3",null,'"Do ',l.a.createElement("span",null,"Fog\xe3o"),' para sua mesa!"'))};var d=function(){return l.a.createElement("div",{id:"landing"},l.a.createElement(E,null),l.a.createElement("div",{className:"description"},l.a.createElement("p",null,"Aquela refei\xe7\xe3o, quentinha, na medida, para voc\xea e sua fam\xedlia e com um tempero caseiro que faz toda diferen\xe7a."),l.a.createElement("p",null,"E se ela for Fit ou Low Carb?"),l.a.createElement("p",null,"Ser\xe1 assim, especial! At\xe9 porque tempero caseiro sem conservantes e corantes n\xe3o estraga sua alimenta\xe7\xe3o.")),l.a.createElement("h2",null,"Confira nosso card\xe1pio"),l.a.createElement("nav",null,l.a.createElement("li",null,l.a.createElement(i.b,{to:"/fit"},l.a.createElement("div",{className:"menu-item"},l.a.createElement("i",{className:"fas fa-carrot"}),l.a.createElement("span",null,"Fit")))),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/lowcarb"},l.a.createElement("div",{className:"menu-item"},l.a.createElement("i",{className:"fas fa-drumstick-bite"}),l.a.createElement("span",null,"Low carb")))),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/"},l.a.createElement("div",{className:"menu-item"},l.a.createElement("i",{className:"fas fa-utensils"}),l.a.createElement("span",null,"Combos"))))))};a(48),a(49);var f=function(){return l.a.createElement("header",null,l.a.createElement("nav",null,l.a.createElement("li",null,l.a.createElement(i.b,{to:"/"},l.a.createElement("i",{className:"fas fa-home"}))),l.a.createElement("li",null,l.a.createElement(i.b,{to:"#combos"},l.a.createElement("i",{className:"fas fa-utensils"}))),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/fit"},l.a.createElement("i",{className:"fas fa-carrot"}))),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/lowcarb"},l.a.createElement("i",{className:"fas fa-drumstick-bite"}))),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/pedidos"},l.a.createElement("i",{className:"fas fa-shopping-cart"})))))},v=(a(50),a(15)),p=a.n(v),b=a(12),g=a(13),N=function(){function e(){Object(b.a)(this,e)}return Object(g.a)(e,null,[{key:"getDB",value:function(){return JSON.parse(localStorage.getItem("fcdb")||"{}")}},{key:"getItems",value:function(e){return this.getDB()[e].filter((function(e){return!0===e.hot}))}},{key:"getItem",value:function(e){return this.getDB()[e]}}]),e}(),h=function(){function e(){Object(b.a)(this,e)}return Object(g.a)(e,null,[{key:"numberToCurrencyBRL",value:function(e){return e.toLocaleString("pt-BR",{minimumFractionDigits:2,style:"currency",currency:"BRL"})}},{key:"formaterDesciptionCard",value:function(e){return e.length>40?e.slice(0,36)+" ...":e}},{key:"getLinkItem",value:function(){var e=N.getDB(),t=window.location.href.split("/").slice(-2),a=t[0],n=t[1];return e[a][n]}}]),e}(),k=(a(51),function(e){var t=e.item;return l.a.createElement("div",{className:"price"},t.hot?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sale"},l.a.createElement("span",null,h.numberToCurrencyBRL(t.sale))),l.a.createElement("div",{className:"full"},l.a.createElement("span",null,h.numberToCurrencyBRL(t.price)))):l.a.createElement("div",{className:"sale"},l.a.createElement("span",null,h.numberToCurrencyBRL(t.sale))))}),y=function(e){var t=e.item;return l.a.createElement(i.b,{to:"/".concat(t.type,"/").concat(t.id-1)},l.a.createElement("div",{className:"horizon-card"},l.a.createElement("img",{src:p.a,alt:""}),l.a.createElement("div",{className:"right"},l.a.createElement("h2",null,t.title," ",t.id),l.a.createElement("p",null,h.formaterDesciptionCard(t.name)),l.a.createElement("div",{className:"horizon-card-price"}),l.a.createElement(k,{item:t}))))},C=(a(52),function(e){return l.a.createElement("div",{className:"top-page"},l.a.createElement("h1",{className:"title"},e.title),l.a.createElement("h3",{className:"information"},e.information))}),I=(a(53),a(54),function(e){var t=e.item;return l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:p.a,alt:""}),l.a.createElement("h3",null,t.title," ",t.id),l.a.createElement("p",null,h.formaterDesciptionCard(t.name)),l.a.createElement(k,{item:t}))});var S=function(){var e=N.getItems("fit"),t=N.getItems("lowcarb");return l.a.createElement(l.a.Fragment,null,e.length>0||t.length>0?l.a.createElement("div",{className:"hot-cards"},l.a.createElement("h2",null,"Destaques"),l.a.createElement("div",{className:"cards"},e.map((function(e){return l.a.createElement(i.b,{key:e.id,to:"/".concat(e.type,"/").concat(e.id-1)},l.a.createElement(I,{key:e.id,item:e}))})),t.map((function(e){return l.a.createElement(i.b,{key:e.id,to:"/".concat(e.type,"/").concat(e.id-1)},l.a.createElement(I,{key:e.id,item:e}))})))):l.a.createElement(l.a.Fragment,null))};var O=function(){var e=N.getItem("fit");return l.a.createElement("div",{id:"fit"},l.a.createElement(f,null),l.a.createElement(C,{title:"Refei\xe7\xf5es Fit",information:"Refei\xe7\xe3o individual (embalagem de 500ml)."}),l.a.createElement("div",{className:"content"},l.a.createElement(S,null),l.a.createElement("div",{className:"list-cards"},e.map((function(e){return e.active&&l.a.createElement(y,{key:e.name,item:e})})))))};a(55);var j=function(){var e=N.getItem("lowcarb");return l.a.createElement("div",{id:"fit"},l.a.createElement(f,null),l.a.createElement(C,{title:"Refei\xe7\xf5es Low Carb",information:"Refei\xe7\xe3o individual (embalagem de 350ml)."}),l.a.createElement("div",{className:"content"},l.a.createElement(S,null),l.a.createElement("div",{className:"list-cards"},e.map((function(e){return e.active&&l.a.createElement(y,{key:e.name,item:e})})))))},L=(a(56),function(){function e(){Object(b.a)(this,e)}return Object(g.a)(e,null,[{key:"getCart",value:function(){var e=JSON.parse(localStorage.getItem("cart")||"[]");return e.length<1&&(localStorage.setItem("cart","[]"),e=JSON.parse(localStorage.getItem("cart")||"[]")),e}},{key:"setItemIntoCart",value:function(e){var t=this.getCart();if(0===this.getItemCart(e).length&&e.amount<10)e.amount+=1,t.push(e);else{var a=this.getIndexItemCart(e);e.amount<10&&(e.amount+=1),t[a]=e}localStorage.setItem("cart",JSON.stringify(t))}},{key:"removeItemCart",value:function(e){var t=this.getCart(),a=this.getIndexItemCart(e);e.amount>1&&(e.amount-=1),t[a]=e,localStorage.setItem("cart",JSON.stringify(t))}},{key:"getItemCart",value:function(e){return this.getCart().filter((function(t){return e.id===t.id&&e.type===t.type}))}},{key:"deleteItemCart",value:function(e){var t=this.getCart(),a=this.getIndexItemCart(e);t.splice(a,1),localStorage.setItem("cart",JSON.stringify(t))}},{key:"getIndexItemCart",value:function(e){return this.getCart().findIndex((function(t){return t.id===e.id&&t.type===e.type}))}},{key:"getTotalCart",value:function(){return this.getCart().reduce((function(e,t){return e+t.sale*t.amount}),0)}},{key:"deleteCart",value:function(){localStorage.setItem("cart","[]")}}]),e}());var B=function(){var e=Object(n.useState)(h.getLinkItem()),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(1),o=Object(m.a)(r,2),s=o[0],E=o[1],d=Object(n.useState)(a.sale),v=Object(m.a)(d,2),p=v[0],b=v[1];return l.a.createElement("div",{id:"item"},l.a.createElement(f,null),l.a.createElement("main",null,l.a.createElement("h2",{className:"topTitle"},"Detalhes do item"),l.a.createElement("img",{src:u.a,alt:""}),l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,a.title," ",a.id),l.a.createElement(k,{item:a})),l.a.createElement("div",{className:"name"},a.name)),l.a.createElement("footer",null,l.a.createElement("div",{className:"controls"},l.a.createElement("div",{className:"add-buttons"},l.a.createElement("button",{className:"min",onClick:function(){s>1&&(a.amount-=1,c(a),E(s-1),b(p-a.sale))}},"-"),l.a.createElement("span",{className:"display"},s),l.a.createElement("button",{className:"add",onClick:function(){s<10&&(a.amount+=1,c(a),E(s+1),b(p+a.sale))}},"+")),l.a.createElement(i.b,{to:"/".concat(a.type),className:"total-add",onClick:function(){L.setItemIntoCart(a)}},l.a.createElement("div",{className:"label"},"Adicionar"),l.a.createElement("div",{className:"total"},h.numberToCurrencyBRL(p))))))},R=(a(57),a(58),a(32)),w=a(0),x=function(e){var t=e.item;var a=Object(n.useState)(t.amount),c=Object(m.a)(a,2),r=c[0],o=c[1];return l.a.createElement("div",{className:"cart-card"},l.a.createElement("div",{className:"left-card"},l.a.createElement(i.b,{to:"/".concat(t.type,"/").concat(t.id-1)},l.a.createElement("h3",{className:"card-title"},t.title," ",t.id),l.a.createElement("div",{className:"description"},h.formaterDesciptionCard(t.name)))),l.a.createElement("div",{className:"middle-card"},l.a.createElement("div",{className:"total-display"},l.a.createElement("h4",null,"total do item"),l.a.createElement("h1",null,function(){var e=t.amount&&t.sale*t.amount;return h.numberToCurrencyBRL(e)}())),l.a.createElement("div",{className:"item-display"},l.a.createElement("h4",null,"valor unit\xe1rio"),l.a.createElement(k,{item:t})),l.a.createElement("div",{className:"controls"},l.a.createElement("div",{className:"add-buttons"},l.a.createElement(i.b,{to:"pedidos"},l.a.createElement("button",{className:"min",onClick:function(){L.removeItemCart(t),o(t.amount)}},"-")),l.a.createElement("span",{className:"display"},r),l.a.createElement(i.b,{to:"pedidos"},l.a.createElement("button",{className:"add",onClick:function(){L.setItemIntoCart(t),o(t.amount)}},"+"))))),l.a.createElement("div",{className:"right"},l.a.createElement(i.b,{to:"pedidos",onClick:function(){L.deleteItemCart(t)}},l.a.createElement(w.b.Provider,{value:{className:"react-icons"}},l.a.createElement(R.a,null)))))},D=a(16),F=(a(59),function(e){var t=e.total;return l.a.createElement("div",{className:"checkout"},l.a.createElement(i.b,{to:"/pedidos",onClick:L.deleteCart},l.a.createElement("div",{className:"del-cart"},l.a.createElement("h2",null,"Esvaziar carrinho"),l.a.createElement(w.b.Provider,{value:{className:"react-icons"}},l.a.createElement(D.a,null)))),l.a.createElement("div",{className:"display-total"},l.a.createElement("h2",null,"Total do pedido"),l.a.createElement("h2",null,h.numberToCurrencyBRL(t))),l.a.createElement("div",{className:"close"},l.a.createElement("h1",null,"Fazer pedido")))});var T=function(){var e=L.getCart(),t=L.getTotalCart();return l.a.createElement("div",{id:"cart-page"},l.a.createElement(f,null),e.length>0?l.a.createElement(l.a.Fragment,null,l.a.createElement(C,{title:"Itens do pedido",information:"Confira os itens antes de finalizar o pedido."}),l.a.createElement("div",{className:"cart-list"},e.map((function(e){return l.a.createElement(x,{key:"{".concat(e.type,"}#").concat(e.id),item:e})})),l.a.createElement(F,{total:t}))):l.a.createElement(i.b,{to:"/"},l.a.createElement("div",{className:"empty-cart"},l.a.createElement(w.b.Provider,{value:{className:"empty-cart-icon"}},l.a.createElement(D.a,null)),l.a.createElement("h1",null,"Seu carrinho est\xe1 vazio!!!"),l.a.createElement("img",{src:u.a,alt:""}),l.a.createElement("button",null,"Confira nosso card\xe1pio."))))};a(60);var q=function(){return l.a.createElement("div",{id:"home-page"},l.a.createElement(E,null),l.a.createElement("div",{className:"description"},l.a.createElement("p",null,"Aquela refei\xe7\xe3o, quentinha, na medida, para voc\xea e sua fam\xedlia e com um tempero caseiro que faz toda diferen\xe7a."),l.a.createElement("p",null,"E se ela for Fit ou Low Carb?"),l.a.createElement("p",null,"Ser\xe1 assim, especial! At\xe9 porque tempero caseiro sem conservantes e corantes n\xe3o estraga sua alimenta\xe7\xe3o.")),l.a.createElement("h1",null,"Em Breve"))};var J=function(){return l.a.createElement(i.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",component:q,exact:!0}),l.a.createElement(o.a,{path:"/app",component:d,exact:!0}),l.a.createElement(o.a,{path:"/fit",component:O,exact:!0}),l.a.createElement(o.a,{path:"/lowcarb",component:j,exact:!0}),l.a.createElement(o.a,{path:"/:item/:title",component:B,exact:!0}),l.a.createElement(o.a,{path:"/pedidos",component:T})))},z=a(33),A=a.n(z).a.create({baseURL:"/api/public/items"});a(78),a(79);var _=function(){return l.a.createElement("div",{className:"sk-cube-grid"},l.a.createElement("div",{className:"sk-cube sk-cube1"}),l.a.createElement("div",{className:"sk-cube sk-cube2"}),l.a.createElement("div",{className:"sk-cube sk-cube3"}),l.a.createElement("div",{className:"sk-cube sk-cube4"}),l.a.createElement("div",{className:"sk-cube sk-cube5"}),l.a.createElement("div",{className:"sk-cube sk-cube6"}),l.a.createElement("div",{className:"sk-cube sk-cube7"}),l.a.createElement("div",{className:"sk-cube sk-cube8"}),l.a.createElement("div",{className:"sk-cube sk-cube9"}))};var P=function(){return l.a.createElement("div",{id:"loading"},l.a.createElement(E,null),l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null)))};var M=function(){var e=Object(n.useState)(!0),t=Object(m.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){A.get("").then((function(e){var t=JSON.stringify(e.data);localStorage.setItem("fcdb",t),c(!1)}))}),[]),a?l.a.createElement(P,null):l.a.createElement(J,null)};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(M,null)),document.getElementById("root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.e0349a7d.chunk.js.map