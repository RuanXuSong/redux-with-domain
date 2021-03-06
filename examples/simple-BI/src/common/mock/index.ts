// 数据表的mock数据
export const MOCK_DATA: any = {
  dataset_1: [
    {
      '1-1': '家具类',
      '1-2': '沙发',
      '1-3': '2020-01-01',
      '1-4': '张三',
      '1-5': '20000',
      '1-6': '2',
      '1-7': '浙江省',
      '1-8': '10000'
    },
    {
      '1-1': '生鲜类',
      '1-2': '火龙果',
      '1-3': '2020-01-02',
      '1-4': '李四',
      '1-5': '1000',
      '1-6': '20',
      '1-7': '黑龙江省',
      '1-8': '50'
    },
    {
      '1-1': '数码类',
      '1-2': '手机',
      '1-3': '2020-01-03',
      '1-4': '王五',
      '1-5': '6999',
      '1-6': '1',
      '1-7': '上海市',
      '1-8': '6999'
    },
    {
      '1-1': '军火类',
      '1-2': '航空母舰',
      '1-3': '2020-01-05',
      '1-4': '赵四',
      '1-5': '998',
      '1-6': '1',
      '1-7': '浙江省',
      '1-8': '998'
    }
  ],
  dataset_2: [
    {
      '2-1': '1',
      '2-2': '淘淘网',
      '2-3': '2020-01-01',
      '2-5': 30000,
      '2-4': '主页'
    },
    {
      '2-1': '1',
      '2-2': '淘淘网',
      '2-3': '2020-01-01',
      '2-5': 60000,
      '2-4': '详情页'
    },
    {
      '2-1': '1',
      '2-2': '淘淘网',
      '2-3': '2020-01-02',
      '2-5': 40000,
      '2-4': '主页'
    },
    {
      '2-1': '1',
      '2-2': '淘淘网',
      '2-3': '2020-01-02',
      '2-5': 70000,
      '2-4': '详情页'
    },
    {
      '2-1': '1',
      '2-2': '淘淘网',
      '2-3': '2020-01-03',
      '2-5': 4500,
      '2-4': '主页'
    },
    {
      '2-1': '1',
      '2-2': '淘淘网',
      '2-3': '2020-01-03',
      '2-5': 60000,
      '2-4': '详情页'
    },
    {
      '2-1': '1',
      '2-2': '淘淘网',
      '2-3': '2020-01-04',
      '2-5': 50000,
      '2-4': '主页'
    },
    {
      '2-1': '1',
      '2-2': '淘淘网',
      '2-3': '2020-01-04',
      '2-5': 90000,
      '2-4': '详情页'
    }
  ],
  dataset_3: [
    {
      '3-1': 110.0,
      '3-2': '123234',
      '3-3': '2020-01-01',
      '3-4': '有好货超市',
      '3-5': '浙江省',
      '3-6': '2',
      '3-7': '杭州市',
      '3-8': '黄龙商圈'
    },
    {
      '3-1': 210.0,
      '3-2': '423424',
      '3-3': '2020-01-02',
      '3-4': '盒马鲜生',
      '3-5': '浙江省',
      '3-6': '2',
      '3-7': '杭州市',
      '3-8': '湖滨商圈'
    },
    {
      '3-1': 233.0,
      '3-2': '423424',
      '3-3': '2020-01-03',
      '3-4': '银泰',
      '3-5': '浙江省',
      '3-6': '2',
      '3-7': '杭州市',
      '3-8': '武林商圈'
    },
    {
      '3-1': 310.0,
      '3-2': '4234324',
      '3-3': '2020-01-04',
      '3-4': '自动售货机',
      '3-5': '浙江省',
      '3-6': '2',
      '3-7': '杭州市',
      '3-8': '下沙商圈'
    }
  ]
}

// Mock一个工作簿信息
export const WORK_BOOK = {
  id: '1',
  name: 'Simple BI 工作簿',
  datasetIdList: ['dataset_1', 'dataset_2', 'dataset_3'],
  reportIdList: ['report_1', 'report_2', 'report_3']
}

