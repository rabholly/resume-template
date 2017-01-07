var separator = Vue.extend({
  template: '<hr style="FILTER: alpha(opacity=100,finishopacity=0,style=2)" width="100%" align="left" color=#666666 SIZE=3>'
});

var dotLine = Vue.extend({
  template: '<hr style="height:1px;border:none;border-top:1px dashed #BBBBBB;" width="100%" />'
});

var exprienceItem = Vue.extend({
  props: ['message'],
  template: '<li><div id="info-text">{{ message }}</div></li>'
});

var exprienceHeader = Vue.extend({
  template: '#experience-header-template',
  props: {
    period: String,
    position: String,
    company: String
  }
});

var exprienceInfo = Vue.extend({
  render: function(createElement) {
    return createElement(
      'ul', {
        style: {
          marginLeft: '-25px',
          marginTop: '5px'
        }
      },
      dataArray.map(function(item) {
        return createElement(exprienceItem, { props: { message: item } })
      })
    )
  }
});

var dataArray = ["nimei", "nimei"];
new Vue({
  el: '.container',
  components: {
    'exprience': {
      render: function(createElement) {
        return createElement(
          'div', [createElement(exprienceHeader, {
            props: {
              period: '2015.12~至今',
              position: '工程师',
              company: '啦啦啦啦'
            }
          }), createElement(exprienceInfo)]
        )
      }
    },
    'separator': separator,
    'dot-line': dotLine
  },
  data: {
    name: '小明',
    phone: '13412345678',
    mail: 'xiaoming@gmail.com'
  }
});
