'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './FollowCursor.css';

const FollowCursor = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  
  useEffect(() => {
    // Wait for component to mount
    if (!heroRef.current || !titleRef.current) return;
    
    const images = heroRef.current.querySelectorAll(".cursor-picture");
    let lastX = 0;
    let lastY = 0;
    let index = 0;
    const minDistance = 180;
    const activeImages = new Set();
    let mouseX = 0, mouseY = 0;
    let needsUpdate = false;
    let animationReady = false;

    // Initial animation timeline
    gsap.timeline({
      onComplete: () => {
        animationReady = true;
      }
    })
      .to(titleRef.current, {
        backgroundPosition: "0",
        duration: 1.2,
        delay: 0.3,
        ease: "power2.out"
      })
      .to(titleRef.current, {
        scale: 1,
        duration: 1,
        ease: "power2.inOut"
      }, "-=0.3");

    // Mouse move handler
    const handleMouseMove = (e) => {
      if (!animationReady) return;

      mouseX = e.clientX;
      mouseY = e.clientY;
      needsUpdate = true;
    };

    heroRef.current.addEventListener("mousemove", handleMouseMove);

    // GSAP ticker for smooth animation
    const ticker = gsap.ticker.add(() => {
      if (!needsUpdate || !animationReady) return;
      needsUpdate = false;

      if (Math.hypot(mouseX - lastX, mouseY - lastY) < minDistance) return;

      lastX = mouseX;
      lastY = mouseY;

      if (index >= images.length) index = 0;
      const img = images[index];

      if (activeImages.has(img)) return;
      index++;
      activeImages.add(img);

      gsap.set(img, { 
        left: mouseX - img.width / 2 + 'px',
        top: mouseY - img.height / 2 + 'px',
        scale: 0.8,
        opacity: 0,
        position: 'absolute'
      });

      gsap.timeline()
        .to(img, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" })
        .to(img, { opacity: 1, duration: 0.1 })
        .to(img, { opacity: 0, scale: 0.8, duration: 0.3, ease: "power2.in" })
        .call(() => {
          activeImages.delete(img);
        });
    });

    // Cleanup function
    return () => {
      if (heroRef.current) {
        heroRef.current.removeEventListener("mousemove", handleMouseMove);
      }
      gsap.ticker.remove(ticker);
      gsap.killTweensOf([titleRef.current, ...images]);
    };
  }, []);

  return (
    <div className="hero" ref={heroRef}>
      <h1 className="title" ref={titleRef}>I need a Designer</h1>
      <img className="cursor-picture" src="https://i.imgur.com/tm9LeRE.jpeg" alt="" />
      <img className="cursor-picture" src="https://i.imgur.com/bBrWFiD.jpeg" alt="" />
      <img className="cursor-picture" src="https://i.imgur.com/SJtLugE.jpeg" alt="" />
      <img className="cursor-picture" src="https://i.imgur.com/KvE9QMh.jpeg" alt="" />
      <img className="cursor-picture" src="https://i.imgur.com/jWnTBs8.jpeg" alt="" />
      <img className="cursor-picture" src="https://i.imgur.com/udrKrcC.jpeg" alt="" />
      <img className="cursor-picture" src="https://i.imgur.com/s8GG2xK.jpeg" alt="" />
      <img className="cursor-picture" src="https://i.imgur.com/byEKsue.jpeg" alt="" />
      <img className="cursor-picture" src="https://i.imgur.com/F56OV7p.jpeg" alt="" />
      <img className="cursor-picture" src="https://i.imgur.com/nEOqNKT.jpeg" alt="" />
      <img className="cursor-picture" src="https://i.imgur.com/YQHYrr3.jpeg" alt="" />
      <img className="cursor-picture" src="https://i.imgur.com/GzBqpWV.jpeg" alt="" />
    </div>
  );
};

export default FollowCursor;