// 可用数据集的列表
export const DATASET_LIST = [
  {
    id: 'dataset_1',
    name: '电商销售',
    type: 'sql',
    fields: [
      {
        id: '1-1',
        name: '商品类别'
      },
      {
        id: '1-2',
        name: '商品名称'
      },
      {
        id: '1-5',
        name: '销售额'
      },
      {
        id: '1-3',
        name: '日期'
      },
      {
        id: '1-4',
        name: '客户'
      },
      {
        id: '1-6',
        name: '销售数量'
      },
      {
        id: '1-7',
        name: '客户省份'
      },
      {
        id: '1-8',
        name: '单价'
      }
    ]
  },
  {
    id: 'dataset_2',
    name: '访问记录',
    type: 'sql',
    fields: [
      {
        id: '2-1',
        name: '产品id'
      },
      {
        id: '2-2',
        name: '产品名称'
      },
      {
        id: '2-3',
        name: '日期'
      },
      {
        id: '2-4',
        name: '页面'
      },
      {
        id: '2-5',
        name: '访问计数'
      }
    ]
  },
  {
    id: 'dataset_3',
    name: '支付记录',
    type: 'sql',
    fields: [
      {
        id: '3-1',
        name: '支付金额'
      },
      {
        id: '3-2',
        name: '账号id'
      },
      {
        id: '3-3',
        name: '时间'
      },
      {
        id: '3-4',
        name: '商户id'
      },
      {
        id: '3-5',
        name: '商户省份'
      },
      {
        id: '3-7',
        name: '商户城市'
      },
      {
        id: '3-8',
        name: '商户商区'
      },
      {
        id: '3-6',
        name: '账号等级'
      }
    ]
  }
]

// 报表列表
export const REPORT_LIST = [
  {
    id: 'report_1',
    name: '电商销售分析报表',
    workbookId: '1'
  },
  {
    id: 'report_2',
    name: '网站访问分析报表',
    workbookId: '1'
  },
  {
    id: 'report_3',
    name: '支付数据分析报表',
    workbookId: '1'
  }
]

// 报表中的详情信息
export const REPORT_CHART_INFO = {
  report_1: [
    {
      id: 'chart_1',
      reportId: 'report_1',
      datasetId: 'dataset_1',
      name: '商品分类销售占比',
      attribute: [
        {
          group: '切片',
          max: 1,
          fields: ['1-1']
        },
        {
          group: '值',
          max: 1,
          fields: ['1-5']
        }
      ],
      type: 'pie'
    }
  ],
  report_2: [
    {
      id: 'chart_2',
      reportId: 'report_2',
      datasetId: 'dataset_2',
      name: '图表2',
      attribute: [
        {
          group: 'X轴',
          max: 1,
          fields: ['2-4']
        },
        {
          group: 'Y轴',
          max: 1,
          fields: ['2-5']
        }
      ],
      type: 'bar'
    },
    {
      id: 'chart_3',
      reportId: 'report_2',
      datasetId: 'dataset_2',
      name: '网站 UV 趋势',
      attribute: [
        {
          group: 'X轴',
          max: 1,
          fields: ['2-3']
        },
        {
          group: 'Y轴',
          max: 1,
          fields: ['2-5']
        }
      ],
      type: 'line'
    }
  ],
  report_3: [
    {
      id: 'chart_4',
      reportId: 'report_3',
      datasetId: 'dataset_3',
      name: '支付笔数趋势',
      attribute: [
        {
          group: 'X轴',
          max: 1,
          fields: ['3-3']
        },
        {
          group: 'Y轴',
          max: 1,
          fields: ['3-1']
        }
      ],
      type: 'line'
    },
    {
      id: 'chart_5',
      reportId: 'report_3',
      datasetId: 'dataset_3',
      name: '商圈支付占比',
      attribute: [
        {
          group: '切片',
          max: 1,
          fields: ['3-8']
        },
        {
          group: '值',
          fields: ['3-1']
        }
      ],
      type: 'pie'
    },
    {
      id: 'chart_6',
      reportId: 'report_3',
      datasetId: 'dataset_3',
      name: '商家成交 Top 4',
      attribute: [
        {
          group: 'X轴',
          max: 1,
          fields: ['3-4']
        },
        {
          group: 'Y轴',
          max: 1,
          fields: ['3-1']
        }
      ],
      type: 'bar'
    }
  ]
}
