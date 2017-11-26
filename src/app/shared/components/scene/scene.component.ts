import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { WindowRef } from '../../services/window.service';

declare let THREE: any;

@Component({
  moduleId: module.id,
  selector: 'three-app-scene',
  templateUrl: 'scene.component.html',
  styleUrls: ['scene.component.css']
})

export class SceneComponent implements OnInit, OnDestroy {

  @ViewChild('canvas') canvas: ElementRef;
  window: Window;
  camera: any;
  scene: any;
  renderer: any;
  geometry: any;
  material: any;
  mesh: any;

  constructor(private _window: WindowRef) {

    this.window = this._window.nativeWindow;

  }


  ngOnInit() {

    this.camera = new THREE.PerspectiveCamera( 70, this.window.innerWidth / this.window.innerHeight, 0.01, 10 );
    this.camera.position.z = 1;

    this.scene = new THREE.Scene();

    this.geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    this.material = new THREE.MeshNormalMaterial();

    this.mesh = new THREE.Mesh( this.geometry, this.material );
    this.scene.add( this.mesh );

    this.renderer = new THREE.WebGLRenderer( { antialias: true, canvas: this.canvas.nativeElement } );
    this.renderer['setSize'](this.window.innerWidth, this.window.innerHeight );
    this._window.nativeWindow.document.body.appendChild( this.renderer['domElement'] );

    this.animate();

  }

  animate() {

    this.window.requestAnimationFrame(this.animate.bind(this));

    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;

    this.renderer['render'](this.scene, this.camera);

  }

  ngOnDestroy() {



  }

}
