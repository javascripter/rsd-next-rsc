import {html,css} from 'react-strict-dom'

const styles = css.create({
  h1: {
    fontSize: 16,
  },
  p: {
    marginTop: 16
  }
})

export default async function Page() {
  return <html.main>
      <html.h1 style={styles.h1}>Page</html.h1>
      <html.p style={styles.p}>Content</html.p>
    </html.main>
}
