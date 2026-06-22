export default {
  common: {
    title: '状态监控',
    refreshIn: '刷新时间',
    refresh: '刷新',
    noData: '暂无数据',
    loading: '加载中...'
  },
  header: {
    logo: 'Logo'
  },
  stats: {
    totalWebsites: '监控网站',
    allWebsites: '全部网站',
    normalWebsites: '正常网站',
    accessNormal: '访问正常',
    abnormalWebsites: '异常网站',
    accessAbnormal: '访问异常',
    avgResponse: '平均响应',
    networkLatency: '网络延迟',
    unit: 'ms'
  },
  card: {
    avgResponseTime: '平均响应时间',
    last24Hours: '最近24小时',
    avgUptime: '平均运行时间',
    lastDays: '最近{days}天',
    downtimeRecords: '故障记录',
    noRecentDowntime: '近期无故障记录',
    duration: '持续时间',
    responseTimeTrend: '响应时间趋势',
    daysAgo: '30天前',
    today: '今日',
    noDowntime: '运行正常',
    downtimeInfo: '最近{days}天 {count} 次故障，总计{duration}',
    currentOffline: '当前离线'
  },
  status: {
    online: '在线',
    paused: '暂停',
    preparing: '准备中',
    offline: '离线'
  },
  error: {
    timeout: '请求超时，请检查网络连接后重试',
    fetchFailed: '获取监控数据失败，请稍后重试'
  },
  errorMessages: {
    333333: '连接超时',
    444444: '无响应',
    100001: 'DNS解析失败',
    98: '离线状态',
    99: '失联状态',
    default: '连接异常'
  },
  footer: {
    version: '版本',
    poweredBy: '基于',
    uptimeRobot: 'UptimeRobot',
    apiInterface: '接口',
    checkFrequency: '检测频率 5 分钟',
    copyright: '版权所有',
    duration: '约{hours}小时',
    hours: '{h}小时',
    minutes: '{m}分钟',
    seconds: '{s}秒'
  },
  monitorType: {
    1: 'HTTPS',
    2: 'Keyword',
    3: 'PING',
    4: 'Port',
    default: 'HTTP'
  }
}