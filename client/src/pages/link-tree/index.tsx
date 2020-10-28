import React from 'react';
import { LogoWeeberDark } from '../../assets';

const LinkTree = () => {
  return (
    <div className="link-tree-page">
      <div className="logo-wrapper">
        <LogoWeeberDark className="logo" />
      </div>
      <span className="title">@weeber_id</span>
      <ul className="link-trees">
        <li className="link-tree">Official Website</li>
        <li className="link-tree">Order Kaos Weeber Apparel via WA</li>
        <li className="link-tree">Instagram Weeber Apparel</li>
      </ul>
    </div>
  );
};

export default LinkTree;
