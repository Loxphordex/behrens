import * as React from 'react'
import { History } from 'history'
import { FontSizes } from '@uifabric/fluent-theme/lib/fluent/FluentType';

interface LandingProps {
  history: History
}

export const LandingPage: React.FC<LandingProps> = ({ history }) => {
  return(
    <section>
      <div style={{ fontSize: FontSizes.size68, textAlign: "center", marginTop: "30vh" }}>Behrens</div>
      <div style={{ fontSize: FontSizes.size32, textAlign: "center" }}>Home | Life</div>
    </section>
  )
}