(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{265:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return p});var a=n(1),i=n.n(a),o=n(262),l=n(367),r=n(261),s=n(263);e.default=function(t){var e=t.pageContext,n=t.data,a=e.tag,p=n.allMarkdownRemark,c=p.edges,m=p.totalCount;return i.a.createElement(o.a,null,i.a.createElement(r.a,{title:a,description:"A collection of "+m+" post"}),i.a.createElement(s.m,null,i.a.createElement(s.l,null,i.a.createElement(s.k,null,a),"A collection of "+m+" post"),c.map(function(t){var e=t.node;t.index;return i.a.createElement(l.a,{key:e.fields.slug,title:e.frontmatter.title,url:e.fields.slug,description:e.frontmatter.description||e.excerpt,date:e.frontmatter.date,tags:e.frontmatter.tags})})))};var p="700262481"},367:function(t,e,n){"use strict";n(10),n(9),n(5),n(16),n(17);var a=n(260),i=n.n(a),o=n(1),l=n(259),r=n(113),s=n.n(r),p=n(3),c=n(2),m=p.c.div.withConfig({displayName:"PostCardstyle__PostCardWrapper",componentId:"sc-528glg-0"})(["\n  position: relative;\n"]),d=p.c.div.withConfig({displayName:"PostCardstyle__PostPreview",componentId:"sc-528glg-1"})(["\n  margin-bottom: 45px;\n  position: relative;\n  img {\n    border-radius: 3px;\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    width: 80%;\n    height: 80%;\n    background-color: #757575;\n    bottom: 0;\n    left: 10%;\n    filter: blur(15px);\n  }\n"]),g=p.c.div.withConfig({displayName:"PostCardstyle__PostDetails",componentId:"sc-528glg-2"})(["\n  display: flex;\n"]),x=p.c.div.withConfig({displayName:"PostCardstyle__PostDate",componentId:"sc-528glg-3"})(["\n  font-size: 90px;\n  font-weight: 700;\n  text-align: center;\n  padding: 30px 35px 15px 35px;\n  margin-right: 20px;\n  line-height: 1;\n  color: ",";\n  @media (max-width: 1200px) {\n    font-size: 70px;\n    padding: 25px 25px 15px 25px;\n    margin-right: 35px;\n  }\n  @media (max-width: 990px) {\n    font-size: 56px;\n    padding: 20px 20px 15px 20px;\n    margin-right: 25px;\n  }\n  @media (max-width: 575px) {\n    display: none;\n  }\n\n  > span {\n    font-size: 13px;\n    font-weight: 400;\n    display: block;\n    margin-top: 12px;\n    text-transform: uppercase;\n  }\n"],Object(c.a)("colors.textColor","#292929")),f=p.c.div.withConfig({displayName:"PostCardstyle__PostContent",componentId:"sc-528glg-4"})(["\n  align-self: center;\n"]),u=p.c.h2.withConfig({displayName:"PostCardstyle__PostTitle",componentId:"sc-528glg-5"})(["\n  font-size: 30px;\n  font-weight: 700;\n  color: ",";\n  line-height: 1.53;\n  margin-bottom: 10px;\n  a {\n    color: ",";\n  }\n  @media (max-width: 1200px) {\n    font-size: 26px;\n  }\n  @media (max-width: 990px) {\n    font-size: 21px;\n    margin-bottom: 12px;\n  }\n  @media (max-width: 575px) {\n    font-size: 20px;\n    margin-bottom: 10px;\n  }\n"],Object(c.a)("colors.textColor","#292929"),Object(c.a)("colors.textColor","#292929")),h=p.c.p.withConfig({displayName:"PostCardstyle__Excerpt",componentId:"sc-528glg-6"})(["\n  font-size: ","px;\n  color: ",";\n  font-weight: 400;\n  line-height: 2;\n  margin-bottom: 0;\n  @media (max-width: 990px) {\n    font-size: 14px;\n  }\n"],Object(c.a)("fontSizes.3","15"),Object(c.a)("textColor","#292929")),w=p.c.div.withConfig({displayName:"PostCardstyle__PostTags",componentId:"sc-528glg-7"})(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-top: 15px;\n\n  a {\n    display: block;\n    margin-right: 30px;\n    font-size: 14px;\n    font-weight: 400;\n    color: ",";\n    @media (max-width: 990px) {\n      font-size: 13px;\n      margin-right: 25px;\n    }\n  }\n"],Object(c.a)("primary","#D10068"));var y=function(t){var e=t.image,n=t.title,a=t.description,r=t.url,p=t.date,c=t.tags,y=t.className,_=t.imageType,C=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,["image","title","description","url","date","tags","className","imageType"]),b=["post_card"];return y&&b.push(y),o.createElement(m,Object.assign({className:b.join(" ")},C),null==e?null:o.createElement(d,{className:"post_preview"},o.createElement(l.a,{to:r},"fluid"===_?o.createElement(s.a,{fluid:e,alt:"post preview"}):o.createElement(s.a,{fixed:e,alt:"post preview"}))),o.createElement(g,{className:"post_details"},p&&o.createElement(x,{dangerouslySetInnerHTML:{__html:p},className:"post_date"}),o.createElement(f,{className:"post_content"},o.createElement(u,{className:"post_title"},o.createElement(l.a,{to:r},n)),a&&o.createElement(h,{dangerouslySetInnerHTML:{__html:a},className:"excerpt"}),null==c?null:o.createElement(w,{className:"post_tags"},c.map(function(t,e){return o.createElement(l.a,{key:e,to:"/tags/"+i()(t)+"/"},"#"+t)})))))};y.defaultProps={imageType:"fluid"};e.a=y}}]);
//# sourceMappingURL=component---src-templates-tags-tsx-13f02b13238433785a94.js.map