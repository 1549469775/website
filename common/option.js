export default (realData, str, ctrlDown, cb) => {
  return {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: [{
      type: 'tree',
      roam: true,
      data: [realData],
      symbol: 'emptycircle',
      left: '3%',
      right: '3%',
      top: '8%',
      bottom: '20%',
      // 缩放
      zoom: 1,
      diyExpand: (name, isExpand) => {
        if (ctrlDown) {
          return !isExpand
        } else {
          // 收缩
          cb && cb(isExpand);
          return isExpand
        }
      },
      symbolSize: (v, param) => {
        if (str && param.name.match(str)) {
          return 35
        } else {
          return 20;
        }
      },
      symbol: (v, param) => {
        if (Number(param.name) % 2 == 0) {
          return 'image://https://cn.bing.com/th?id=OIP.1e3YVW946dgy5uJH764JXwHaFj&pid=Api&rs=1'
        } else {
          return 'emptycircle';
        }
      },
      symbolKeepAspect: false,
      layout: 'orthogonal',
      orient: 'TB',

      expandAndCollapse: true,
      initialTreeDepth: -1,
      label: {
        normal: {
          show: true,
          position: 'top',
          verticalAlign: 'middle',
          align: 'middle',
          fontSize: 20,
          distance: 10,
          formatter: function (param) {
            if (str && param.name.match(str)) {
              return '{a|' + param.name + '}'
            } else {
              return param.name;
            }
          },
          rich: {
            a: {
              color: 'red',
              fontSize: 26,
              fontWeight: 'bolder',
              lineHeight: 10
            }
          }
        },
        // 高亮悬浮
        emphasis: {
          fontSize: 26,
          distance: 10,
          fontWeight: 'bolder',
          color: 'red'
        }
      },

      leaves: {
        label: {
          normal: {
            fontSize: 20,
            show: true,
            distance: 10,
            position: 'top',
            verticalAlign: 'middle',
            align: 'middle'
          }
        }
      },
      // animation: false,
      animationDurationUpdate: 750
    }]
  }
}