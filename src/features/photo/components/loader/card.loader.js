import React from 'react';
import ContentLoader, {Rect, Circle, Path} from 'react-content-loader/native';
import {Theme} from '@common/theme';

export const CategoryCardLoader = ({...props}) => (
  <ContentLoader
    speed={2}
    width={90}
    height={120}
    viewBox="0 0 90 120"
    opacity={0.5}
    backgroundColor={Theme.colors.secondary}
    foregroundColor={Theme.colors.primary}
    {...props}>
    <Rect x="14" y="7" rx="0" ry="0" width="3" height="0" />
    <Rect x="-1" y="3" rx="0" ry="0" width="90" height="120" />
  </ContentLoader>
);

export const ProductCardLoader = props => (
  <ContentLoader
    speed={2}
    width={340}
    opacity={0.6}
    height={108}
    viewBox="0 0 340 108"
    backgroundColor={Theme.colors.primary}
    foregroundColor={Theme.colors.secondary}
    {...props}>
    <Rect x="5" y="11" rx="0" ry="0" width="60" height="71" />
    <Rect x="81" y="17" rx="0" ry="0" width="77" height="11" />
    <Rect x="83" y="70" rx="0" ry="0" width="103" height="8" />
    <Rect x="166" y="17" rx="0" ry="0" width="77" height="11" />
    <Rect x="82" y="45" rx="0" ry="0" width="77" height="11" />
  </ContentLoader>
);

export const ProductDetailInfoLoader = props => (
  <ContentLoader
    speed={2}
    width={340}
    opacity={0.5}
    height={340}
    viewBox="0 0 340 340"
    backgroundColor={Theme.colors.primary}
    foregroundColor={Theme.colors.secondary}
    {...props}>
    <Rect x="23" y="10" rx="0" ry="0" width="77" height="11" />
    <Rect x="24" y="40" rx="0" ry="0" width="103" height="8" />
    <Rect x="108" y="10" rx="0" ry="0" width="77" height="11" />
    <Circle cx="269" cy="30" r="19" />
    <Rect x="24" y="82" rx="0" ry="0" width="109" height="17" />
    <Rect x="40" y="125" rx="0" ry="0" width="101" height="7" />
    <Rect x="152" y="125" rx="0" ry="0" width="101" height="7" />
    <Rect x="40" y="142" rx="0" ry="0" width="101" height="7" />
    <Rect x="153" y="142" rx="0" ry="0" width="101" height="7" />
    <Rect x="40" y="161" rx="0" ry="0" width="101" height="7" />
    <Rect x="152" y="161" rx="0" ry="0" width="101" height="7" />
    <Rect x="40" y="178" rx="0" ry="0" width="101" height="7" />
    <Rect x="153" y="178" rx="0" ry="0" width="101" height="7" />
    <Rect x="24" y="214" rx="0" ry="0" width="109" height="17" />
    <Rect x="35" y="258" rx="0" ry="0" width="91" height="9" />
    <Rect x="135" y="257" rx="0" ry="0" width="91" height="9" />
    <Rect x="85" y="280" rx="0" ry="0" width="91" height="9" />
    <Rect x="192" y="280" rx="0" ry="0" width="91" height="9" />
    <Rect x="35" y="301" rx="0" ry="0" width="91" height="9" />
    <Rect x="135" y="300" rx="0" ry="0" width="91" height="9" />
    <Rect x="85" y="323" rx="0" ry="0" width="91" height="9" />
    <Rect x="192" y="323" rx="0" ry="0" width="91" height="9" />
  </ContentLoader>
);

export const ImageProductLoader = props => (
  <ContentLoader
    speed={2}
    width={230}
    opacity={0.7}
    height={160}
    viewBox="0 0 230 160"
    backgroundColor="#e7ce9c"
    foregroundColor="#484e46"
    {...props}>
    <Rect x="0" y="0" rx="0" ry="0" width="230" height="160" />
  </ContentLoader>
);
