(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{296:function(t,e,a){t.exports={my_posts:"MyPosts_my_posts__KrrwU",new_post:"MyPosts_new_post__1PnnO"}},297:function(t,e,a){t.exports={item:"Post_item__ihtu9",like:"Post_like__oViQh"}},298:function(t,e,a){t.exports={main_img:"ProfileInfo_main_img__7BfSS",avatar_content:"ProfileInfo_avatar_content__2wWZb",logo:"ProfileInfo_logo__2_ojy",about:"ProfileInfo_about__ogyhT"}},299:function(t,e,a){t.exports={statusWrapper:"ProfileStatus_statusWrapper__2EA8v"}},300:function(t,e,a){"use strict";a.r(e);var s=a(33),n=a(34),r=a(36),o=a(35),u=a(37),c=a(0),l=a.n(c),i=a(296),p=a.n(i),m=a(297),f=a.n(m),d=function(t){var e=t.postData;return l.a.createElement("div",{className:f.a.item},l.a.createElement("span",{className:f.a.like},e.likes),e.message)},_=a(124),b=a(125),v=a(75),E=a(65),h=Object(v.a)(10),g=l.a.memo(function(t){var e=t.posts.map(function(t){return l.a.createElement(d,{key:t.id,postData:t})});return l.a.createElement("div",{className:p.a.my_posts},l.a.createElement(P,{onSubmit:function(e){var a=e.newPostText;t.addPost(a)}}),l.a.createElement("div",{className:p.a.posts},e))}),P=Object(b.a)({form:"postForm"})(function(t){return l.a.createElement("form",{onSubmit:t.handleSubmit,className:p.a.new_post},l.a.createElement(_.a,{component:E.b,name:"newPostText",placeholder:"Post message",validate:[v.b,h]}),l.a.createElement("button",{className:"btn"},"Add Post"))}),j=g,O=a(95),S=a(12),N=Object(S.b)(function(t){return{posts:t.profilePage.posts}},{addPost:O.a})(j),w=a(40),y=a(298),k=a.n(y),I=a(39),x=a(126),W=a(299),A=a.n(W),D=function(t){var e=Object(c.useState)(!1),a=Object(x.a)(e,2),s=a[0],n=a[1],r=Object(c.useState)(t.status),o=Object(x.a)(r,2),u=o[0],i=o[1];Object(c.useEffect)(function(){i(t.status)},[t.status]);return l.a.createElement(l.a.Fragment,null,!s&&l.a.createElement("div",{className:A.a.statusWrapper},l.a.createElement("p",{onDoubleClick:function(){n(!0)}},t.status||"-----")),s&&l.a.createElement("div",{className:A.a.statusWrapper},l.a.createElement("input",{onChange:function(t){i(t.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),t.updateStatus(u)},value:u})))},T=function(t){if(!t.profile)return l.a.createElement(I.a,null);var e=t.profile.contacts,a=[];for(var s in e)a=[].concat(Object(w.a)(a),[{prop:e[s]}]);return l.a.createElement("div",null,l.a.createElement("div",{className:k.a.avatar_content},l.a.createElement("div",{className:k.a.logo},l.a.createElement("img",{src:t.profile.photos.large?t.profile.photos.large:"https://png.pngtree.com/svg/20161212/f93e57629c.svg",alt:"Photo"})),l.a.createElement("div",{className:k.a.about},l.a.createElement("span",{className:k.a.fullName},t.profile.fullName),l.a.createElement(D,{status:t.status,updateStatus:t.updateStatus}))),l.a.createElement("div",{className:k.a.contacts},a.map(function(t){return l.a.createElement("div",{className:k.a.contacts__item},l.a.createElement("span",null,Object.entries(t)[0],":"),l.a.createElement("span",null,Object.entries(t)[1]))})),l.a.createElement("div",{className:k.a.job}))},C=function(t){var e=t.profile,a=t.status,s=t.updateStatus;return l.a.createElement("div",null,l.a.createElement(T,{profile:e,status:a,updateStatus:s}),l.a.createElement(N,null))},F=a(7),M=a(29),U=function(t){function e(){return Object(s.a)(this,e),Object(r.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(n.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return l.a.createElement(C,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(l.a.Component);e.default=Object(F.d)(M.g,Object(S.b)(function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}},{getProfile:O.c,getStatus:O.d,updateStatus:O.e}))(U)}}]);
//# sourceMappingURL=3.b60b8676.chunk.js.map