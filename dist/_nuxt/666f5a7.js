(window.webpackJsonp=window.webpackJsonp||[]).push([[20,5],{346:function(t,e,r){var content=r(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("4a9d9a7d",content,!0,{sourceMap:!1})},347:function(t,e,r){"use strict";r.r(e);var n={name:"PrevNext",props:{prev:{type:Object,default:null},next:{type:Object,default:null}},computed:{linkStyles:function(){return"bg-teal-400 dark:bg-violet-800 text-white px-4 py-1 rounded-md shadow-lg hover:bg-teal-600 dark:hover:bg-violet-900 transform duration-500 ease-in-out"}}},l=r(10),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"flex justify-between"},[t.prev?e("NuxtLink",{class:t.linkStyles,attrs:{to:{name:"articles-slug",params:{slug:t.prev.slug}}}},[t._v("\n    "+t._s(t.prev.title)+"\n  ")]):e("span",[t._v(" ")]),t._v(" "),t.next?e("NuxtLink",{class:t.linkStyles,attrs:{to:{name:"articles-slug",params:{slug:t.next.slug}}}},[t._v("\n    "+t._s(t.next.title)+"\n  ")]):e("span",[t._v(" ")])],1):t._e()}),[],!1,null,null,null);e.default=component.exports},351:function(t,e,r){"use strict";r(346)},352:function(t,e,r){var n=r(52)(!1);n.push([t.i,"hr{border-top:1px solid #ccc}p>code{padding:2px 3px;border-radius:5px;background-color:#1f2937;color:#ffb700!important}",""]),t.exports=n},365:function(t,e,r){"use strict";r.r(e);var n=r(58),l=r(28),c=r(9),o=(r(74),r(15),r(94),r(33),r(45),r(44),r(89)),d={name:"ArticlePage",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,article,c,o,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).fetch();case 3:return article=e.sent,e.next=6,r("articles").only(["title","slug","published"]).sortBy("published","desc").surround(n.slug).fetch();case 6:return c=e.sent,o=Object(l.a)(c,2),d=o[0],m=o[1],e.abrupt("return",{article:article,prev:d,next:m});case 11:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.article.title,meta:[].concat(Object(n.a)(this.meta),[{property:"article:published_time",content:this.article.createdAt},{property:"article:modified_time",content:this.article.updatedAt},{property:"article:tag",content:this.article.tags?this.article.tags.toString():""},{name:"twitter:label1",content:"Written by"},{name:"twitter:data1",content:o.a.author||""},{name:"twitter:label2",content:"Filed under"},{name:"twitter:data2",content:this.article.tags?this.article.tags.toString():""}]),link:[{hid:"canonical",rel:"canonical",href:"".concat(this.$config.baseUrl,"/articles/").concat(this.$route.params.slug)}]}},computed:{meta:function(){return function(meta){return[{hid:"description",name:"description",content:meta&&meta.description||o.a.siteDesc},{hid:"og:type",property:"og:type",content:meta&&meta.type||o.a.siteType},{hid:"og:url",property:"og:url",content:meta&&meta.url||o.a.siteUrl},{hid:"og:title",property:"og:title",content:meta&&meta.title||o.a.siteTitle},{hid:"og:description",property:"og:description",content:meta&&meta.description||o.a.siteDesc},{hid:"og:image",property:"og:image",content:meta&&meta.mainImage||o.a.mainImage},{hid:"twitter:url",name:"twitter:url",content:meta&&meta.url||o.a.siteUrl},{hid:"twitter:title",name:"twitter:title",content:meta&&meta.title||o.a.siteTitle},{hid:"twitter:description",name:"twitter:description",content:meta&&meta.description||o.a.siteDesc},{hid:"twitter:image",name:"twitter:image",content:meta&&meta.mainImage||o.a.mainImage}]}({type:"article",title:this.article.title,description:this.article.description,url:"".concat(this.$config.baseUrl,"/articles/").concat(this.$route.params.slug),mainImage:this.article.image})}}},m=(r(351),r(10)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-center md:gap-x-8 max-w-5xl mx-auto"},[e("article",{staticClass:"w-max-3xl"},[e("div",{staticClass:"prose md:prose-lg w-full dark:bg-gray-800 dark:text-gray-200 text-gray-500 bg-white p-5 rounded-xl shadow"},[e("nuxt-content",{attrs:{document:t.article}})],1)]),t._v(" "),e("aside",{staticClass:"right-box hidden md:block"},[e("div",{staticClass:"sticky top-20"},[e("header",{staticClass:"text-white w-full text-xs mb-2"},[e("div",{staticClass:"p-5 bg-teal-500 dark:bg-violet-900 rounded-md"},[e("p",[e("span",{staticClass:"uppercase"},[t._v("发布于:")]),t._v(" "),e("span",[t._v(t._s(t.article.published))])]),t._v(" "),e("div",{staticClass:"flex mt-1"},[e("span",{staticClass:"mr-1 uppercase"},[t._v("标签:")]),t._v(" "),e("ul",{staticClass:"flex"},t._l(t.article.tags,(function(r){return e("li",{key:r,staticClass:"mr-2"},[e("nuxt-link",{staticClass:"hover:underline",attrs:{to:{name:"tags-tag",params:{tag:r.toLowerCase()}}}},[t._v("\n                  "+t._s(r)+"\n                ")])],1)})),0)])])]),t._v(" "),e("nav",{staticClass:"mt-6 p-5 bg-white rounded-lg shadow w-max-[300px] dark:bg-gray-900 dark:text-gray-200"},[e("ul",t._l(t.article.toc,(function(link){return e("li",{key:link.id,class:{"py-2 ":2===link.depth,"ml-3 pb-1 text-gray-400":3===link.depth,"ml-5 pb-1 text-gray-500":4===link.depth,"ml-6 pb-1 text-gray-500":5===link.depth}},[e("a",{staticClass:"hover:underline",attrs:{href:"#".concat(link.id)}},[t._v(t._s(link.text))])])})),0)]),t._v(" "),e("footer",{staticClass:"py-5 mt-5"},[e("prev-next",{attrs:{prev:t.prev,next:t.next}})],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(114).default,PrevNext:r(347).default,Footer:r(115).default})}}]);