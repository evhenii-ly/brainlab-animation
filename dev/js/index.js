import 'phaser';
import physics from './data/sprite_physics';
import sprite from './data/sprite';

window.addEventListener('load', () => {
  const parentDiv = document.getElementById('scene');
  let shapeSize = 1;

  const config = {
    type: Phaser.AUTO,
    parent: 'scene',
    width: 1194,
    height: 388,
    transparent: true,
    scene: {
      preload,
      create,
    },
    physics: {
      default: 'matter',
      matter: {
        gravity: { y: 1 },
        debug: false,
      },
    },
  };

  const scene = new Phaser.Game(config);
  let fallingElements = []; // Array to store falling elements

  function preload() {
    this.load.atlas('sheet', '../assets/images/sprite.png', sprite);
    this.load.json('shapes', physics);
  }

  function create() {
    const shapeWidth = 171;
    const shapeHeight = 108;

    const shapes = this.cache.json.get('shapes');
    const spawnAreaWidth = this.sys.game.config.width - shapeWidth;

    // Set the bounds of the world with walls but no ceiling
    // eslint-disable-next-line max-len
    this.matter.world.setBounds(20, 0, this.sys.game.config.width - 40, this.sys.game.config.height - 20, 32, true, true, false, true);

    // Function to create the falling elements
    function createFallingElements(shapeType, ext, count) {
      // Clear previous elements from the scene
      for (const element of fallingElements) {
        element.destroy();
      }
      fallingElements = [];

      // Create new falling elements
      for (let i = 0; i < count; i++) {
        const shape = this.matter.add.sprite(
          Phaser.Math.Between(100, spawnAreaWidth),
          Phaser.Math.Between(-shapeHeight, -shapeHeight * 5),
          'sheet',
          `${shapeType}.${ext}`,
          {
            shape: shapes[shapeType],
          },
        );

        shape.setScale(shapeSize);
        fallingElements.push(shape);
      }
    }

    const buttons = document.querySelectorAll('.button');

    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        // eslint-disable-next-line max-len
        createFallingElements.call(this, e.target.dataset.name, e.target.dataset.ext, e.target.dataset.count);
      });
    });
  }

  // Add the 'resize' event listener
  window.addEventListener('resize', () => {
    const newWidth = parentDiv.clientWidth;

    if (window.matchMedia('(max-width: 1194px)').matches) {
      shapeSize = newWidth / 600;
    }

    scene.scale.resize(newWidth, 388);
  });

  if (window.matchMedia('(max-width: 1194px)').matches) {
    shapeSize = parentDiv.clientWidth / 600;
  }
});
