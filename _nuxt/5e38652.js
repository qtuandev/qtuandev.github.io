(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{347:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return d}));var r=n(8),o=(n(48),n(70));function c(t){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.get("".concat(o.a,"/posts?").concat(Object(o.c)(e))).then((function(t){return t.data.length>0?t.data:null})).catch((function(t){return{error:JSON.stringify(t)}}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.get("".concat(o.a,"/posts?slug=").concat(e)).then((function(t){return t.data.length>0?t.data[0]:null})).catch((function(t){return{error:JSON.stringify(t)}}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},350:function(t,e,n){"use strict";n(24);var r=n(158),o={name:"ArticleGrid",components:{ModulePostAuthorSmall:n(346).a,ModulePostThumbnailImage:r.a},computed:{postShortDesc:function(){return this.post&&this.post.description?this.post.description.slice(0,100)+"...":"No description found..."}},props:{post:{type:Object,default:{}}}},c=n(4),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"ps-post ps-post--grid"},[n("div",{staticClass:"ps-post__thumbnail"},[n("nuxt-link",{staticClass:"ps-post__overlay",attrs:{to:"/post/"+t.post.slug}}),t._v(" "),n("module-post-thumbnail-image",{attrs:{post:t.post}})],1),t._v(" "),n("div",{staticClass:"ps-post__content"},[n("div",{staticClass:"ps-post__categories"},t._l(t.post.categories,(function(e){return n("nuxt-link",{key:e.id,attrs:{to:"/blog"}},[t._v("\n                "+t._s(e.name)+"\n            ")])})),1),t._v(" "),n("h4",{staticClass:"ps-post__title"},[n("nuxt-link",{attrs:{to:"/post/"+t.post.slug}},[t._v("\n                "+t._s(t.post.title)+"\n            ")])],1),t._v(" "),n("div",{staticClass:"ps-post__meta"},[n("module-post-author-small"),t._v(" "),n("span",{staticClass:"ps-post__posted"},[t._v("Jul 12, 2020")])],1),t._v(" "),n("div",{staticClass:"ps-post__short-desc"},[n("p",[t._v(t._s(t.postShortDesc))])]),t._v(" "),n("div",{staticClass:"ps-post__footer"},[n("nuxt-link",{staticClass:"ps-post__morelink effect--underline",attrs:{to:"/post/"+t.post.slug}},[t._v("\n                Read more\n            ")])],1)])])}),[],!1,null,"6f8169d5",null);e.a=component.exports},352:function(t,e,n){"use strict";var r=n(8),o=(n(48),n(33),n(345)),c=n(344),l=n(350),d=n(347),f={name:"ModuleBlogPostGrids",components:{ArticleGrid:l.a,ViewAllPostLink:o.a},props:{collectionSlug:{type:String,default:""},column:{type:Number,default:function(){return 3}}},data:function(){return{postItems:null}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.collectionSlug){e.next=8;break}return n={slug_in:t.collectionSlug},e.next=4,Object(c.a)(n);case 4:(r=e.sent)&&(t.postItems=r),e.next=13;break;case 8:return o={_limit:20},e.next=11,Object(d.b)(o);case 11:(l=e.sent)&&(t.postItems=l);case 13:case"end":return e.stop()}}),e)})))()}},m=n(4),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ps-blog--post-items"},[t.postItems?[n("div",{staticClass:"row"},[4===t.column?t._l(t.postItems,(function(t){return n("div",{key:t.id,staticClass:"col-lg-3 col-md-4 col-sm-6 col-12"},[n("article-grid",{attrs:{post:t}})],1)})):2===t.column?t._l(t.postItems,(function(t){return n("div",{key:t.id,staticClass:"col-2 col-sm-6 col-12"},[n("article-grid",{attrs:{post:t}})],1)})):t._l(t.postItems,(function(t){return n("div",{key:t.id,staticClass:"col-md-4 col-sm-6 col-12"},[n("article-grid",{attrs:{post:t}})],1)}))],2),t._v(" "),n("view-all-post-link")]:n("p",[t._v("No post found.")])],2)}),[],!1,null,null,null);e.a=component.exports},370:function(t,e,n){"use strict";n.r(e);n(7),n(5),n(9),n(10),n(11);var r=n(1),o=n(42),c=n(363),l=n(360),d=n(349),f=n(345),m=n(361),_=n(362),v=n(352),h=n(8),O=(n(48),n(344)),w={name:"GridPostOnTop",components:{ArticlePrimary:n(353).a},props:{collectionSlug:{type:String,default:""}},data:function(){return{postItems:null,swiperOptions:{slidesPerView:1,fadeEffect:!0}}},fetch:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={slug_in:t.collectionSlug},e.next=3,Object(O.a)(n);case 3:(r=e.sent)&&(t.postItems=r),setTimeout(function(){this.loading=!1}.bind(t),250);case 6:case"end":return e.stop()}}),e)})))()}},y=n(4);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var k={components:{GridPostOnTop:Object(y.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"ps-default-posts-on-top"},[t.postItems&&t.postItems.length>0?[n("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},[t._l(t.postItems,(function(t){return[n("swiper-slide",{key:t.id},[n("article-primary",{attrs:{post:t}})],1)]}))],2)]:n("p",[t._v("No post found.")])],2)}),[],!1,null,"55827b43",null).exports,ModuleBlogPostGrids:v.a,DefaultPostsOnTop:_.a,HomePostItemListViews:m.a,ViewAllPostLink:f.a,SidebarHome:d.a,ExploreTopics:l.a,Subscribe:c.a},transition:"zoom",layout:"layout-home-default",head:{title:"Home Grid"},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({collections:function(t){return t.collection.collections}})),created:function(){this.$store.commit("app/toggleDrawer",!1)}},x=Object(y.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"homepage-grid"}},[n("grid-post-on-top",{attrs:{"collection-slug":"posts-on-top-banner"}}),t._v(" "),n("div",{staticClass:"container"},[n("subscribe"),t._v(" "),n("module-blog-post-grids",{attrs:{column:3}})],1)],1)}),[],!1,null,null,null);e.default=x.exports}}]);