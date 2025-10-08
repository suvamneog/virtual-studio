import { HDKComponent, HNode, Prefab, render, InfoPanel, Model } from '@hiber3d/hdk-react';
import { Ground, Spawnpoint } from '@hiber3d/hdk-react-components';

const Sign: HDKComponent<{ header: string; body: string; url: string }> = ({ ...props }) => (
  <InfoPanel {...props} openUrlInNewTab>
    <Prefab id="sign_wooden_01_question" rotY={180} />
  </InfoPanel>
);

const World = () => (
  <HNode>
    <Ground />
    <Spawnpoint />
    <Model src="music_studio_at_home.glb" z={5} />
    <Model src="studio_monitor_jbl_lsr308.glb" x={2} z={5} />
    <Sign
      header="Welcome to Hiber3D HDK!"
      body="This is The Getting Started world. Press O to learn how to build something!"
      url="https://developer.hiber3d.com/docs/getting-started/fundamentals"
      z={3}
    />
  </HNode>
);

/**
 * Render an almost empty world
 */
render(<World />, { environment: 'sunrise_01' });
