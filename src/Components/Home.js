import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import styled from "styled-components";
import { Route, Switch, Link } from "react-router-dom";

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
  },
  // Vertex Shader
  glsl`
    precision mediump float;
    varying vec2 vUv;
    varying float vWave;
    uniform float uTime;
    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);
    void main() {
      vUv = uv;
      vec3 pos = position;
      float noiseFreq = 1.0;
      float noiseAmp = 0.1;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
    }
  `,
  // Fragment Shader
  glsl`
    precision mediump float;
    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;
    varying vec2 vUv;
    varying float vWave;
    void main() {
      float wave = vWave * 0.09;
      vec3 texture = texture2D(uTexture, vUv + wave).rgb;
      gl_FragColor = vec4(texture, 1.0); 
    }
  `
);

extend({ WaveShaderMaterial });

const Wave = () => {
  const ref = useRef();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  const [image] = useLoader(THREE.TextureLoader, [
    "https://images.unsplash.com/photo-1576181456177-2b99ac0aa1ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjgxNDQxfQ&utm_source=api_app&utm_medium=referral&utm_campaign=api-credit",
  ]);

  return (
    <mesh>
      <planeBufferGeometry args={[0.8, 0.9, 16, 16]} />
      <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
    </mesh>
  );
};

export default function Home() {
  const Scene = () => {
    return (
      <Canvas camera={{ fov: 12, position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Wave />
        </Suspense>
      </Canvas>
    );
  };
  return (
    <>
      <StyledHome>
        <div className={"animation"}>
          <Link to="/login">MISSION</Link>
          {/* <a href="/login">MISSION</a> */}

          <img
            className="front"
            src="https://images.unsplash.com/photo-1576181456177-2b99ac0aa1ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjgxNDQxfQ&utm_source=api_app&utm_medium=referral&utm_campaign=api-credit"
            alt="marketplace"
          />
          <Scene className={"image"} />
        </div>
        <div className={"info"}>
          <div className={"serviceContainer"}>
            <h2>Our Services & Products</h2>
          </div>
          <div className={"grid"}>
            <h3>
              {" "}
              Field Market combines innovative technologies with proven deep
              expertise to empower women as forces of change in markets,
              communities, and households.
            </h3>
            <div className={"grid-container"}>
              <div className={"grid-item"}>
                <h2>RESEARCH & EVIDENCE</h2>
                <h4>
                  We collect and analyse vital data to understand barriers to
                  women’s economic empowerment.
                </h4>
              </div>
              <div className={"grid-item"}>
                <h2>FIELD COLLECT</h2>
                <h4>
                  Design, test, and deploy survey and monitoring tools remotely
                  using our end-to-end mobile data collection solutions.
                </h4>
              </div>
              <div className={"grid-item"}>
                <h2>FIELD MARKET INSIGHTS</h2>
                <h4>
                  Analyse, segment, and extract actionable insights on East
                  African cross-border trade using our interactive data
                  dashboard.
                </h4>
              </div>
              <div className={"grid-item"}>
                <h2>TRADE & MARKET INFORMATION</h2>
                <h4>
                  Our mobile information service delivers real-time market
                  prices, exchange rates, information updates, and trade
                  procedures to traders across East Africa.
                </h4>
              </div>
              <div className="grid-item">
                <h2>TECHNOLOGY SOLUTIONS</h2>
                <h4>
                  We develop technologies to measurably improve women’s access
                  to information, business opportunities, and markets.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </StyledHome>
    </>
  );
}

const StyledHome = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: rgba(29, 26, 26, 1);
    margin: 2%;
    font-size: 2rem;
    font-family: "Roboto Condensed", sans-serif;
    position: absolute;
    top: 60%;
    left: 49%;
    transform: translate(-50%, -50%);
    z-index: 2;
    font-weight: 900;
    letter-spacing: 0.04em;
    white-space: nowrap;
    /* border: 2px solid rgb(29, 26, 26); */
    text-decoration: none;
    background: rgba(245, 245, 245, 0.8);
    padding: 0 1%;
    transition: ease 0.5s;
  }
  a:hover {
    filter: brightness(150%);
    background: rgba(245, 245, 245, 1);
    transform: translate(-50%, -50%) scale(1.05);
    transition: ease 0.2s;
  }
  .animation {
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  @media only screen and (max-width: 1000px) {
    //some value
    .animation {
      width: 75%;
    }
    .serviceContainer {
      height: 20vh;
    }
  }
  canvas {
    transition: 2s;
  }

  .front {
    width: 35.5%;
    height: 70.5vh;
    transition: 2s;
    position: absolute;
    z-index: 1;
  }

  .front:hover {
    filter: opacity(0);
  }
  .info {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: white;
    h2 {
      font-family: "Alegreya Sans SC", sans-serif;
      margin-top: 0%;
      font-size: 3rem;
      border-bottom: 5px solid #008b57;
      @media only screen and (max-width: 500px) {
        //some value
        margin-top: 5%;
        font-size: 2rem;
      }
    }
  }
  .serviceContainer {
    height: 14vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* @media only screen and (max-width: 1000px){ //some value
   height: 20vh;

} */
  }
  .grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    background: linear-gradient(155deg, gold, chocolate, brown, darkred);
    background-size: 400% 400%;
    animation: gradient 12s ease infinite;
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    h3 {
      font-size: 2rem;
      color: rgba(235, 235, 235, 1);
      padding: 0 5%;
    }
  }
  .grid-container {
    display: grid;
    height: auto;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 2fr));
    background-color: transparent;
    padding: 3%;
    margin-bottom: 5%;
    @media only screen and (max-width: 500px) {
      //some value
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }
  }

  .grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    text-align: center;
    h2 {
      font-size: 2rem;
    }
    h4 {
      font-size: 1rem;
    }
  }
  .grid-item:hover {
    background-color: rgba(255, 255, 255, 0.95);
  }
`;
