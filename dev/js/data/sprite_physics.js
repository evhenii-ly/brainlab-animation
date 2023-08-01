const physics = {
  generator_info: 'Shape definitions generated with PhysicsEditor. Visit https://www.codeandweb.com/physicseditor',
  sunflower: {
    type: 'fromPhysicsEditor',
    label: 'sunflower',
    isStatic: false,
    density: 0.1,
    restitution: 0,
    friction: 0.1,
    frictionAir: 0.01,
    frictionStatic: 0.5,
    collisionFilter: {
      group: 0,
      category: 1,
      mask: 255,
    },
    fixtures: [
      {
        label: '',
        isSensor: false,
        vertices: [
          // eslint-disable-next-line max-len
          [{ x: 143, y: 58 }, { x: 118, y: 20 }, { x: 76, y: 17 }, { x: 45, y: 29 }, { x: 31, y: 60 }, { x: 53, y: 87 }, { x: 96, y: 99 }],
        ],
      },
    ],
  },
  rapeseed: {
    type: 'fromPhysicsEditor',
    label: 'rapeseed',
    isStatic: false,
    density: 0.10000000149011612,
    restitution: 0,
    friction: 0.10000000149011612,
    frictionAir: 0.009999999776482582,
    frictionStatic: 0.5,
    collisionFilter: {
      group: 0,
      category: 1,
      mask: 255,
    },
    fixtures: [
      {
        label: '',
        isSensor: false,
        vertices: [
          [{ x: 36, y: 92 }, { x: 78, y: 60 }, { x: 47, y: 12 }, { x: 10, y: 39 }],
        ],
      },
    ],
  },
  palm: {
    type: 'fromPhysicsEditor',
    label: 'palm',
    isStatic: false,
    density: 0.10000000149011612,
    restitution: 0,
    friction: 0.10000000149011612,
    frictionAir: 0.009999999776482582,
    frictionStatic: 0.5,
    collisionFilter: {
      group: 0,
      category: 1,
      mask: 255,
    },
    fixtures: [
      {
        label: '',
        isSensor: false,
        vertices: [
          [{ x: 147, y: 78 }, { x: 125, y: 68 }, { x: 43, y: 58 }, { x: 133, y: 90 }],
          [{ x: 107, y: 129 }, { x: 133, y: 90 }, { x: 43, y: 58 }],
          [{ x: 66, y: 37 }, { x: 43, y: 58 }, { x: 125, y: 68 }],
        ],
      },
    ],
  },
};

export default physics;
