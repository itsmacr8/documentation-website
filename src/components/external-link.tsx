import React from 'react';
import {
  FiExternalLink,
} from 'react-icons/fi';

interface ExternalLinkType {
  to: string;
  label?: string;
  nofollow?: boolean;
}

const ExternalLink = ({
  to,
  label = '',
  nofollow = false,
}: ExternalLinkType,) => <a
  className="external-link"
  href={to}
  target='_blank'
  rel={'noreferrer' + (nofollow ? ' nofollow' : '')}
>
  {label || to.replace(/^https?:\/\//ui, '',)}
  <FiExternalLink className="external-link-icon"/>
</a>;

export default ExternalLink;
