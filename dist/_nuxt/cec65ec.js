(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{1054:function(t,r,e){"use strict";e.r(r);e(6),e(4),e(2),e(8),e(5),e(9);var c=e(0),o=(e(7),e(13),e(60));function n(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}var d={props:["products"],components:{productBox6:e(795).a},data:function(){return{title:"Eat Fresh vegetables and fruits",showCart:!1,showquickviewmodel:!1,showcomapreModal:!1,quickviewproduct:{},comapreproduct:{},dismissSecs:5,dismissCountDown:0,swiperOption:{slidesPerView:4,spaceBetween:20,freeMode:!0}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(r){Object(c.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}({},Object(o.b)({curr:"products/changeCurrency"})),methods:{getImgUrl:function(path){return e(672)("./"+path)},Color:function(t){for(var r=[],i=0;i<Object.keys(t).length;i++)-1===r.indexOf(t[i].color)&&r.push(t[i].color);return r},productColorchange:function(t,r,e){var c=this;r.variants.map((function(o){o.color===t&&r.images.map((function(img){img.image_id===o.image_id&&(c.productslist[e].vImage=img.src)}))}))},discountedPrice:function(t){return t.price-t.price*t.discount/100},alert:function(t){this.dismissCountDown=t},showCartModal:function(t,r){this.showCart=t,this.$emit("openCart",this.showCart)},showquickview:function(t,r){this.showquickviewmodel=t,this.quickviewproduct=r,this.$emit("openQuickview",this.showquickviewmodel,this.quickviewproduct)},showcomparemodal:function(t,r){this.showcomapreModal=t,this.comapreproduct=r,this.$emit("openCompare",this.showcomapreModal,this.comapreproduct)}}},l=d,v=e(69),component=Object(v.a)(l,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("section",{staticClass:"addtocart_count"},[e("div",{staticClass:"full-box"},[e("div",{staticClass:"container"},[e("div",{staticClass:"title4"},[e("h2",{staticClass:"title-inner4"},[t._v(t._s(t.title))]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"theme-card center-align"},[e("div",{staticClass:"offer-slider"},[e("div",{staticClass:"sec-1"},t._l(t.products.slice(0,2),(function(r,c){return e("div",{key:c,staticClass:"product-box2"},[e("div",{staticClass:"media"},[e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("img",{staticClass:"img-fluid bg-img",attrs:{id:r.id,src:t.getImgUrl(r.vImage?r.vImage:r.images[0].src),alt:r.title}})]),t._v(" "),e("div",{staticClass:"media-body align-self-center"},[t._m(1,!0),t._v(" "),e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("h6",[t._v(t._s(r.title))])]),t._v(" "),r.sale?e("h4",[t._v("\n      "+t._s(t._f("currency")(t.discountedPrice(r)*t.curr.curr,t.curr.symbol))+"\n      "),e("del",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])]):e("h4",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))]),t._v(" "),e("ul",{staticClass:"color-variant"},t._l(t.Color(r.variants),(function(c,o){return e("li",{key:o},[e("a",{class:[c],style:{"background-color":c},on:{click:function(e){return t.productColorchange(c,r)}}})])})),0)],1)],1)])})),0)])])]),t._v(" "),e("div",{staticClass:"col-md-4 center-slider"},[e("div",[e("div",{staticClass:"offer-slider"},[e("div",t._l(t.products.slice(2,3),(function(r,c){return e("div",{key:c,staticClass:"product-box product-wrap"},[e("productBox6",{attrs:{product:r,index:c},on:{opencartmodel:t.showCartModal,showCompareModal:t.showcomparemodal,openquickview:t.showquickview,showalert:t.alert,alertseconds:t.alert}})],1)})),0)])])]),t._v(" "),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"theme-card center-align"},[e("div",{staticClass:"offer-slider"},[e("div",{staticClass:"sec-1"},t._l(t.products.slice(3,5),(function(r,c){return e("div",{key:c,staticClass:"product-box2"},[e("div",{staticClass:"media"},[e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("img",{staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(r.vImage?r.vImage:r.images[0].src),id:r.id,alt:"product.title"}})]),t._v(" "),e("div",{staticClass:"media-body align-self-center"},[t._m(2,!0),t._v(" "),e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("h6",[t._v(t._s(r.title))])]),t._v(" "),r.sale?e("h4",[t._v("\n      "+t._s(t._f("currency")(t.discountedPrice(r)*t.curr.curr,t.curr.symbol))+"\n      "),e("del",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])]):e("h4",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))]),t._v(" "),e("ul",{staticClass:"color-variant"},t._l(t.Color(r.variants),(function(c,o){return e("li",{key:o},[e("a",{class:[c],style:{"background-color":c},on:{click:function(e){return t.productColorchange(c,r)}}})])})),0)],1)],1)])})),0)])])])])])])]),t._v(" "),e("b-alert",{attrs:{show:t.dismissCountDown,variant:"success"},on:{dismissed:function(r){t.dismissCountDown=0},"dismiss-count-down":t.alert}},[e("p",[t._v("Product Is successfully added to your wishlist.")])])],1)}),[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"line"},[r("span")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"rating"},[e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"})])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"rating"},[e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"})])}],!1,null,null,null);r.default=component.exports},795:function(t,r,e){"use strict";e(7),e(6),e(4),e(2),e(8),e(5),e(9);var c=e(0),o=e(60);function n(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(r){Object(c.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var l={props:["product","index"],data:function(){return{imageSrc:"",quickviewProduct:{},compareProduct:{},showquickview:!1,showCompareModal:!1,cartval:!1,variants:{productId:"",image:""},dismissSecs:5,dismissCountDown:0}},computed:d(d({},Object(o.c)({productslist:function(t){return t.products.productslist}})),Object(o.b)({curr:"products/changeCurrency"})),methods:{getImgUrl:function(path){return e(672)("./"+path)},addToCart:function(t){this.cartval=!0,this.$emit("opencartmodel",this.cartval),this.$store.dispatch("cart/addToCart",t)},addToWishlist:function(t){this.dismissCountDown=this.dismissSecs,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("products/addToWishlist",t)},showQuickview:function(t){this.showquickview=!0,this.quickviewProduct=t,this.$emit("openquickview",this.showquickview,this.quickviewProduct)},addToCompare:function(t){this.showCompareModal=!0,this.compareProduct=t,this.$emit("showCompareModal",this.showCompareModal,this.compareProduct),this.$store.dispatch("products/addToCompare",t)},countDownChanged:function(t){this.dismissCountDown=t,this.$emit("alertseconds",this.dismissCountDown)},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},v=e(69),component=Object(v.a)(l,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{staticClass:"img-wrapper"},[e("div",{staticClass:"lable-block"},[t.product.sale?e("span",{staticClass:"lable4"},[t._v("on sale")]):t._e()]),t._v(" "),e("div",{staticClass:"front text-center"},[e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[e("img",{key:t.index,staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(t.product.images[0].src),id:t.product.id,alt:t.product.title}})])],1),t._v(" "),e("div",{staticClass:"cart-info cart-wrap"},[e("a",{attrs:{href:"javascript:void(0)",title:"Wishlist"}},[e("i",{staticClass:"ti-heart",attrs:{"aria-hidden":"true"},on:{click:function(r){return t.addToWishlist(t.product)}}})]),t._v(" "),e("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],attrs:{href:"javascript:void(0)",title:"Quick View",variant:"primary"},on:{click:function(r){return t.showQuickview(t.product)}}},[e("i",{staticClass:"ti-search",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-compare",modifiers:{"modal-compare":!0}}],attrs:{href:"javascript:void(0)",title:"Comapre",variant:"primary"},on:{click:function(r){return t.addToCompare(t.product)}}},[e("i",{staticClass:"ti-reload",attrs:{"aria-hidden":"true"}})])]),t._v(" "),e("div",{staticClass:"addtocart_btn"},[e("button",{staticClass:"add-button add_cart",attrs:{"data-toggle":"modal","data-target":"#addtocart"},on:{click:function(r){return t.addToCart(t.product)}}},[t._v("\n        add to cart\n      ")])])]),t._v(" "),e("div",{staticClass:"product-detail text-center"},[t._m(0),t._v(" "),e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[e("h6",[t._v(t._s(t.product.title))])]),t._v(" "),e("p",[t._v(t._s(t.product.description))]),t._v(" "),t.product.sale?e("h4",[t._v("\n      "+t._s(t._f("currency")(t.discountedPrice(t.product)*t.curr.curr,t.curr.symbol))+"\n      "),e("del",[t._v(t._s(t._f("currency")(t.product.price*t.curr.curr,t.curr.symbol)))])]):e("h4",[t._v(t._s(t._f("currency")(t.product.price*t.curr.curr,t.curr.symbol)))])],1)])}),[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"rating"},[e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"})])}],!1,null,null,null);r.a=component.exports}}]);