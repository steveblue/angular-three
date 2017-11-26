import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { WindowRef } from '../../services/window.service';
import { PerspectiveCamera, Scene, BoxGeometry, MeshNormalMaterial, Mesh, WebGLRenderer } from 'three';

@Component({
  moduleId: module.id,
  selector: 'three-app-scene',
  templateUrl: 'scene.component.html',
  styleUrls: ['scene.component.css']
})

export class SceneComponent implements OnInit {

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

    this.camera = new PerspectiveCamera( 70, this.window.innerWidth / this.window.innerHeight, 0.01, 10 );
    this.camera.position.z = 1;

    this.scene = new Scene();

    this.geometry = new BoxGeometry( 0.2, 0.2, 0.2 );
    this.material = new MeshNormalMaterial();

    this.mesh = new Mesh( this.geometry, this.material );
    this.scene.add( this.mesh );

    this.renderer = new WebGLRenderer( { antialias: true, canvas: this.canvas.nativeElement } );
    this.renderer.setSize(this.window.innerWidth, this.window.innerHeight );
    this._window.nativeWindow.document.body.appendChild( this.renderer.domElement );

    this.animate();

  }

  animate() {

    this.window.requestAnimationFrame(this.animate.bind(this));

    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;

    this.renderer.render(this.scene, this.camera);

  }


}
