import App from './components/app'

export default {
  app: {
    element: App,
    props: [
      ['data', 'index']
    ],
    children: []
  },
  data: {
    index: 'general'
  }
}