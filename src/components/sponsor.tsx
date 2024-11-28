import ExternalLink from './external-link.tsx';
import Lang from './lang.tsx';
import React, {
  ReactNode,
} from 'react';
import languageKey from '../locales/language-key.ts';
import './sponsor.scss';
interface SponsorProps {
  img: ReactNode;
  lnkey: string;
  to: string;
  label: string;
  since: Date;
  until?: Date;
}

const Sponsor = ({
  img,
  lnkey,
  to,
  label,
  since,
  until
}: SponsorProps,) => {
  if (until) {
    return <div className={'card sponsor former'}>
      {img}
      <div key={lnkey}>
        <h2>
          <ExternalLink
            to={to}
            label={label}
            nofollow={true}
          />
        </h2>
        <p>{ since.toLocaleDateString() } - { until.toLocaleDateString() }</p>
        <p><Lang lnkey={`sponsors.${ lnkey }.intro` as languageKey}/></p>
        <p><Lang lnkey={`sponsors.${ lnkey }.sponsoring` as languageKey}/></p>
      </div>
    </div>;
  }
  return <div className={'card sponsor current'}>
    {img}
    <div key={lnkey}>
      <h2>
        <ExternalLink
          to={to}
          label={label}
        />
      </h2>
      <p>{ since.toLocaleDateString() } - <Lang lnkey={'sponsors.now'}/></p>
      <p><Lang lnkey={`sponsors.${ lnkey }.intro` as languageKey}/></p>
      <p><Lang lnkey={`sponsors.${ lnkey }.sponsoring` as languageKey}/></p>
    </div>
  </div>;
}

export default Sponsor;
