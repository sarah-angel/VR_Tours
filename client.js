
import {ReactInstance, Module, Surface} from 'react-360-web';

import {TooltipModule} from './modules/Tooltip.module'
import {TransitionModule} from './modules/Transition.module'

export let r360

function init(bundle, parent, options = {}) {
   r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
      new TooltipModule(),
      new TransitionModule(),
    ],
    ...options,
  });

  //Panel to show introduction message to user
  introPanel = new Surface(
    500, //width
    400, //height
    Surface.SurfaceShape.Cylinder
  )

  // Render app content to the introPanel surface
  introRoot = r360.renderToSurface(
    r360.createRoot('MainComponent', { /* initial props */ }),
    r360.getDefaultSurface()
  );
 
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('./img/360/city_center.jpg'));
}

window.React360 = {init};
