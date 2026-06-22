export default {
  common: {
    title: 'Status Monitor',
    refreshIn: 'Refresh in',
    refresh: 'Refresh',
    noData: 'No Data',
    loading: 'Loading...'
  },
  header: {
    logo: 'Logo'
  },
  stats: {
    totalWebsites: 'Total Websites',
    allWebsites: 'All Websites',
    normalWebsites: 'Normal Websites',
    accessNormal: 'Access Normal',
    abnormalWebsites: 'Abnormal Websites',
    accessAbnormal: 'Access Abnormal',
    avgResponse: 'Avg Response',
    networkLatency: 'Network Latency',
    unit: 'ms'
  },
  card: {
    avgResponseTime: 'Avg Response Time',
    last24Hours: 'Last 24 Hours',
    avgUptime: 'Avg Uptime',
    lastDays: 'Last {days} Days',
    downtimeRecords: 'Downtime Records',
    noRecentDowntime: 'No Recent Downtime',
    duration: 'Duration',
    responseTimeTrend: 'Response Time Trend',
    daysAgo: '30 Days Ago',
    today: 'Today',
    noDowntime: 'Running Normally',
    downtimeInfo: '{count} downtime(s) in last {days} days, total {duration}',
    currentOffline: 'Currently Offline'
  },
  status: {
    online: 'Online',
    paused: 'Paused',
    preparing: 'Preparing',
    offline: 'Offline'
  },
  error: {
    timeout: 'Request timeout, please check your network connection and try again',
    fetchFailed: 'Failed to fetch monitoring data, please try again later'
  },
  errorMessages: {
    333333: 'Connection Timeout',
    444444: 'No Response',
    100001: 'DNS Resolution Failed',
    98: 'Offline Status',
    99: 'Disconnected Status',
    default: 'Connection Error'
  },
  footer: {
    version: 'Version',
    poweredBy: 'Powered by',
    uptimeRobot: 'UptimeRobot',
    apiInterface: 'API',
    checkFrequency: 'Check frequency 5 minutes',
    copyright: 'Copyright',
    duration: 'About {hours} hours',
    hours: '{h}h',
    minutes: '{m}m',
    seconds: '{s}s'
  },
  monitorType: {
    1: 'HTTPS',
    2: 'Keyword',
    3: 'PING',
    4: 'Port',
    default: 'HTTP'
  }
}