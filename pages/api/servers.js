export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  res.status(200).json([
    { id: 's1', name: 'Auth Service', ip: '10.0.0.1', status: 'Up', responseTimeMs: 120, uptimePercent: 99.9, lastChecked: new Date().toISOString() },
    { id: 's2', name: 'API Gateway', ip: '10.0.0.2', status: 'Up', responseTimeMs: 80, uptimePercent: 99.5, lastChecked: new Date().toISOString() }
  ])
}