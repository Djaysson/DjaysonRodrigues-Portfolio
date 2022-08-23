import React from 'react';
import { Cloud, ICloud, renderSimpleIcon } from 'react-icon-cloud';
import {
  siJavascript,
  siHtml5,
  siCss3,
  siStyledcomponents,
  siTypescript,
  siBootstrap,
  siSass,
  siReact,
  siNextdotjs,
  siRedux,
  siReduxsaga,
  siFigma,
  siGit,
  siGithub,
  siJquery,
  siVisualstudiocode,
  siLinux,
  siYarn,
  siNpm,
  siVercel
} from 'simple-icons/icons';
import { Container } from './styles';

const cloudProps: Omit<ICloud, 'children'> = {
  id: 'stable-id-for-csr-ssr',
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  canvasProps: {
    style: {
      maxWidth: '100%'
    }
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2.5,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000'
  }
};

const icons = [
  siJavascript,
  siHtml5,
  siCss3,
  siStyledcomponents,
  siTypescript,
  siBootstrap,
  siSass,
  siReact,
  siNextdotjs,
  siRedux,
  siReduxsaga,
  siFigma,
  siGit,
  siGithub,
  siJquery,
  siVisualstudiocode,
  siLinux,
  siYarn,
  siNpm,
  siVercel
].map(icon => {
  return renderSimpleIcon({
    icon,
    aProps: {
      href: '#',
      onClick: e => {
        e.preventDefault();
      }
    }
  });
});

export const SkillIconCloud = React.memo(() => {
  return (
    <Container>
      <h1>Minhas Habilidades</h1>
      <Cloud {...cloudProps}>{icons}</Cloud>
    </Container>
  );
});
