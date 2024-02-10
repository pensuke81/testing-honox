import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'

const className = css`
  font-family: sans-serif;
`

export default createRoute(async (c) => {
  const name = c.req.query('name') ?? 'Hono'
  const res = await fetch('https://httpbin.org/headers')
  const data = await res.json()
  return c.render(
    <div class={className}>
      <h1>Hello, {name}!</h1>
      <p>Headers from httpbin:</p>
      <pre>{JSON.stringify(data.headers, null, 2)}</pre>
      <Counter />
    </div>,
    { title: name }
  )
})
