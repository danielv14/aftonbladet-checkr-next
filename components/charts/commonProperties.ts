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
