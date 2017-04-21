import React from 'react';
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import Inspector from 'redux-devtools-inspector';

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changeMonitorKey="ctrl-m"
    changePositionKey="ctrl-p"
  >
    <LogMonitor theme="nicinabox" />
    <Inspector theme="solarized" />
  </DockMonitor>
);
