(this.webpackJsonpreact_websocket_netronix=this.webpackJsonpreact_websocket_netronix||[]).push([[0],{14:function(t,e,s){},15:function(t,e,s){},16:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n=s(0),a=s(1),c=s.n(a),r=s(8),i=s.n(r),o=(s(14),s(2)),j=s(3),d=s(4),h=s(6),u=s(5),l=(s(15),function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(){return Object(j.a)(this,s),e.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"header",children:Object(n.jsx)("table",{width:"100%",cellSpacing:"2px",children:Object(n.jsx)("tbody",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{width:"25%",children:"ID"}),Object(n.jsx)("td",{width:"15%",children:"Name"}),Object(n.jsx)("td",{width:"10%",children:"Unit"}),Object(n.jsx)("td",{width:"20%",children:"Date & Time"}),Object(n.jsx)("td",{children:"Measurements"})]})})})}),Object(n.jsx)("div",{className:"wrapper",children:this.props.messages.map((function(t){return Object(n.jsx)("table",{width:"100%",cellSpacing:"2px",children:Object(n.jsx)("tbody",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{width:"25%",className:t.name.substr(0,3).toLowerCase(),children:t._id},Date.now()*Math.random()),Object(n.jsx)("td",{width:"15%",children:t.name},Date.now()*Math.random()),Object(n.jsx)("td",{width:"10%",children:t.unit},Date.now()*Math.random()),Object(n.jsx)("td",{width:"20%",className:t.blink,children:t.timeStamp},Date.now()*Math.random()),Object(n.jsx)("td",{className:t.blink,children:t.measurements},Date.now()*Math.random())]},Date.now()*Math.random())},Date.now()*Math.random())},Date.now()*Math.random())}))})]})}}]),s}(a.Component)),b=(s(16),function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(){return Object(j.a)(this,s),e.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){var t=this.props.status,e=t.server,s=t.info,a=t.error?"fail":"good";return Object(n.jsxs)("footer",{children:[Object(n.jsxs)("span",{children:["Server: ",Object(n.jsx)("span",{className:"primary",children:e})]}),Object(n.jsxs)("span",{children:["Status: ",Object(n.jsxs)("span",{className:a,children:[s,"\xa0"]})]}),Object(n.jsxs)("span",{children:["Copyright: ",Object(n.jsx)("span",{className:"primary",children:"\xa9 Netronix, 2020\xa0\xa0"})]})]})}}]),s}(a.Component)),m=function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(j.a)(this,s),(n=e.call(this,t)).state={socket:"wss://jsdemo.envdev.io/ws",messages:[],status:{server:"",info:"",error:!1}},n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var t=this;this.socket=new WebSocket(this.state.socket),this.setState({status:Object(o.a)(Object(o.a)({},this.state.status),{},{server:this.state.socket})}),this.socket.onopen=function(){t.setState({status:Object(o.a)(Object(o.a)({},t.state.status),{},{info:"Connected",error:!1})})},this.socket.onmessage=function(e){var s=JSON.parse(e.data);s.map((function(t,e){var s="",n="";return t.measurements.forEach((function(t){var e=new Date(1e3*t[0]);n="".concat(e.toLocaleString()),s="".concat(t[1])})),t.measurements=s,t.timeStamp=n,t})),s.filter((function(t,e){return s.indexOf(t._id)===e}));var n=t.state.messages.slice();n.map((function(t){return t.blink=""}));for(var a=0;a<s.length;a++){for(var c=!1,r=0;r<n.length;r++)s[a]._id===n[r]._id&&(s[a].timeStamp&&s[a].measurements&&(n[r].timeStamp=s[a].timeStamp,n[r].measurements=s[a].measurements,n[r].unit=s[a].unit,n[r].blink="blink"),c=!0);c||n.push(s[a])}t.setState({messages:n})},this.socket.onerror=function(e){t.setState({status:Object(o.a)(Object(o.a)({},t.state.status),{},{info:"Socket encountered error: ".concat(e.message,". Closing socket"),error:!0})}),t.socket.close()},this.socket.onclose=function(e){e.wasClean?t.setState({status:Object(o.a)(Object(o.a)({},t.state.status),{},{info:"Socket was closed clearly, code=".concat(e.code),error:!0})}):t.setState({status:Object(o.a)(Object(o.a)({},t.state.status),{},{info:"The connection was lost",error:!0})})}}},{key:"render",value:function(){return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(l,{messages:this.state.messages}),Object(n.jsx)(b,{status:this.state.status})]})}}]),s}(c.a.Component);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f9ceea18.chunk.js.map