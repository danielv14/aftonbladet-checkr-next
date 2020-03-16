const sharedMargin = { top: 50, right: 50, bottom: 50, left: 50 };

const commonProperties = {
  schema: 'nivo',
  margin: sharedMargin,
};

export const commonPropertiesLineComponent = {
  ...commonProperties,
  axisTop: null,
  axisRight: null,
  pointSize: 10,
  useMesh: true,
};

export const commonPropertiesBarComponent = {
  ...commonProperties,
  animate: true,
  padding: 0.3,
};

export const commonPropertiesPieComponent = {
  ...commonProperties,
  margin: {
    top: 40,
    right: 80,
    bottom: 80,
    left: 80,
  },
  padAngle: 0.7,
  innerRadius: 0.5,
  radialLabelsTextColor: '#333333',
  slicesLabelsTextColor: '#333333',
};
