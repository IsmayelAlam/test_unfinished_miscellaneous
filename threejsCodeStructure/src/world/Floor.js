import * as THREE from "three";

import Experience from "../Experience";

export default class Floor {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setGeo();
    this.setTex();
    this.setMat();
    this.setMesh();
  }

  setGeo() {
    this.geometry = new THREE.CircleGeometry(5, 64);
  }
  setTex() {
    this.textures = {};

    this.textures.color = this.resources.items.dirtColorTexture;
    this.textures.color.colorSpace = THREE.SRGBColorSpace;
    this.textures.color.repeat.set(1.5, 1.5);
    this.textures.color.wrapS = THREE.RepeatWrapping;
    this.textures.color.wrapT = THREE.RepeatWrapping;

    this.textures.normal = this.resources.items.dirtNormalTexture;
    this.textures.normal.repeat.set(1.5, 1.5);
    this.textures.normal.wrapS = THREE.RepeatWrapping;
    this.textures.normal.wrapT = THREE.RepeatWrapping;
  }
  setMat() {
    this.material = new THREE.MeshStandardMaterial({
      map: this.textures.color,
      normalMap: this.textures.normal,
      side: THREE.DoubleSide,
    });
  }
  setMesh() {
    this.floor = new THREE.Mesh(this.geometry, this.material);
    this.floor.receiveShadow = true;
    this.floor.rotation.x = -Math.PI * 0.5;
    this.scene.add(this.floor);
  }
}
