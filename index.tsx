import { HDKComponent, HNode, Prefab, render, InfoPanel, GLB } from '@hiber3d/hdk-react';
import { Ground, Spawnpoint } from '@hiber3d/hdk-react-components';

const Sign: HDKComponent<{ header: string; body: string; url: string }> = ({ ...props }) => (
  <InfoPanel {...props} openUrlInNewTab>
    <Prefab id="sign_wooden_01_question" rotY={180} />
  </InfoPanel>
);

const World = () => (
  <HNode>
    <Spawnpoint />
    <GLB src="/music_studio_at_home.glb" />
  </HNode>
);

/**
 * Render an almost empty world
 */
render(<World />, { environment: 'sunrise_01' });
