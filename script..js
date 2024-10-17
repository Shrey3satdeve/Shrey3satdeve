// Initialize Scene, Camera, and Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), alpha: true });

// Set canvas size to fit screen
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Create a Cube Geometry and Basic Material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xbc3e30 });
const cube = new THREE.Mesh(geometry, material);

// Add Cube to Scene
scene.add(cube);

// Position the Camera
camera.position.z = 5;

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the Cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render the Scene
    renderer.render(scene, camera);
}

// Adjust canvas size when window resizes
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Start the Animation Loop
animate();
