import { useEffect, useRef, useCallback } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;

    // Neural network nodes
    const nodeCount = isMobile ? 30 : 70;
    const nodes: { x: number; y: number; vx: number; vy: number; phase: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Planes
    const planeCount = isMobile ? 3 : 6;
    const planes: { x: number; y: number; speed: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < planeCount; i++) {
      planes.push({
        x: Math.random() * W,
        y: 100 + Math.random() * (H - 200),
        speed: 0.3 + Math.random() * 0.7,
        size: 8 + Math.random() * 12,
        opacity: 0.03 + Math.random() * 0.04,
      });
    }

    // Particles
    const particleCount = isMobile ? 40 : 100;
    const particles: { x: number; y: number; z: number; vy: number; size: number }[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        z: Math.random(),
        vy: -(0.1 + Math.random() * 0.3),
        size: 0.5 + Math.random() * 1.5,
      });
    }

    // Flight path arcs
    const arcs: { sx: number; sy: number; ex: number; ey: number; progress: number; speed: number }[] = [];
    const arcCount = isMobile ? 2 : 4;
    for (let i = 0; i < arcCount; i++) {
      arcs.push({
        sx: Math.random() * W * 0.3,
        sy: H * 0.3 + Math.random() * H * 0.4,
        ex: W * 0.7 + Math.random() * W * 0.3,
        ey: H * 0.2 + Math.random() * H * 0.4,
        progress: Math.random(),
        speed: 0.001 + Math.random() * 0.002,
      });
    }

    let time = 0;

    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, W, H);

      // Layer 2: Neural network
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }

      // Draw connections
      ctx.strokeStyle = "rgba(0, 180, 216, 0.04)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const pulse = 0.5 + 0.5 * Math.sin(time * 2 + nodes[i].phase);
            ctx.globalAlpha = (1 - dist / 150) * 0.06 * pulse;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const pulse = 0.5 + 0.5 * Math.sin(time * 2 + n.phase);
        ctx.globalAlpha = 0.08 * pulse;
        ctx.fillStyle = "#00b4d8";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Layer 3: Flight path arcs
      for (const arc of arcs) {
        arc.progress += arc.speed;
        if (arc.progress > 1) arc.progress = 0;

        const cpx = (arc.sx + arc.ex) / 2;
        const cpy = Math.min(arc.sy, arc.ey) - 100 - Math.random() * 50;

        ctx.globalAlpha = 0.05;
        ctx.strokeStyle = "#00b4d8";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);
        ctx.beginPath();
        ctx.moveTo(arc.sx, arc.sy);
        ctx.quadraticCurveTo(cpx, cpy, arc.ex, arc.ey);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Layer 1: Planes
      for (const p of planes) {
        p.x += p.speed;
        if (p.x > W + 50) p.x = -50;

        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = "#00b4d8";
        ctx.save();
        ctx.translate(p.x, p.y);

        // Simple plane silhouette
        ctx.beginPath();
        ctx.moveTo(p.size, 0);
        ctx.lineTo(-p.size * 0.3, -p.size * 0.15);
        ctx.lineTo(-p.size * 0.6, -p.size * 0.5);
        ctx.lineTo(-p.size * 0.7, -p.size * 0.5);
        ctx.lineTo(-p.size * 0.4, -p.size * 0.1);
        ctx.lineTo(-p.size, -p.size * 0.2);
        ctx.lineTo(-p.size * 1.1, -p.size * 0.2);
        ctx.lineTo(-p.size * 0.5, 0);
        ctx.lineTo(-p.size * 1.1, p.size * 0.2);
        ctx.lineTo(-p.size, p.size * 0.2);
        ctx.lineTo(-p.size * 0.4, p.size * 0.1);
        ctx.lineTo(-p.size * 0.7, p.size * 0.5);
        ctx.lineTo(-p.size * 0.6, p.size * 0.5);
        ctx.lineTo(-p.size * 0.3, p.size * 0.15);
        ctx.closePath();
        ctx.fill();

        // Trail
        ctx.globalAlpha = p.opacity * 0.3;
        const grad = ctx.createLinearGradient(-p.size * 3, 0, -p.size, 0);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(1, "#00b4d8");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-p.size * 1.1, 0);
        ctx.lineTo(-p.size * 3, 0);
        ctx.stroke();

        ctx.restore();
      }

      // Layer 4: Depth particles
      for (const pt of particles) {
        pt.y += pt.vy;
        if (pt.y < -10) {
          pt.y = H + 10;
          pt.x = Math.random() * W;
        }

        ctx.globalAlpha = 0.03 + pt.z * 0.03;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size * (0.5 + pt.z * 0.5), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animRef.current = requestAnimationFrame(animate);
    };

    animate();
  }, [isMobile]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  );
};

export default AnimatedBackground;
