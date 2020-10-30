import React from 'react';

interface LinkTreeListProp extends React.Attributes {
  url?: string;
  title?: string;
  onClick?(): void;
}

const LinkTreeList: React.FC<LinkTreeListProp> = ({
  url,
  title,
  key,
  onClick
}) => {
  return (
    <a
      onClick={() => (onClick ? onClick() : undefined)}
      key={key}
      className="link-tree-link"
      href={url}
      rel="nofollow"
    >
      <li className="link-tree">{title}</li>
    </a>
  );
};

export default LinkTreeList;
