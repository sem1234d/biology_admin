(window.webpackJsonpbiology_admin=window.webpackJsonpbiology_admin||[]).push([[0],{162:function(e,t,n){e.exports=n(264)},264:function(e,t,n){"use strict";n.r(t);n(163),n(189),n(191),n(192),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231);var a=n(0),o=n.n(a),r=n(42),l=n.n(r),i=n(41),c=n.n(i),s=n(32),m=n(33),h=n(35),u=n(34),p=n(36),f=n(40),b=n(3),d=(n(53),n(44)),E=n.n(d),v=n(66),g=(new f.VKMiniAppAPI,function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={list:null},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.post("https://bot-api-vk.000webhostapp.com/Admin.php",JSON.stringify({type:"get_users"})).then((function(t){e.setState({list:t.data})}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b.k,{left:o.a.createElement(b.l,{onClick:this.props.back},o.a.createElement(E.a,null))},"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438"),null===this.state.list?o.a.createElement(b.m,{size:"large",style:{marginTop:30}}):o.a.createElement(b.i,null,this.state.list.map((function(e,t){return o.a.createElement(b.c,{key:t,before:o.a.createElement(b.a,{src:e.response[0].photo_200}),href:"https://vk.com/"+e.response[0].screen_name},e.response[0].first_name+" "+e.response[0].last_name)}))))}}]),t}(o.a.Component)),C=n(45),k=n(46),j=n(43),O=n(66),_=(new f.VKMiniAppAPI,function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e))).create=function(e){null!=n.props.id&&n.setState({form:Object(k.a)({},n.state.form,{test_id:n.props.id})}),O.post("https://bot-api-vk.000webhostapp.com/Admin.php",JSON.stringify({type:"insert_question",obj:n.state.form})).then((function(e){n.setState({form:Object(k.a)({},n.state.form,{answer_1:null,answer_2:null,answer_3:null,question:null})})}))},n.ok=function(){O.post("https://bot-api-vk.000webhostapp.com/Admin.php",JSON.stringify({type:"insert_test",obj:n.state.form})).then((function(e){}))},n.state={},n.onChange=n.onChange.bind(Object(j.a)(n)),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"onChange",value:function(e){var t=e.currentTarget,n=t.name,a=t.value;this.setState({form:Object(k.a)({},this.state.form,Object(C.a)({},n,a))})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b.k,{left:null==this.props.id?o.a.createElement(b.l,{onClick:this.props.back},o.a.createElement(E.a,null)):o.a.createElement("div",null)},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"),o.a.createElement(b.f,null,o.a.createElement(b.h,{value:this.props.id,top:"id \u0442\u0435\u0441\u0442\u0430",name:"id_test",bottom:"\u041b\u0443\u0447\u0448\u0435 \u043d\u0435 \u0442\u0440\u043e\u0433\u0430\u0442\u044c",onChange:this.onChange}),o.a.createElement(b.h,{top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430",name:"name",onChange:this.onChange}),o.a.createElement(b.g,{top:o.a.createElement(b.h,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441",value:this.state.form.question,name:"question",onChange:this.onChange})},o.a.createElement(b.h,{name:"answer_1",value:this.state.form.answer_1,placeholder:"\u0412\u0435\u0440\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",onChange:this.onChange}),o.a.createElement(b.h,{name:"answer_2",value:this.state.form.answer_2,placeholder:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",onChange:this.onChange}),o.a.createElement(b.h,{name:"answer_3",value:this.state.form.answer_3,placeholder:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",onChange:this.onChange})),o.a.createElement(b.b,{size:"xl",onClick:this.create},"+"),o.a.createElement(b.e,null,o.a.createElement(b.b,{level:"commerce",size:"xl",onClick:this.ok},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c!!"))))}}]),t}(o.a.Component)),w=n(66),y=(new f.VKMiniAppAPI,function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e))).submit=function(e){w.post("https://bot-api-vk.000webhostapp.com/Admin.php",JSON.stringify({type:"insert_theme",obj:n.state.form})).then((function(e){console.log(e),n.props.go(e.data)}))},n.state={},n.onChange=n.onChange.bind(Object(j.a)(n)),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"onChange",value:function(e){var t=e.currentTarget,n=t.name,a=t.value;this.setState({form:Object(k.a)({},this.state.form,Object(C.a)({},n,a))})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b.k,{left:o.a.createElement(b.l,{onClick:this.props.back},o.a.createElement(E.a,null))},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u043c\u044b"),o.a.createElement(b.f,null,o.a.createElement(b.h,{top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u043c\u044b",name:"name",onChange:this.onChange}),o.a.createElement(b.h,{top:"\u041a\u043b\u0430\u0441\u0441",name:"klass",onChange:this.onChange}),o.a.createElement(b.h,{top:"C\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0432\u0438\u0434\u0435\u043e",name:"video",onChange:this.onChange}),o.a.createElement(b.h,{top:"C\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0442\u0435\u043a\u0441\u0442",name:"doc",onChange:this.onChange}),o.a.createElement(b.h,{top:"\u0426\u0435\u043d\u0430",name:"price",onChange:this.onChange})),o.a.createElement(b.e,null,o.a.createElement(b.b,{size:"xl",onClick:this.submit},"\u0414\u0430\u043b\u044c\u0448\u0435")))}}]),t}(o.a.Component)),S=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={activePanel:"home",new_test_id:null},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(b.n,{activePanel:this.state.activePanel},o.a.createElement(b.j,{id:"home"},o.a.createElement(b.k,null,"\u041c\u0435\u043d\u044e"),o.a.createElement(b.d,{onClick:function(){return e.setState({activePanel:"users"})}},"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438"),o.a.createElement(b.d,{onClick:function(){return e.setState({activePanel:"creator_t"})}},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u043c\u044b"),o.a.createElement(b.d,{onClick:function(){return e.setState({activePanel:"test"})}},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"),o.a.createElement(b.d,null,"\u041f\u043e\u043a\u0443\u043f\u043a\u0438"),o.a.createElement(b.d,null,"\u041e\u0442\u0432\u0435\u0442\u044b \u0443\u0447\u0435\u043d\u0438\u043a\u043e\u0432")),o.a.createElement(b.j,{id:"users"},o.a.createElement(g,{back:function(){return e.setState({activePanel:"home"})}})),o.a.createElement(b.j,{id:"creator_t"},o.a.createElement(y,{back:function(){return e.setState({activePanel:"home"})},go:function(t,n){return e.setState({activePanel:"test",new_test_id:t})}})),o.a.createElement(b.j,{id:"test"},o.a.createElement(_,{id:this.state.new_test_id,back:function(){return e.setState({activePanel:"home"})}})))}}]),t}(o.a.Component);c.a.send("VKWebAppInit"),l.a.render(o.a.createElement(S,null),document.getElementById("root"))}},[[162,1,2]]]);
//# sourceMappingURL=main.35feff62.chunk.js.map