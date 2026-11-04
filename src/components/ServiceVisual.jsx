import './ServiceVisual.css'

function Window({ title, children }) {
  return (
    <div className="sv-window">
      <div className="sv-window__bar">
        <span className="sv-dot" />
        <span className="sv-dot" />
        <span className="sv-dot" />
        <span className="sv-window__title">{title}</span>
      </div>
      <div className="sv-window__body">{children}</div>
    </div>
  )
}

function Roadmap() {
  const rows = [
    { label: 'Discovery', start: 0, span: 2 },
    { label: 'Strategy', start: 1, span: 2 },
    { label: 'UX & Design', start: 2, span: 3 },
    { label: 'MVP Build', start: 4, span: 4 },
    { label: 'Launch', start: 7, span: 1 },
  ]
  return (
    <Window title="Tech Roadmap · Q1–Q2">
      <div className="sv-gantt">
        <div className="sv-gantt__weeks">
          {Array.from({ length: 8 }, (_, i) => (
            <span key={i}>W{i + 1}</span>
          ))}
        </div>
        {rows.map((r, i) => (
          <div className="sv-gantt__row" key={r.label}>
            <span className="sv-gantt__label">{r.label}</span>
            <div className="sv-gantt__track">
              <span
                className={`sv-gantt__bar ${i === 3 ? 'is-hot' : ''}`}
                style={{ left: `${(r.start / 8) * 100}%`, width: `${(r.span / 8) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="sv-chips">
        <span className="sv-chip sv-chip--ok">Scope locked</span>
        <span className="sv-chip">Budget: within plan</span>
      </div>
    </Window>
  )
}

function Product() {
  return (
    <Window title="app/dashboard.jsx">
      <div className="sv-split">
        <pre className="sv-code">
          <span className="k">export default</span> <span className="f">function</span> Dashboard() {'{'}
          {'\n  '}
          <span className="k">const</span> orders = useOrders()
          {'\n  '}
          <span className="k">return</span> (
          {'\n    '}&lt;<span className="t">Layout</span>&gt;
          {'\n      '}&lt;<span className="t">Stats</span> data={'{'}orders{'}'} /&gt;
          {'\n      '}&lt;<span className="t">OrdersTable</span> /&gt;
          {'\n    '}&lt;/<span className="t">Layout</span>&gt;
          {'\n  '})
          {'\n}'}
        </pre>
        <div className="sv-phone">
          <span className="sv-phone__notch" />
          <span className="sv-skel sv-skel--title" />
          <div className="sv-phone__stats">
            <span />
            <span />
          </div>
          <span className="sv-skel" />
          <span className="sv-skel" />
          <span className="sv-skel sv-skel--short" />
          <span className="sv-phone__btn" />
        </div>
      </div>
      <div className="sv-chips">
        <span className="sv-chip sv-chip--ok">Deployed · v1.2</span>
        <span className="sv-chip">Web · iOS · Android</span>
      </div>
    </Window>
  )
}

function AI() {
  return (
    <Window title="Smart Assistant">
      <div className="sv-chat">
        <p className="sv-msg sv-msg--user">Which customers are likely to reorder this month?</p>
        <p className="sv-msg sv-msg--ai">
          <span className="sv-spark">✦</span> 142 customers match. Top segment: repeat buyers in
          Mumbai &amp; Pune. Want me to draft a WhatsApp campaign?
        </p>
        <p className="sv-msg sv-msg--user">Yes, draft it.</p>
        <p className="sv-msg sv-msg--ai sv-typing">
          <span />
          <span />
          <span />
        </p>
      </div>
    </Window>
  )
}

function Automation() {
  const nodes = [
    { label: 'New order', tag: 'Trigger' },
    { label: 'Update inventory', tag: 'Action' },
    { label: 'Send invoice', tag: 'Action' },
    { label: 'Notify team', tag: 'Slack' },
  ]
  return (
    <Window title="Workflow · Order to Invoice">
      <div className="sv-flow">
        {nodes.map((n, i) => (
          <div className="sv-flow__step" key={n.label}>
            <div className={`sv-node ${i === 0 ? 'is-trigger' : ''}`}>
              <span className="sv-node__tag">{n.tag}</span>
              {n.label}
            </div>
            {i < nodes.length - 1 && <span className="sv-flow__line" />}
          </div>
        ))}
      </div>
      <div className="sv-chips">
        <span className="sv-chip sv-chip--ok">Running</span>
        <span className="sv-chip">1,284 runs this week</span>
      </div>
    </Window>
  )
}

function Data() {
  const bars = [38, 52, 46, 64, 58, 76, 88]
  return (
    <Window title="Insights · Revenue">
      <div className="sv-kpis">
        <div>
          <span>Revenue</span>
          <strong>₹18.4L</strong>
          <em>+12.6%</em>
        </div>
        <div>
          <span>Orders</span>
          <strong>2,416</strong>
          <em>+8.1%</em>
        </div>
        <div>
          <span>Repeat rate</span>
          <strong>41%</strong>
          <em>+3.4%</em>
        </div>
      </div>
      <div className="sv-bars">
        {bars.map((h, i) => (
          <span key={i} style={{ height: `${h}%` }} className={i === bars.length - 1 ? 'is-hot' : ''} />
        ))}
      </div>
    </Window>
  )
}

function Mentorship() {
  const items = [
    { done: true, text: 'Choose the right tech stack' },
    { done: true, text: 'Review vendor proposal' },
    { done: false, text: 'Hiring plan for first engineer' },
    { done: false, text: 'Security & data basics' },
  ]
  return (
    <Window title="Mentorship · Session 4 of 8">
      <div className="sv-call">
        <div className="sv-call__tile">
          <span className="sv-avatar">BT</span>
          <small>Your tech partner</small>
        </div>
        <div className="sv-call__tile">
          <span className="sv-avatar sv-avatar--alt">You</span>
          <small>Founder</small>
        </div>
      </div>
      <ul className="sv-checklist">
        {items.map((it) => (
          <li key={it.text} className={it.done ? 'is-done' : ''}>
            <span className="sv-check" />
            {it.text}
          </li>
        ))}
      </ul>
    </Window>
  )
}

const visuals = { roadmap: Roadmap, product: Product, ai: AI, automation: Automation, data: Data, mentorship: Mentorship }

export default function ServiceVisual({ variant }) {
  const Visual = visuals[variant]
  return <Visual />
}
