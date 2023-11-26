import { FC, useEffect, useRef } from "react";

const resizeCanvasToDisplaySize = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void => {
  const { width, height } = canvas.getBoundingClientRect();
  canvas.width = width
  canvas.height = height
  context.scale(width, height);
};

const useSetupCanvas = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;
    context.imageSmoothingEnabled = true;
    resizeCanvasToDisplaySize(canvas, context);
  }, [canvasRef]);
}

const draw = (context: CanvasRenderingContext2D, fraction: number): void => {
  context.fillStyle = '#000000'
  context.beginPath()
  context.arc(0.5, 0.5, 0.40, 0, fraction * 2 * Math.PI);
  context.strokeStyle = '#0f0';
  context.lineWidth = 0.05;
  context.stroke();
}

interface Props {
  delay: number;
  onCompletion: () => void;
}

const RadialProgressIndicator: FC<Props> = ({ delay, onCompletion }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useSetupCanvas(canvasRef);
  const startRef = useRef(Date.now());
  const trippedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;
    let animationFrameId: number

    const render = () => {
      if (trippedRef.current) return;
      const runTime = Date.now() - startRef.current;
      const fraction = runTime / delay;
      draw(context, fraction);
      if (fraction >= 1) {
        trippedRef.current = true;
        onCompletion();
      } else {
        animationFrameId = requestAnimationFrame(render);
      }
    }

    render();
    return () => {
      cancelAnimationFrame(animationFrameId);
    }
  });

  return <canvas className='w-full h-full absolute top-0 left-0' ref={canvasRef} />
};

export default RadialProgressIndicator;
